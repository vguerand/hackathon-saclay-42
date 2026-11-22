import { HACKATHON } from '$lib/config/hackathon';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { theme } from '@/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
	title: HACKATHON.title,
	description: HACKATHON.description,
	icons: {
		icon: '/favicon.svg'
	},
	openGraph: {
		siteName: HACKATHON.title,
		title: HACKATHON.title,
		description: HACKATHON.description,
		type: 'website',
		locale: 'fr_FR'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
				{/* Iconify Script pour le support universel des icônes Remix */}
				<Script
					src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
					strategy="beforeInteractive"
				/>
			</head>
			<body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
				<MantineProvider theme={theme} defaultColorScheme="light">
					<Header />
					<main style={{ flex: 1 }}>{children}</main>
					<Footer />
				</MantineProvider>
			</body>
		</html>
	);
}
