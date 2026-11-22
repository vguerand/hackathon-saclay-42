'use client';

import { SeparateurDrapeauFr } from '@/components/ui/separateur-drapeau-fr';
import { Box, Container, Paper, Stack, Text, Title } from '@mantine/core';

export function LegalNoticeView() {
	return (
		<Container size="md" py="xl">
			<Box ta="center" mb="xl">
				<Title order={1} style={{ fontFamily: 'Lora, serif', color: '#233f6b' }}>
					Mentions Légales
				</Title>
				<SeparateurDrapeauFr />
			</Box>

			<Paper
				p="xl"
				radius="lg"
				withBorder
				style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
			>
				<Stack gap="xl">
					<Box>
						<Title order={2} size="h3" c="#233f6b" mb="xs">
							Co-Organisateurs & Éditeurs
						</Title>
						<Text size="sm" c="#334155" style={{ lineHeight: 1.6 }}>
							<strong>Université Paris-Saclay</strong>
							<br />3 rue Joliot Curie, 91190 Gif-sur-Yvette
							<br />
							<br />
							<strong>Association 42 (42 Paris)</strong>
							<br />
							96 boulevard Bessières, 75017 Paris
						</Text>
					</Box>

					<Box>
						<Title order={2} size="h3" c="#233f6b" mb="xs">
							Hébergement
						</Title>
						<Text size="sm" c="#334155" style={{ lineHeight: 1.6 }}>
							Ce site est hébergé et administré par <strong>Association 42 (42 Paris)</strong>
							<br />
							96 boulevard Bessières, 75017 Paris
						</Text>
					</Box>

					<Box>
						<Title order={2} size="h3" c="#233f6b" mb="xs">
							Données Personnelles (RGPD)
						</Title>
						<Text size="sm" c="#334155" style={{ lineHeight: 1.6 }}>
							Ce site est un site vitrine : il ne propose ni compte ni formulaire et ne dépose aucun
							cookie.
						</Text>
						<Text size="sm" c="#334155" mt="xs" style={{ lineHeight: 1.6 }}>
							Les inscriptions et les propositions de projet passent par des formulaires externes
							(Tally) gérés par 42 Paris, qui est responsable du traitement des données qui y sont
							saisies. Pour exercer vos droits d'accès, de rectification et d'effacement (RGPD),
							écrivez à : <code>hackathon@42paris.fr</code>.
						</Text>
					</Box>

					<Box>
						<Title order={2} size="h3" c="#233f6b" mb="xs">
							Licence & Code Source
						</Title>
						<Text size="sm" c="#334155" style={{ lineHeight: 1.6 }}>
							Le code source de ce site est publié sous licence libre <strong>AGPL-3.0</strong> et
							accessible sur le dépôt public du projet.
						</Text>
					</Box>
				</Stack>
			</Paper>
		</Container>
	);
}
