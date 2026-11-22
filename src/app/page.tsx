import { getChallenges } from '$lib/content/challenges';
import { HomeView } from '@/features/home/HomeView';

export default async function HomePage() {
	return <HomeView challenges={await getChallenges()} />;
}
