'use client';

import { LINKS } from '$lib/config/links';
import { TEXTS as t } from '$lib/content/texts';
import { Box, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import Link from 'next/link';

export function Footer() {
	return (
		<Box
			component="footer"
			style={{
				backgroundColor: '#ffffff',
				borderTop: '2px solid #63003C',
				color: '#1e293b'
			}}
		>
			<Container size="xl" py={{ base: 40, md: 56 }}>
				<SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
					{/* Colonne 1 : Identité & Partenaires */}
					<Stack gap="md">
						<Group gap="md" align="center">
							<img
								src="/brand/paris-saclay/logo-universite-paris-saclay.svg"
								alt="Université Paris-Saclay"
								style={{ height: '32px', width: 'auto' }}
							/>
							<Text size="lg" fw={800} c="#313E48" style={{ fontFamily: 'monospace' }}>
								×
							</Text>
							<img
								src="/brand/42/logo-42-paris.png"
								alt="42 Paris"
								style={{ height: '28px', width: 'auto' }}
							/>
						</Group>

						<Text
							size="11px"
							fw={700}
							c="#63003C"
							style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
						>
							{t.common.organizers}
						</Text>
					</Stack>

					{/* Colonne 2 : Navigation */}
					<Stack gap="xs">
						<Text
							size="xs"
							fw={800}
							c="#313E48"
							style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
						>
							{t.footer.col1Title}
						</Text>
						<Box style={{ height: '1px', backgroundColor: '#e2e8f0', width: '100%' }} />
						<Link href="/defis" style={{ fontSize: '14px', color: '#475569' }}>
							{t.footer.challenges}
						</Link>
						<a
							href={LINKS.submitIdea}
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: '14px', color: '#475569' }}
						>
							{t.footer.submitIdea} ↗
						</a>
						<Link href="/conferences" style={{ fontSize: '14px', color: '#475569' }}>
							{t.footer.conferences}
						</Link>
					</Stack>

					{/* Colonne 3 : Événement */}
					<Stack gap="xs">
						<Text
							size="xs"
							fw={800}
							c="#313E48"
							style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
						>
							{t.footer.col2Title}
						</Text>
						<Box style={{ height: '1px', backgroundColor: '#e2e8f0', width: '100%' }} />
						<Link href="/infos-pratiques" style={{ fontSize: '14px', color: '#475569' }}>
							{t.footer.practicalInfo}
						</Link>
						{LINKS.registration && (
							<a
								href={LINKS.registration}
								style={{ fontSize: '14px', color: '#63003C', fontWeight: 700 }}
							>
								{t.footer.participate}
							</a>
						)}
						<Link href="/galerie-photos" style={{ fontSize: '14px', color: '#475569' }}>
							{t.footer.gallery}
						</Link>
					</Stack>

					{/* Colonne 4 : Code & Transparence */}
					<Stack gap="xs">
						<Text
							size="xs"
							fw={800}
							c="#313E48"
							style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}
						>
							{t.footer.col3Title}
						</Text>
						<Box style={{ height: '1px', backgroundColor: '#e2e8f0', width: '100%' }} />
						<Link href="/mentions-legales" style={{ fontSize: '14px', color: '#475569' }}>
							{t.footer.legal}
						</Link>
						<a
							href={LINKS.sourceCode}
							target="_blank"
							rel="noreferrer"
							style={{ fontSize: '14px', color: '#475569' }}
						>
							{t.footer.sourceCode}
						</a>
						<a
							href="https://www.universite-paris-saclay.fr/"
							target="_blank"
							rel="noreferrer"
							style={{ fontSize: '14px', color: '#475569' }}
						>
							Université Paris-Saclay ↗
						</a>
						<a
							href="https://42.fr/"
							target="_blank"
							rel="noreferrer"
							style={{ fontSize: '14px', color: '#475569' }}
						>
							42 Paris ↗
						</a>
					</Stack>
				</SimpleGrid>

				<Box
					mt={{ base: 32, md: 48 }}
					pt="md"
					style={{
						borderTop: '1px solid #e2e8f0',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: '12px',
						fontSize: '12px',
						color: '#64748b'
					}}
				>
					<Text size="xs" c="#64748b">
						{t.footer.copyright}
					</Text>
					<Text size="xs" c="#64748b" style={{ fontFamily: 'monospace' }}>
						{t.footer.tagline}
					</Text>
				</Box>
			</Container>
		</Box>
	);
}
