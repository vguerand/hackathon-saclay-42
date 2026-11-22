'use client';

import { LINKS } from '$lib/config/links';
import { TEXTS as t } from '$lib/content/texts';
import {
	Anchor,
	Box,
	Burger,
	Button,
	Container,
	Drawer,
	Group,
	Stack,
	Text,
	rem
} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export function Header() {
	const pathname = usePathname() || '/';
	const [drawerOpened, setDrawerOpened] = React.useState(false);

	const navLinks = [
		{ href: '/', label: t.nav.home, active: pathname === '/' },
		{
			href: '/defis',
			label: t.nav.challenges,
			active: pathname.startsWith('/defis')
		},
		{
			href: '/conferences',
			label: t.nav.conferences,
			active: pathname.startsWith('/conferences')
		},
		{
			href: '/galerie-photos',
			label: t.nav.gallery,
			active: pathname.startsWith('/galerie-photos')
		},
		{
			href: '/infos-pratiques',
			label: t.nav.practicalInfo,
			active: pathname.startsWith('/infos-pratiques')
		}
	];

	return (
		<Box component="header" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
			{/* Bandeau d'alerte défilant accessible — Couleur Officielle Paris-Saclay */}
			{LINKS.registration && (
				<Box
					style={{
						backgroundColor: '#63003C',
						color: '#ffffff',
						overflow: 'hidden',
						borderBottom: '1px solid #520032'
					}}
					role="status"
				>
					<div
						className="registration-alert-track"
						style={{
							padding: '6px 0',
							fontWeight: 800,
							textTransform: 'uppercase',
							letterSpacing: '0.08em'
						}}
					>
						<p style={{ margin: 0, padding: '0 32px', fontSize: rem(13) }}>
							{t.nav.alertText}{' '}
							<a
								href={LINKS.registration}
								style={{ fontWeight: 600, textDecoration: 'underline', color: '#ffffff' }}
							>
								{t.nav.alertLink}
							</a>
						</p>
						<p style={{ margin: 0, padding: '0 32px', fontSize: rem(13) }} aria-hidden="true">
							{t.nav.alertText}{' '}
							<a
								href={LINKS.registration}
								tabIndex={-1}
								style={{ fontWeight: 600, textDecoration: 'underline', color: '#ffffff' }}
							>
								{t.nav.alertLink}
							</a>
						</p>
					</div>
				</Box>
			)}

			{/* En-tête Éditorial & Navigation Structurée */}
			<Box
				style={{
					backgroundColor: '#ffffff',
					borderBottom: '1px solid #e2e8f0'
				}}
			>
				<Container size="xl" py="sm">
					<Group justify="space-between" align="center" wrap="nowrap">
						{/* Logo Partenaires Paris-Saclay x 42 Paris */}
						<Link
							href="/"
							style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
						>
							<Group gap="md" align="center" wrap="nowrap">
								<img
									src="/brand/paris-saclay/logo-universite-paris-saclay.svg"
									alt="Université Paris-Saclay"
									style={{ height: '30px', width: 'auto', display: 'block' }}
								/>
								<Text size="md" fw={800} c="#313E48" style={{ fontFamily: 'monospace' }}>
									×
								</Text>
								<img
									src="/brand/42/logo-42-paris.png"
									alt="42 Paris"
									style={{ height: '26px', width: 'auto', display: 'block' }}
								/>
								<Box
									style={{
										padding: '3px 6px',
										border: '1px solid #313E48',
										borderRadius: 0,
										fontSize: '10px',
										fontWeight: 800,
										letterSpacing: '0.1em',
										color: '#313E48',
										textTransform: 'uppercase'
									}}
									visibleFrom="sm"
								>
									{t.common.edition}
								</Box>
							</Group>
						</Link>

						{/* Navigation Desktop intégrée */}
						<Group gap="lg" visibleFrom="lg">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									style={{
										fontSize: rem(14),
										fontWeight: link.active ? 800 : 600,
										letterSpacing: '0.02em',
										color: link.active ? '#63003C' : '#475569',
										borderBottom: link.active ? '2px solid #63003C' : '2px solid transparent',
										paddingBottom: '4px',
										transition: 'all 120ms ease'
									}}
								>
									{link.label}
								</Link>
							))}
						</Group>

						{/* Actions Utilisateur & CTA */}
						<Group gap="sm" align="center">
							{LINKS.registration && (
								<Button
									component="a"
									href={LINKS.registration}
									size="xs"
									variant="outline"
									color="saclay-plum"
									style={{
										borderWidth: '1px',
										borderRadius: 0,
										fontWeight: 800,
										letterSpacing: '0.05em'
									}}
									visibleFrom="sm"
								>
									{t.nav.participateCta}
								</Button>
							)}

							{/* Burger Mobile */}
							<Burger
								opened={drawerOpened}
								onClick={() => setDrawerOpened((o) => !o)}
								hiddenFrom="lg"
								size="sm"
								aria-label="Menu"
							/>
						</Group>
					</Group>
				</Container>
			</Box>

			{/* Drawer Mobile */}
			<Drawer
				opened={drawerOpened}
				onClose={() => setDrawerOpened(false)}
				title={t.nav.menuTitle}
				padding="lg"
				hiddenFrom="lg"
				zIndex={200}
				styles={{
					header: {
						borderBottom: '1px solid #e2e8f0',
						fontFamily: 'monospace',
						fontWeight: 800,
						letterSpacing: '0.08em'
					},
					content: {
						borderRadius: 0
					}
				}}
			>
				<Stack gap="xs" mt="md">
					{navLinks.map((link) => (
						<Anchor
							key={link.href}
							component={Link}
							href={link.href}
							onClick={() => setDrawerOpened(false)}
							style={{
								padding: '12px 0',
								fontSize: rem(16),
								fontWeight: link.active ? 800 : 600,
								color: link.active ? '#63003C' : '#313E48',
								borderBottom: '1px solid #f1f5f9',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
						>
							<span>{link.label}</span>
							<span style={{ color: '#cbd5e1' }}>→</span>
						</Anchor>
					))}

					{LINKS.registration && (
						<Box mt="lg">
							<Button
								component="a"
								href={LINKS.registration}
								fullWidth
								size="md"
								color="saclay-plum"
								style={{ borderRadius: 0, fontWeight: 800 }}
							>
								{t.nav.participateCta}
							</Button>
						</Box>
					)}
				</Stack>
			</Drawer>
		</Box>
	);
}
