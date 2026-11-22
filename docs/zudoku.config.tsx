import { defaultLanguages, type ZudokuConfig } from 'zudoku';
import { docsNavigation, docsRedirects } from './zudoku.navigation';
import { Mermaid } from './src/components/Mermaid';
import './zudoku.theme.css';

const config: ZudokuConfig = {
	metadata: {
		title: '%s | Hackathon Saclay × 42',
		description:
			'Documentation de la plateforme du hackathon Saclay × 42 : prise en main, architecture, fonctionnalités et processus de collecte des défis.',
		favicon: '/favicon.svg'
	},
	site: {
		title: 'Hackathon Saclay × 42',
		showPoweredBy: false
	},
	theme: {
		// Prune institutionnel Paris-Saclay (saclay-plum dans packages/ui/src/theme.ts)
		light: {
			primary: '#63003C',
			primaryForeground: '#ffffff',
			ring: '#63003C'
		},
		dark: {
			primary: '#f3a2cb',
			primaryForeground: '#280018',
			ring: '#f3a2cb'
		}
	},
	syntaxHighlighting: {
		languages: [...defaultLanguages, 'bash', 'typescript', 'tsx', 'json', 'yaml', 'diff']
	},
	mdx: {
		components: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			Mermaid: Mermaid as any
		}
	},
	docs: {
		files: './**/*.mdx',
		publishMarkdown: true,
		defaultOptions: {
			showLastModified: true
		}
	},
	navigation: docsNavigation,
	redirects: docsRedirects
};

export default config;
