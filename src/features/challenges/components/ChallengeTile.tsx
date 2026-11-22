'use client';

import type { Challenge } from '$lib/types/challenge';
import { getChallengePattern, PATTERN_SIZE } from '$lib/utils/patterns';
import { formatCarrierDisplayName } from '$lib/utils/text';
import { Box, Button, Card, Group, rem, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import * as React from 'react';
import { ThemeTags } from './ThemeTags';

type Props = {
	challenge: Challenge;
};

export function ChallengeTile({ challenge }: Props) {
	const [failedImageUrl, setFailedImageUrl] = React.useState<string | null>(null);
	const canShowImage = Boolean(challenge.image) && failedImageUrl !== challenge.image;

	const pattern = getChallengePattern(challenge.gradientVariant);
	const carrierDisplayName = formatCarrierDisplayName(challenge.title);

	return (
		<Box style={{ position: 'relative', height: '100%' }}>
			<Card
				padding="lg"
				radius="0"
				withBorder
				style={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#ffffff',
					borderColor: '#e2e8f0',
					borderTop: '3px solid #63003C',
					boxShadow: 'none',
					transition: 'border-color 150ms ease, background-color 150ms ease'
				}}
			>
				{/* Header Métadonnées éditoriales style Design Spot */}
				<Group
					justify="space-between"
					align="center"
					mb="xs"
					pb="xs"
					style={{ borderBottom: '1px solid #f1f5f9' }}
				>
					<Text
						size="xs"
						fw={800}
						c="#63003C"
						style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'monospace' }}
					>
						PORTEUR DE DÉFI
					</Text>
				</Group>

				{/* Section Visuelle ou Motif */}
				<Card.Section
					style={{
						position: 'relative',
						height: 160,
						overflow: 'hidden',
						borderBottom: '1px solid #e2e8f0'
					}}
				>
					{canShowImage ? (
						<img
							src={challenge.image}
							alt={`Logo ${challenge.title}`}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
								backgroundColor: '#ffffff',
								padding: rem(12)
							}}
							onError={() => setFailedImageUrl(challenge.image ?? null)}
						/>
					) : (
						<Box
							style={{
								position: 'absolute',
								inset: 0,
								backgroundImage: pattern,
								backgroundSize: `${PATTERN_SIZE} ${PATTERN_SIZE}`,
								backgroundRepeat: 'repeat',
								backgroundPosition: 'center',
								backgroundColor: '#313E48',
								display: 'flex',
								alignItems: 'flex-end',
								padding: '12px'
							}}
						>
							<div
								style={{
									position: 'absolute',
									inset: 0,
									background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
								}}
							/>
							<Text
								size="xs"
								fw={800}
								c="#ffffff"
								style={{
									position: 'relative',
									zIndex: 2,
									letterSpacing: '0.08em',
									textTransform: 'uppercase'
								}}
							>
								{carrierDisplayName}
							</Text>
						</Box>
					)}
				</Card.Section>

				{/* Contenu & Typographie */}
				<Stack justify="space-between" style={{ flex: 1, marginTop: rem(16) }} gap="md">
					<Box>
						<Title
							order={3}
							style={{
								color: '#313E48',
								fontFamily: 'Lora, serif',
								fontSize: rem(19),
								fontWeight: 800,
								lineHeight: 1.3,
								marginBottom: rem(8)
							}}
						>
							<Link
								href={`/defis/${challenge.id}`}
								style={{ color: 'inherit', textDecoration: 'none' }}
							>
								{challenge.title}
							</Link>
						</Title>

						<ThemeTags themes={challenge.themes} size="xs" style={{ marginBottom: rem(10) }} />

						{challenge.shortDescription ? (
							<Text size="sm" c="#475569" lineClamp={3} style={{ lineHeight: 1.6 }}>
								{challenge.shortDescription}
							</Text>
						) : (
							<ul
								style={{
									margin: 0,
									paddingLeft: rem(18),
									color: '#475569',
									fontSize: rem(14),
									lineHeight: 1.5
								}}
							>
								{challenge.problems.map((problem) => (
									<li key={problem} style={{ marginBottom: rem(6) }}>
										{problem}
									</li>
								))}
							</ul>
						)}
					</Box>

					{/* Footer de Carte Éditorial */}
					<Box pt="sm" style={{ borderTop: '1px solid #f1f5f9' }}>
						<Group justify="space-between" align="center">
							<Button
								component={Link}
								href={`/defis/${challenge.id}`}
								variant="subtle"
								size="xs"
								color="saclay-plum"
								rightSection={<iconify-icon icon="ri:arrow-right-line"></iconify-icon>}
								style={{
									paddingLeft: 0,
									fontWeight: 800,
									letterSpacing: '0.06em'
								}}
							>
								VOIR LES PROBLÉMATIQUES
							</Button>
						</Group>
					</Box>
				</Stack>
			</Card>
		</Box>
	);
}
