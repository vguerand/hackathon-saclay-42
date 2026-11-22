import { getChallenges } from '$lib/content/challenges';
import { ChallengesListView } from '@/features/challenges/ChallengesListView';

export default async function DefisPage() {
	return <ChallengesListView challenges={await getChallenges()} />;
}
