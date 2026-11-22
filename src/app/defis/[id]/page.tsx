import { getChallengeById, getChallenges } from '$lib/content/challenges';
import { ChallengeDetailView } from '@/features/challenges/ChallengeDetailView';
import { notFound } from 'next/navigation';

type Props = {
	params: Promise<{ id: string }>;
};

export const dynamicParams = false;

// L'export statique exige au moins une page par route dynamique. Tant qu'aucun défi
// n'est publié, on génère une page fictive qui répond « introuvable ».
const EMPTY_PLACEHOLDER_ID = '_';

export async function generateStaticParams() {
	const challenges = await getChallenges();
	return challenges.length > 0
		? challenges.map((challenge) => ({ id: challenge.id }))
		: [{ id: EMPTY_PLACEHOLDER_ID }];
}

export default async function ChallengeDetailPage({ params }: Props) {
	const { id } = await params;
	const challenge = await getChallengeById(id);

	if (!challenge) {
		notFound();
	}

	return <ChallengeDetailView challenge={challenge} />;
}
