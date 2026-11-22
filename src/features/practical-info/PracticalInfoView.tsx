'use client';

import { SeparateurDrapeauFr } from '@/components/ui/separateur-drapeau-fr';
import { Box, Container, Paper, rem, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export function PracticalInfoView() {
	return (
		<Container size="md" py="xl">
			<Box ta="center" mb="xl">
				<Title order={1} style={{ fontFamily: 'Lora, serif', color: '#233f6b' }}>
					Infos Pratiques & Accès aux Campus
				</Title>
				<Text size="md" c="dimmed" mt="xs">
					Toutes les informations nécessaires pour préparer votre venue au Hackathon Saclay × 42
					Paris.
				</Text>
				<SeparateurDrapeauFr />
			</Box>

			<Stack gap="lg">
				{/* Lieux des campus */}
				<Paper
					p="xl"
					radius="lg"
					withBorder
					style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
				>
					<Title
						order={2}
						size="h3"
						c="#233f6b"
						mb="md"
						style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
					>
						<iconify-icon
							icon="ri:map-pin-line"
							style={{ color: '#e1000f', fontSize: rem(24) }}
						></iconify-icon>
						<span>Lieu de l'événement</span>
					</Title>

					<SimpleGrid cols={{ base: 1 }} spacing="md">
						<Box
							p="md"
							style={{
								backgroundColor: '#f8fafc',
								borderRadius: '12px',
								border: '1px solid #e2e8f0'
							}}
						>
							<Text fw={700} size="md" c="#233f6b" mb={4}>
								Campus 42 Paris
							</Text>
							<Text size="sm" c="#334155" mb="xs">
								96 Boulevard Bessières, 75017 Paris
							</Text>
							<Text size="xs" c="dimmed">
								<strong>Transports :</strong> Métro Ligne 14 ou Ligne 13 (Porte de Clichy), RER C,
								Tramway T3b (Honoré de Balzac).
							</Text>
						</Box>
					</SimpleGrid>
				</Paper>

				{/* Accueil et équipement */}
				<Paper
					p="xl"
					radius="lg"
					withBorder
					style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
				>
					<Title
						order={2}
						size="h3"
						c="#233f6b"
						mb="md"
						style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
					>
						<iconify-icon
							icon="ri:shield-keyhole-line"
							style={{ color: '#e1000f', fontSize: rem(24) }}
						></iconify-icon>
						<span>Modalités d'Accès & Logistique</span>
					</Title>
					<ul
						style={{
							margin: 0,
							paddingLeft: '20px',
							fontSize: rem(14),
							lineHeight: 1.7,
							color: '#334155'
						}}
					>
						<li>
							<strong>Pièce d'identité ou carte étudiant / personnel</strong> obligatoire à
							l'accueil pour le retrait de votre badge événementiel.
						</li>
						<li>
							<strong>Équipement personnel :</strong> pensez à apporter votre ordinateur portable,
							vos chargeurs et accessoires.
						</li>
					</ul>
				</Paper>
			</Stack>
		</Container>
	);
}
