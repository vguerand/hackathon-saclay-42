import { CONFERENCES } from '$lib/content/conferences';
import { ConferencesView } from '@/features/conferences/ConferencesView';

export default function ConferencesPage() {
	return <ConferencesView conferences={CONFERENCES} />;
}
