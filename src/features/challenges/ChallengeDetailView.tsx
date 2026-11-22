'use client';

import { LINKS } from '$lib/config/links';
import type { Challenge } from '$lib/types/challenge';
import { renderMarkdown } from '$lib/utils/markdown';
import { SeparateurDrapeauFr } from '@/components/ui/separateur-drapeau-fr';
import {
	Box,
	Button,
	Container,
	Group,
	Paper,
	SimpleGrid,
	Stack,
	Text,
	Title,
	rem
} from '@mantine/core';
import { ThemeTags } from './components/ThemeTags';

type Props = {
	challenge: Challenge;
};

export function ChallengeDetailView({ challenge }: Props) {
	const markdownHtml = challenge.description ? renderMarkdown(challenge.description) : '';

	return (
		<Container size="xl" py="xl">
			{/* En-tête du défi */}
			<Box mb="xl">
				<Title order={1} style={{ fontFamily: 'Lora, serif', color: '#233f6b' }}>
					{challenge.title}
				</Title>

				<Text size="lg" c="dimmed" mt="xs">
					Porteur de défi
				</Text>

				<Box mt="md">
					<ThemeTags themes={challenge.themes} size="sm" />
				</Box>
			</Box>

			<SeparateurDrapeauFr />

			{/* Description & Contenu */}
			<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
				{/* Colonne Principale */}
				<Box style={{ gridColumn: 'span 2' }}>
					<Paper p="xl" radius="lg" withBorder mb="xl" style={{ backgroundColor: '#ffffff' }}>
						<Title order={2} style={{ fontFamily: 'Lora, serif', color: '#233f6b' }} mb="md">
							{challenge.problems.length > 0 ? 'Problématiques proposées' : 'À propos du défi'}
						</Title>
						{challenge.shortDescription && (
							<Text size="lg" fw={500} c="#334155" mb="lg" style={{ lineHeight: 1.7 }}>
								{challenge.shortDescription}
							</Text>
						)}

						{markdownHtml ? (
							<div
								style={{ lineHeight: 1.8, color: '#334155', fontFamily: 'Lora, serif' }}
								// biome-ignore lint/security/noDangerouslySetInnerHtml: renderMarkdown échappe tout le HTML du fichier source
								dangerouslySetInnerHTML={{ __html: markdownHtml }}
							/>
						) : null}
					</Paper>
				</Box>

				{/* Colonne Latérale */}
				<Box>
					<Paper p="lg" radius="lg" withBorder style={{ backgroundColor: '#ffffff' }}>
						<Title order={3} size="h4" c="#233f6b" mb="md">
							Liens et ressources
						</Title>

						<Stack gap="sm">
							{challenge.repoUrl && (
								<Paper
									component="a"
									href={challenge.repoUrl}
									target="_blank"
									rel="noreferrer"
									p="sm"
									radius="md"
									withBorder
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										textDecoration: 'none',
										color: 'inherit'
									}}
								>
									<Group gap="xs">
										<iconify-icon
											icon="ri:github-fill"
											style={{ fontSize: rem(20) }}
										></iconify-icon>
										<Text size="sm" fw={600}>
											Code source{challenge.branch ? ` (branche ${challenge.branch})` : ''}
										</Text>
									</Group>
									<iconify-icon icon="ri:external-link-line"></iconify-icon>
								</Paper>
							)}

							{challenge.demoUrl && (
								<Paper
									component="a"
									href={challenge.demoUrl}
									target="_blank"
									rel="noreferrer"
									p="sm"
									radius="md"
									withBorder
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										backgroundColor: '#e8faf4',
										borderColor: '#63e0be',
										color: '#14715b',
										textDecoration: 'none'
									}}
								>
									<Group gap="xs">
										<iconify-icon
											icon="ri:play-circle-line"
											style={{ fontSize: rem(20) }}
										></iconify-icon>
										<Text size="sm" fw={700}>
											Accéder à la démo
										</Text>
									</Group>
									<iconify-icon icon="ri:external-link-line"></iconify-icon>
								</Paper>
							)}

							{challenge.slidesUrl && (
								<Paper
									component="a"
									href={challenge.slidesUrl}
									target="_blank"
									rel="noreferrer"
									p="sm"
									radius="md"
									withBorder
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										textDecoration: 'none',
										color: 'inherit'
									}}
								>
									<Group gap="xs">
										<iconify-icon
											icon="ri:file-pdf-line"
											style={{ fontSize: rem(20), color: '#e1000f' }}
										></iconify-icon>
										<Text size="sm" fw={600}>
											Support de présentation
										</Text>
									</Group>
									<iconify-icon icon="ri:download-line"></iconify-icon>
								</Paper>
							)}

							{LINKS.registration && (
								<Box pt="md" style={{ borderTop: '1px solid #f1f5f9' }}>
									<Button component="a" href={LINKS.registration} fullWidth color="saclay-plum">
										S'inscrire au hackathon
									</Button>
								</Box>
							)}
						</Stack>
					</Paper>
				</Box>
			</SimpleGrid>
		</Container>
	);
}
