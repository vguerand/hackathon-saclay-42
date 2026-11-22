'use client';

import type { Challenge } from '$lib/types/challenge';
import { ChallengeTile } from '@/features/challenges/components/ChallengeTile';
import { TEXTS as t } from '$lib/content/texts';
import { Box, Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import Link from 'next/link';

type Props = {
	challenges: Challenge[];
};

export function HomeChallengeHighlights({ challenges }: Props) {
	return (
		<Box py={{ base: 48, md: 72 }} style={{ backgroundColor: '#f8fafc' }}>
			<Container size="xl">
				<Box
					mb={{ base: 28, md: 44 }}
					pb="sm"
					style={{
						borderBottom: '1px solid #313E48',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						gap: '16px'
					}}
				>
					<Box>
						<Text
							size="xs"
							fw={800}
							c="#63003C"
							style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}
						>
							{t.highlights.sectionNumber}
						</Text>
						<Title
							order={2}
							mt="4px"
							style={{
								fontFamily: 'Lora, serif',
								color: '#313E48',
								fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
								fontWeight: 800,
								textTransform: 'uppercase'
							}}
						>
							{t.highlights.title}
						</Title>
					</Box>

					<Button
						component={Link}
						href="/defis"
						variant="outline"
						color="saclay-plum"
						size="sm"
						style={{
							borderRadius: 0,
							borderWidth: '1px',
							fontWeight: 800,
							letterSpacing: '0.06em'
						}}
					>
						{t.highlights.allChallenges} ({challenges.length}) →
					</Button>
				</Box>

				{challenges.length === 0 && (
					<Text c="#64748b" size="md">
						{t.highlights.empty}
					</Text>
				)}

				<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
					{challenges.slice(0, 6).map((challenge) => (
						<ChallengeTile key={challenge.id} challenge={challenge} />
					))}
				</SimpleGrid>

				<Box ta="center" mt="2rem" display={challenges.length === 0 ? 'none' : undefined}>
					<Button
						component={Link}
						href="/defis"
						size="md"
						color="saclay-plum"
						style={{
							borderRadius: 0,
							fontWeight: 800,
							letterSpacing: '0.06em'
						}}
					>
						{t.highlights.exploreAll}
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
