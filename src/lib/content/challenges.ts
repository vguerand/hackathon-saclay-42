import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Challenge } from '$lib/types/challenge';

const CHALLENGES_DIRECTORY = join(process.cwd(), 'content', 'defis');
const PATTERN_COUNT = 20;

type Frontmatter = Record<string, string | string[]>;

function unquote(value: string): string {
	const trimmed = value.trim();
	const isQuoted =
		trimmed.length >= 2 &&
		((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
			(trimmed.startsWith("'") && trimmed.endsWith("'")));
	return isQuoted ? trimmed.slice(1, -1) : trimmed;
}

/**
 * Lit l'en-tête `---` d'un fichier de défi. Format volontairement réduit :
 * une `clé: valeur` par ligne, et les listes sur une ligne (`themes: [IA, Données]`).
 */
export function parseChallengeFile(source: string): { data: Frontmatter; body: string } {
	const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(source);
	if (!match) return { data: {}, body: source.trim() };

	const data: Frontmatter = {};
	for (const line of match[1].split(/\r?\n/)) {
		const separator = line.indexOf(':');
		if (separator === -1 || line.trimStart().startsWith('#')) continue;

		const key = line.slice(0, separator).trim();
		const rawValue = line.slice(separator + 1).trim();
		if (!key || !rawValue) continue;

		data[key] =
			rawValue.startsWith('[') && rawValue.endsWith(']')
				? rawValue.slice(1, -1).split(',').map(unquote).filter(Boolean)
				: unquote(rawValue);
	}

	return { data, body: match[2].trim() };
}

function text(value: string | string[] | undefined): string | undefined {
	return typeof value === 'string' && value ? value : undefined;
}

function slugify(value: string): string {
	return value
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function patternFor(id: string): number {
	let hash = 0;
	for (const character of id) hash = (hash * 31 + character.charCodeAt(0)) % 9973;
	return (hash % PATTERN_COUNT) + 1;
}

export function toChallenge(id: string, source: string): Challenge {
	const { data, body } = parseChallengeFile(source);
	const themes = Array.isArray(data.themes) ? data.themes : [];

	return {
		id,
		title: text(data.titre) ?? id,
		shortDescription: text(data.resume) ?? '',
		problems: [...body.matchAll(/^###\s+(.+)$/gm)].map((heading) => heading[1].trim()),
		description: body || undefined,
		themes: themes.map((label) => ({ id: slugify(label), label })),
		image: text(data.image),
		repoUrl: text(data.depot),
		branch: text(data.branche),
		demoUrl: text(data.demo),
		slidesUrl: text(data.presentation),
		gradientVariant: patternFor(id)
	};
}

/** Les fichiers dont le nom commence par `_` (modèle, brouillons) sont ignorés. */
export async function getChallenges(): Promise<Challenge[]> {
	let filenames: string[];
	try {
		filenames = await readdir(CHALLENGES_DIRECTORY);
	} catch {
		return [];
	}

	const challengeFiles = filenames
		.filter((filename) => filename.endsWith('.md') && !filename.startsWith('_'))
		.sort((first, second) => first.localeCompare(second, 'fr'));

	return Promise.all(
		challengeFiles.map(async (filename) =>
			toChallenge(
				filename.replace(/\.md$/, ''),
				await readFile(join(CHALLENGES_DIRECTORY, filename), 'utf-8')
			)
		)
	);
}

export async function getChallengeById(id: string): Promise<Challenge | undefined> {
	return (await getChallenges()).find((challenge) => challenge.id === id);
}
