# Hackathon 2027 · Saclay × 42 Paris

Site vitrine du hackathon organisé par l'Université Paris-Saclay et 42 Paris, les 18 et 19 mars
2027 sur le campus de 42 Paris.

Le site est **entièrement statique** : pas de serveur, pas de base de données, pas de compte. Le
contenu vit dans ce dépôt, et les formulaires (inscription, idées de projet) sont des Tally gérés
par 42 Paris.

## Démarrer

Prérequis : Node 22 ou plus récent, et pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:3000
```

## Mettre à jour le contenu

| Je veux…                                   | Fichier à modifier                                  |
| ------------------------------------------ | --------------------------------------------------- |
| Ajouter ou modifier un défi                | `content/defis/<nom-du-defi>.md`                    |
| Renseigner un lien Tally ou le git partagé | `src/lib/config/links.ts`                           |
| Changer les dates ou le lieu               | `src/lib/config/hackathon.ts`                       |
| Ajouter une conférence                     | `src/lib/content/conferences.ts`                    |
| Ajouter des photos à la galerie            | déposer les images dans `public/photos-evenement/`  |
| Ajouter le logo d'un porteur de défi       | déposer l'image dans `public/defis/`, puis `image:` |
| Modifier les textes du site                | `src/lib/content/texts.ts`                          |

### Ajouter un porteur de défi

Chaque fichier de `content/defis/` présente un porteur de défi et ses problématiques.

1. Copier `content/defis/_modele.md` vers `content/defis/nom-du-porteur.md`. Le nom du fichier
   devient l'adresse de la page : `/defis/nom-du-porteur`.
2. Dans l'en-tête, renseigner `titre` (le nom du porteur) et, si besoin, les liens utiles.
3. Sous l'en-tête, écrire une section par problématique : un titre `###` suivi de sa description.
   Les titres `###` sont repris sur la carte du porteur.
4. Ouvrir une pull request. La page apparaît sur le site au prochain déploiement.

Les fichiers dont le nom commence par `_` ne sont pas publiés.

### Liens Tally

`src/lib/config/links.ts` liste les liens externes. Un lien laissé vide masque le bouton
correspondant : le bouton « S'inscrire » et le bandeau d'inscription n'apparaissent que lorsque
`registration` est renseigné.

## Rendu des projets pendant le hackathon

Chaque équipe dépose son travail sur le dépôt git partagé, dans une branche à son nom, et peut
ajouter des liens vers des dépôts externes. La fiche du défi (`content/defis/…md`) pointe vers ce
travail avec les champs `depot`, `branche`, `demo` et `presentation`.

## Construire et héberger

```sh
pnpm build      # génère le dossier out/
pnpm preview    # sert out/ en local pour vérifier
```

Le dossier `out/` contient des fichiers HTML, CSS et JS : il se dépose tel quel sur n'importe quel
serveur web (nginx, Apache, GitHub Pages, GitLab Pages…).

## Portail de documentation

Le dossier `docs/` contient la documentation du projet (organisation, données, technique), publiée
avec [Zudoku](https://zudoku.dev).

```sh
pnpm docs:dev       # portail en local sur http://localhost:3001
pnpm docs:build     # génère docs/dist/
```

## Qualité du code

```sh
pnpm check      # lint (Biome) + formatage (oxfmt) + types
pnpm fix        # corrige ce qui peut l'être automatiquement
pnpm test       # tests unitaires (Vitest)
```

Des hooks git (lefthook) sont installés par `pnpm install` : lint et formatage des fichiers
modifiés à chaque commit, `pnpm check` avant chaque push.

L'interface est en [Mantine](https://mantine.dev) uniquement. Le lint refuse Tailwind, les
bibliothèques de primitives tierces et tout code serveur (`next/headers`, `next/server`).

## Organisation du code

```
content/defis/        un fichier Markdown par porteur de défi
public/               images, logos, photos de l'événement
src/app/              pages (routes Next.js)
src/features/         une vue par page
src/components/       en-tête, pied de page
src/lib/config/       dates, lieu, liens externes
src/lib/content/      lecture des défis, des conférences et des photos
tests/lib/            tests unitaires
```

## Licence

Le code est sous licence [MIT](LICENSE). Les logos et marques présents dans `public/` restent la
propriété de leurs détenteurs respectifs et ne sont pas couverts par cette licence.
