import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const PHOTOS_FOLDER = 'photos-evenement';
const ALLOWED_PHOTO_EXTENSIONS = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp']);

export type EventPhoto = {
	filename: string;
	href: string;
	alt: string;
	size: number;
	width?: number;
	height?: number;
};

async function getPhotosDirectory() {
	const directory = join(process.cwd(), 'public', PHOTOS_FOLDER);
	try {
		return (await stat(directory)).isDirectory() ? directory : undefined;
	} catch {
		return undefined;
	}
}

function isAllowedPhoto(filename: string) {
	const lowerFilename = filename.toLowerCase();
	return [...ALLOWED_PHOTO_EXTENSIONS].some((extension) => lowerFilename.endsWith(extension));
}

function displayNameFor(filename: string) {
	return filename
		.replace(/\.[^.]+$/, '')
		.replace(/[_-]+/g, ' ')
		.trim();
}

function readJpegDimensions(buffer: Buffer) {
	let offset = 2;
	if (buffer[0] !== 0xff || buffer[1] !== 0xd8) return undefined;

	while (offset < buffer.length) {
		if (buffer[offset] !== 0xff) return undefined;

		const marker = buffer[offset + 1];
		const length = buffer.readUInt16BE(offset + 2);
		const isStartOfFrame =
			(marker >= 0xc0 && marker <= 0xc3) ||
			(marker >= 0xc5 && marker <= 0xc7) ||
			(marker >= 0xc9 && marker <= 0xcb) ||
			(marker >= 0xcd && marker <= 0xcf);

		if (isStartOfFrame) {
			return {
				height: buffer.readUInt16BE(offset + 5),
				width: buffer.readUInt16BE(offset + 7)
			};
		}

		offset += 2 + length;
	}

	return undefined;
}

async function readImageDimensions(filePath: string, filename: string) {
	const lowerFilename = filename.toLowerCase();
	if (!lowerFilename.endsWith('.jpg') && !lowerFilename.endsWith('.jpeg')) return undefined;

	return readJpegDimensions(await readFile(filePath));
}

export async function getEventPhotos(): Promise<EventPhoto[]> {
	const directory = await getPhotosDirectory();
	if (!directory) return [];

	const entries = await readdir(directory, { withFileTypes: true });
	const photos = await Promise.all(
		entries
			.filter((entry) => entry.isFile() && isAllowedPhoto(entry.name))
			.sort((first, second) => first.name.localeCompare(second.name, 'fr'))
			.map(async (entry) => {
				const filePath = join(directory, entry.name);
				const [fileStat, dimensions] = await Promise.all([
					stat(filePath),
					readImageDimensions(filePath, entry.name)
				]);
				const displayName = displayNameFor(entry.name);

				return {
					filename: entry.name,
					href: `/${PHOTOS_FOLDER}/${encodeURIComponent(entry.name)}`,
					alt: displayName ? `Photo de l’évènement : ${displayName}` : 'Photo de l’évènement',
					size: fileStat.size,
					width: dimensions?.width,
					height: dimensions?.height
				};
			})
	);

	return photos;
}
