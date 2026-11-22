'use client';

import { HACKATHON } from '$lib/config/hackathon';
import { LINKS } from '$lib/config/links';
import { TEXTS as t } from '$lib/content/texts';
import { Box, Button, Container, Grid, Group, rem, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

export function HomeHero() {
	return (
		<Box
			style={{
				backgroundColor: '#ffffff',
				borderBottom: '1px solid #313E48',
				position: 'relative'
			}}
		>
			<Container size="xl" py={{ base: 48, md: 80 }}>
				{/* Ligne de méta-données supérieure style Laboratoire / Recherche */}
				<Box
					mb={{ base: 24, md: 40 }}
					pb="sm"
					style={{
						borderBottom: '1px solid #e2e8f0',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '12px',
						fontSize: rem(12),
						fontWeight: 800,
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
						color: '#64748b'
					}}
				>
					<Group gap="xs">
						<Text component="span" c="#63003C" fw={900}>
							{t.hero.metaNumber}
						</Text>
						<Text component="span" c="#313E48">
							{t.hero.metaEdition}
						</Text>
					</Group>
					<Group gap="lg">
						<Text component="span">{t.hero.campus42}</Text>
						<Text component="span" c="#cbd5e1">
							•
						</Text>
						<Text component="span" c="#CA007A" fw={800}>
							{HACKATHON.labels.shortDatesWithYear}
						</Text>
					</Group>
				</Box>

				{/* Grille Asymétrique Éditoriale Design Spot */}
				<Grid gutter={{ base: 32, md: 48 }} align="flex-start">
					{/* Colonne Gauche : Titrage Monumental */}
					<Grid.Col span={{ base: 12, md: 7 }}>
						<Stack gap="xs">
							<Text
								size="sm"
								fw={800}
								c="#63003C"
								style={{ letterSpacing: '0.15em', textTransform: 'uppercase' }}
							>
								{t.hero.partners}
							</Text>

							<Title
								order={1}
								style={{
									fontFamily: 'Lora, serif',
									color: '#313E48',
									fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
									fontWeight: 800,
									lineHeight: 1.08,
									letterSpacing: '-0.02em',
									textTransform: 'uppercase'
								}}
							>
								{t.hero.titleLine1}
								<br />
								<span style={{ color: '#63003C' }}>{t.hero.titleLine2}</span>
							</Title>
						</Stack>
					</Grid.Col>

					{/* Colonne Droite : Exposé, Métadonnées et Actions */}
					<Grid.Col span={{ base: 12, md: 5 }}>
						<Box
							p={{ base: 'md', md: 'xl' }}
							style={{
								borderLeft: '2px solid #63003C',
								backgroundColor: '#fafbfc'
							}}
						>
							<Text
								size="xs"
								fw={800}
								c="#63003C"
								style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
								mb="xs"
							>
								{t.hero.tagline}
							</Text>

							<Text size="md" c="#334155" style={{ lineHeight: 1.6, fontSize: rem(16) }}>
								{t.hero.description}
							</Text>

							<Box mt="lg" pt="md" style={{ borderTop: '1px solid #e2e8f0' }}>
								<Stack gap="sm">
									<Button
										component={Link}
										href="/defis"
										size="lg"
										color="saclay-plum"
										fullWidth
										rightSection={<iconify-icon icon="ri:arrow-right-line"></iconify-icon>}
										style={{
											borderRadius: 0,
											fontWeight: 800,
											letterSpacing: '0.08em',
											height: '52px'
										}}
									>
										{t.hero.ctaChallenges}
									</Button>

									{LINKS.registration && (
										<Button
											component="a"
											href={LINKS.registration}
											size="md"
											variant="outline"
											color="saclay-slate"
											fullWidth
											rightSection={<iconify-icon icon="ri:user-add-line"></iconify-icon>}
											style={{
												borderRadius: 0,
												borderWidth: '1px',
												borderColor: '#313E48',
												color: '#313E48',
												fontWeight: 800,
												letterSpacing: '0.06em'
											}}
										>
											{t.hero.ctaRegister}
										</Button>
									)}
								</Stack>
							</Box>
						</Box>
					</Grid.Col>
				</Grid>

				{/* Bandeau de statistiques techniques style laboratoire */}
				<Box
					mt={{ base: 36, md: 56 }}
					pt={{ base: 'md', md: 'xl' }}
					style={{ borderTop: '1px solid #e2e8f0' }}
				>
					<Grid gutter="md">
						<Grid.Col span={{ base: 6, sm: 3 }}>
							<Box p="md" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
								<Text size="xs" fw={800} c="#64748b" style={{ letterSpacing: '0.1em' }}>
									{t.hero.statStatusLabel}
								</Text>
								<Text size="xl" fw={900} c="#63003C" mt="4px">
									{LINKS.registration ? t.hero.statStatusValue : t.hero.statStatusSoon}
								</Text>
							</Box>
						</Grid.Col>

						<Grid.Col span={{ base: 6, sm: 3 }}>
							<Box p="md" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
								<Text size="xs" fw={800} c="#64748b" style={{ letterSpacing: '0.1em' }}>
									{t.hero.statChallengesLabel}
								</Text>
								<Text size="xl" fw={900} c="#313E48" mt="4px">
									{t.hero.statChallengesValue}
								</Text>
							</Box>
						</Grid.Col>

						<Grid.Col span={{ base: 6, sm: 3 }}>
							<Box p="md" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
								<Text size="xs" fw={800} c="#64748b" style={{ letterSpacing: '0.1em' }}>
									{t.hero.statResearchLabel}
								</Text>
								<Text size="xl" fw={900} c="#313E48" mt="4px">
									{t.hero.statResearchValue}
								</Text>
							</Box>
						</Grid.Col>

						<Grid.Col span={{ base: 6, sm: 3 }}>
							<Box p="md" style={{ border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
								<Text size="xs" fw={800} c="#64748b" style={{ letterSpacing: '0.1em' }}>
									{t.hero.statFormatLabel}
								</Text>
								<Text size="xl" fw={900} c="#CA007A" mt="4px">
									{t.hero.statFormatValue}
								</Text>
							</Box>
						</Grid.Col>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
