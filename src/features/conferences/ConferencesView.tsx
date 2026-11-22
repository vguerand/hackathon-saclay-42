'use client';

import type { Conference } from '$lib/types/conference';
import {
	Anchor,
	Badge,
	Box,
	Container,
	Group,
	Paper,
	rem,
	Stack,
	Text,
	Title
} from '@mantine/core';

type Props = {
	conferences: Conference[];
};

export function ConferencesView({ conferences }: Props) {
	return (
		<Container size="lg" py={{ base: 36, md: 64 }}>
			{/* Header Éditorial Style Design Spot */}
			<Box mb={{ base: 28, md: 48 }} pb="md" style={{ borderBottom: '1px solid #313E48' }}>
				<Text
					size="xs"
					fw={800}
					c="#63003C"
					style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'monospace' }}
				>
					03 / PROGRAMME & MASTERCLASSES
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
					Conférences & Interventions
				</Title>
				<Text size="md" c="#64748b" mt="xs" style={{ maxWidth: 720 }}>
					Ateliers, retours d'expérience et masterclasses d'experts de l'IA, de la recherche
					académique et de la transformation publique.
				</Text>
			</Box>

			{conferences.length === 0 && (
				<Text c="#64748b" size="md">
					Le programme des conférences sera publié prochainement.
				</Text>
			)}

			<Stack gap="lg">
				{conferences.map((conf, index) => (
					<Paper
						key={conf.id}
						p="xl"
						radius="0"
						withBorder
						style={{
							backgroundColor: '#ffffff',
							borderColor: '#e2e8f0',
							borderTop: '3px solid #63003C',
							borderRadius: 0,
							boxShadow: 'none'
						}}
					>
						<Group align="flex-start" gap="xl" wrap="nowrap">
							<Box style={{ minWidth: rem(40), textAlign: 'center' }} visibleFrom="sm">
								<Text size="lg" fw={900} c="#63003C" style={{ fontFamily: 'monospace' }}>
									{String(index + 1).padStart(2, '0')}
								</Text>
							</Box>

							{conf.speakerPhotoUrl && (
								<img
									src={conf.speakerPhotoUrl}
									alt={conf.speakerName}
									style={{
										height: rem(88),
										width: rem(88),
										borderRadius: 0,
										objectFit: 'cover',
										flexShrink: 0,
										border: '1px solid #313E48'
									}}
								/>
							)}
							<Stack gap="xs" style={{ flex: 1 }}>
								<Group justify="space-between" align="center">
									<Badge size="xs" color="saclay-plum" variant="light" radius="0">
										{conf.startsAt
											? new Date(conf.startsAt).toLocaleTimeString('fr-FR', {
													hour: '2-digit',
													minute: '2-digit'
												})
											: 'Horaire à venir'}
										{conf.location && ` · ${conf.location.toUpperCase()}`}
									</Badge>
								</Group>

								<Title
									order={2}
									size="h3"
									style={{ fontFamily: 'Lora, serif', color: '#313E48', fontWeight: 800 }}
								>
									{conf.title}
								</Title>
								<Text
									size="sm"
									fw={800}
									c="#63003C"
									style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}
								>
									{conf.speakerName}
								</Text>
								{conf.speakerBio && (
									<Text size="xs" c="dimmed">
										{conf.speakerBio}
									</Text>
								)}

								<Text size="sm" c="#475569" style={{ lineHeight: 1.6 }}>
									{conf.description}
								</Text>

								{conf.slidesUrl && (
									<Box mt="xs" pt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
										<Anchor
											href={conf.slidesUrl}
											target="_blank"
											rel="noreferrer"
											size="xs"
											fw={800}
											color="saclay-plum"
											style={{
												display: 'inline-flex',
												alignItems: 'center',
												gap: '6px',
												letterSpacing: '0.04em',
												textTransform: 'uppercase'
											}}
										>
											<iconify-icon
												icon="ri:file-pdf-line"
												style={{ color: '#CA007A', fontSize: rem(16) }}
											></iconify-icon>
											<span>Télécharger le support de présentation (PDF) →</span>
										</Anchor>
									</Box>
								)}
							</Stack>
						</Group>
					</Paper>
				))}
			</Stack>
		</Container>
	);
}
