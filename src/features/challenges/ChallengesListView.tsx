'use client';

import { LINKS } from '$lib/config/links';
import type { Challenge } from '$lib/types/challenge';
import { Box, Button, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import { ChallengeTile } from './components/ChallengeTile';

type Props = {
	challenges: Challenge[];
};

export function ChallengesListView({ challenges }: Props) {
	return (
		<Container size="xl" py={{ base: 36, md: 64 }}>
			{/* Header Éditorial Style Design Spot */}
			<Box mb={{ base: 28, md: 48 }} pb="md" style={{ borderBottom: '1px solid #313E48' }}>
				<Text
					size="xs"
					fw={800}
					c="#63003C"
					style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'monospace' }}
				>
					01 / EXPLORATION DES PROJETS
				</Text>
				<Title
					order={1}
					mt="xs"
					style={{
						fontFamily: 'Lora, serif',
						color: '#313E48',
						fontSize: 'clamp(2rem, 4vw, 3.2rem)',
						fontWeight: 800,
						textTransform: 'uppercase'
					}}
				>
					Les Défis du Hackathon
				</Title>
				<Text size="md" c="#64748b" mt="xs" style={{ maxWidth: 720 }}>
					Un fil conducteur commun : la donnée territoriale. Les défis partagent une même ambition :
					mobiliser les données pour mieux comprendre les territoires, éclairer les décisions et
					agir.
				</Text>

				{(LINKS.submitChallenge || LINKS.submitIdea) && (
					<Group justify="flex-start" gap="md" mt="xl">
						{LINKS.submitChallenge && (
							<Button
								component="a"
								href={LINKS.submitChallenge}
								target="_blank"
								rel="noopener noreferrer"
								color="saclay-plum"
								size="sm"
								leftSection={<iconify-icon icon="ri:flag-line"></iconify-icon>}
								style={{ borderRadius: 0, fontWeight: 800, letterSpacing: '0.06em' }}
							>
								Porter un défi officiel
							</Button>
						)}
						{LINKS.submitIdea && (
							<Button
								component="a"
								href={LINKS.submitIdea}
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								color="saclay-slate"
								size="sm"
								leftSection={<iconify-icon icon="ri:lightbulb-line"></iconify-icon>}
								style={{
									borderRadius: 0,
									borderWidth: '1px',
									fontWeight: 800,
									letterSpacing: '0.06em'
								}}
							>
								Proposer une idée de projet
							</Button>
						)}
					</Group>
				)}
			</Box>

			{/* Grille des défis */}
			<Box mb="xl">
				<Box mb="md" pb="xs" style={{ borderBottom: '1px solid #e2e8f0' }}>
					<Text
						size="xs"
						fw={800}
						c="#63003C"
						style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
					>
						{`// PORTEURS DE DÉFIS (${challenges.length})`}
					</Text>
				</Box>
				{challenges.length === 0 && (
					<Text c="#64748b" size="md" py="xl">
						Les défis seront publiés ici dès leur sélection.
					</Text>
				)}
				<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
					{challenges.map((challenge) => (
						<ChallengeTile key={challenge.id} challenge={challenge} />
					))}
				</SimpleGrid>
			</Box>
		</Container>
	);
}
