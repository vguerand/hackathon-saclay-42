import { getEventPhotos } from '$lib/content/event-photos';
import { GalleryView } from '@/features/gallery/GalleryView';

export default async function GaleriePhotosPage() {
	return <GalleryView photos={await getEventPhotos()} />;
}
