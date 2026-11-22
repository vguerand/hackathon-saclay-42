import type { Challenge } from '$lib/types/challenge';
import { Box } from '@mantine/core';
import { HomeChallengeHighlights } from './components/HomeChallengeHighlights';
import { HomeHero } from './components/HomeHero';
import { PartnerStatements } from './components/PartnerStatements';

type HomeViewProps = {
	challenges: Challenge[];
};

export function HomeView({ challenges }: HomeViewProps) {
	return (
		<Box style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 140px)' }}>
			<HomeHero />
			<PartnerStatements />
			<HomeChallengeHighlights challenges={challenges} />
		</Box>
	);
}
