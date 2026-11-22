'use client';

import type { EventPhoto } from '$lib/content/event-photos';
import { SeparateurDrapeauFr } from '@/components/ui/separateur-drapeau-fr';
import { Box, Container, Paper, SimpleGrid, Text, Title } from '@mantine/core';

type Props = {
	photos: EventPhoto[];
};

export function GalleryView({ photos }: Props) {
	return (
		<Container size="xl" py="xl">
			<Box ta="center" mb="xl">
				<Title order={1} style={{ fontFamily: 'Lora, serif', color: '#233f6b' }}>
					Galerie Photos du Hackathon
				</Title>
				<Text size="md" c="dimmed" mt="xs">
					Retrouvez les moments forts de l'événement sur le campus 42 Paris.
				</Text>
				<SeparateurDrapeauFr />
			</Box>

			{photos.length === 0 && (
				<Text ta="center" c="dimmed" py="xl">
					Les photos seront publiées ici après l'événement.
				</Text>
			)}

			<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
				{photos.map((photo) => (
					<Paper
						key={photo.filename}
						radius="lg"
						withBorder
						style={{ overflow: 'hidden', backgroundColor: '#ffffff' }}
					>
						<img
							src={photo.href}
							alt={photo.alt ?? 'Photo du Hackathon Saclay x 42 Paris'}
							style={{
								height: 240,
								width: '100%',
								objectFit: 'cover',
								display: 'block',
								transition: 'transform 200ms ease'
							}}
							loading="lazy"
						/>
						{photo.alt && (
							<Text p="sm" size="xs" c="dimmed" bg="#f8fafc">
								{photo.alt}
							</Text>
						)}
					</Paper>
				))}
			</SimpleGrid>
		</Container>
	);
}
