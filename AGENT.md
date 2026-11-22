# Instructions pour les agents

Site vitrine du Hackathon 2027 Saclay × 42 Paris. Lire `README.md` pour l'organisation du dépôt et
les commandes.

## Règles

- **Site statique uniquement** (`output: 'export'`). Pas de route API, de middleware, de cookie
  serveur, de base de données ni d'authentification. Les formulaires sont des liens Tally listés
  dans `src/lib/config/links.ts`.
- **Interface en Mantine** (`@mantine/core`). Pas de Tailwind, pas de `clsx`, pas de bibliothèque
  de primitives tierce. Le lint (`biome.jsonc`) fait respecter ces interdictions.
- **Contenu dans le dépôt** : chaque porteur de défi est un fichier Markdown de `content/defis/` (un titre `###` par problématique), lus au
  build par `src/lib/content/challenges.ts`.
- **Pages minces** : `src/app/` ne fait que charger le contenu et rendre une vue de
  `src/features/`.
- **Nom de l'école** : toujours « 42 Paris ». Le logo 42 n'existe qu'en noir ou en blanc.
- Le site est uniquement en français. Les textes d'interface vivent dans `src/lib/content/texts.ts`.

## Avant de terminer une tâche

```sh
pnpm check && pnpm test && pnpm build
```
