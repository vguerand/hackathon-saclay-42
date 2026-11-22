import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const CONFIGS = {
	docs: {
		docsDir: path.join(ROOT_DIR, 'docs'),
		outputFile: path.join(ROOT_DIR, 'docs', 'zudoku.navigation.tsx')
	}
};

function formatLabel(name) {
	const clean = name.replace(/^(\d+-)+/, '');
	const customLabels = {
		organisation: '1. Organisation du hackathon',
		donnees: '2. Données et open data',
		technique: '3. Documentation technique',
		defis: 'Collecte et sélection des défis',
		'open-data': 'Données et open data',
		evenement: 'Événement',
		'donnees-par-defi': 'Open data par porteur',
		'donnees-a-aller-chercher': 'Données à aller chercher',
		'prise-en-main': 'Prise en main',
		'design-system': 'Design system et style',
		architecture: 'Architecture',
		fonctionnalites: 'Fonctionnalités',
		skills: 'Skills agents',
		'rgaa-review': 'Revue RGAA',
		'code-review': 'Revue de code',
		'architecture-review': "Revue d'architecture",
		'docs-mdx': 'Rédaction MDX',
		'design-change': "Conception d'évolution"
	};

	if (customLabels[clean]) {
		return customLabels[clean];
	}

	const acronyms = {
		api: 'API',
		ui: 'UI',
		git: 'Git',
		ia: 'IA',
		rgaa: 'RGAA',
		e2e: 'E2E',
		mdx: 'MDX',
		pdf: 'PDF',
		html: 'HTML',
		css: 'CSS',
		ts: 'TypeScript'
	};

	return clean
		.split(/[-_]+/)
		.map((word) => {
			const lower = word.toLowerCase();
			if (acronyms[lower]) return acronyms[lower];
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}

function getDefaultIcon(name, depth) {
	const lower = name.toLowerCase();
	if (depth === 0) {
		if (lower.includes('organisation')) return 'calendar-range';
		if (lower.includes('donnees')) return 'database';
		if (lower.includes('technique')) return 'code';
	}
	if (depth === 1) {
		if (lower.includes('defis')) return 'clipboard-list';
		if (lower.includes('donnees-par-defi')) return 'table';
		if (lower.includes('aller-chercher')) return 'search';
		if (lower.includes('evenement')) return 'calendar-days';
		if (lower.includes('prise-en-main')) return 'rocket';
		if (lower.includes('design-system')) return 'palette';
		if (lower.includes('archi')) return 'layers';
		if (lower.includes('fonctionnalite')) return 'layout-grid';
		if (lower.includes('skill')) return 'sparkles';
	}
	return 'file-text';
}

function scanDir(dir, baseDir, depth = 0) {
	if (!fs.existsSync(dir)) return [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	const validEntries = entries.filter((e) => {
		if (e.name.startsWith('_') || e.name.startsWith('.')) return false;
		if (e.name === 'README.md' || e.name === 'dist' || e.name === 'node_modules') return false;
		if (e.isFile() && !e.name.endsWith('.md') && !e.name.endsWith('.mdx')) return false;
		return true;
	});

	validEntries.sort((a, b) => {
		const aIsIndex = a.name.startsWith('index.');
		const bIsIndex = b.name.startsWith('index.');
		if (aIsIndex && !bIsIndex) return -1;
		if (!aIsIndex && bIsIndex) return 1;
		return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
	});

	const items = [];
	for (const entry of validEntries) {
		const fullPath = path.join(dir, entry.name);
		const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');

		if (entry.isDirectory()) {
			const subItems = scanDir(fullPath, baseDir, depth + 1);
			if (subItems.length > 0) {
				items.push({
					type: 'category',
					label: formatLabel(entry.name),
					icon: getDefaultIcon(entry.name, depth),
					collapsed: depth > 0,
					items: subItems
				});
			}
		} else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
			if (depth === 0 && entry.name.startsWith('index.')) {
				items.push({
					type: 'doc',
					file: relPath,
					path: '/',
					label: 'Accueil',
					icon: 'home'
				});
			} else {
				const route = relPath.replace(/\.mdx?$/, '');
				items.push(route);
			}
		}
	}
	return items;
}

function generateNav() {
	const config = CONFIGS.docs;
	const navItems = scanDir(config.docsDir, config.docsDir);
	const redirects = [{ from: '/index', to: '/' }];

	const content = `import type { ZudokuConfig } from "zudoku";

export const docsNavigation: ZudokuConfig["navigation"] = ${JSON.stringify(navItems, null, 2)};

export const docsRedirects: ZudokuConfig["redirects"] = ${JSON.stringify(redirects, null, 2)};
`;

	fs.mkdirSync(path.dirname(config.outputFile), { recursive: true });
	fs.writeFileSync(config.outputFile, content, 'utf-8');
	// biome-ignore lint/suspicious/noConsole: script en ligne de commande, la sortie est voulue
	console.log(`✓ Zudoku navigation generated: ${path.relative(ROOT_DIR, config.outputFile)}`);
}

generateNav();
