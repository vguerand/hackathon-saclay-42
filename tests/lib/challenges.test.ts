import { describe, expect, it } from 'vitest';
import { parseChallengeFile, toChallenge } from '../../src/lib/content/challenges';

const source = `---
titre: "Cartographier les données : essai"
resume: Un résumé court.
themes: [IA, Données ouvertes]
depot: https://github.com/exemple/projet
branche: equipe-alpha
---

### Première question

Du texte.

### Seconde question

Encore du texte.
`;

describe('challenge files', () => {
	it('reads the frontmatter and the Markdown body', () => {
		const { data, body } = parseChallengeFile(source);

		expect(data.titre).toBe('Cartographier les données : essai');
		expect(data.themes).toEqual(['IA', 'Données ouvertes']);
		expect(data.depot).toBe('https://github.com/exemple/projet');
		expect(body.startsWith('### Première question')).toBe(true);
	});

	it('builds a challenge whose id is the file name', () => {
		const challenge = toChallenge('cartographie', source);

		expect(challenge).toMatchObject({
			id: 'cartographie',
			title: 'Cartographier les données : essai',
			shortDescription: 'Un résumé court.',
			problems: ['Première question', 'Seconde question'],
			repoUrl: 'https://github.com/exemple/projet',
			branch: 'equipe-alpha',
			demoUrl: undefined
		});
		expect(challenge.themes).toEqual([
			{ id: 'ia', label: 'IA' },
			{ id: 'donnees-ouvertes', label: 'Données ouvertes' }
		]);
		expect(challenge.gradientVariant).toBeGreaterThanOrEqual(1);
		expect(challenge.gradientVariant).toBeLessThanOrEqual(20);
	});

	it('falls back to the file name when there is no frontmatter', () => {
		const challenge = toChallenge('sans-entete', 'Juste du texte.');

		expect(challenge.title).toBe('sans-entete');
		expect(challenge.description).toBe('Juste du texte.');
		expect(challenge.themes).toEqual([]);
	});
});
