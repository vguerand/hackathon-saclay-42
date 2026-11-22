import type { ZudokuConfig } from "zudoku";

export const docsNavigation: ZudokuConfig["navigation"] = [
  {
    "type": "doc",
    "file": "index.mdx",
    "path": "/",
    "label": "Accueil",
    "icon": "home"
  },
  {
    "type": "category",
    "label": "1. Organisation du hackathon",
    "icon": "calendar-range",
    "collapsed": false,
    "items": [
      "01-organisation/00-vue-ensemble",
      "01-organisation/01-feuille-de-route",
      {
        "type": "category",
        "label": "Collecte et sélection des défis",
        "icon": "clipboard-list",
        "collapsed": true,
        "items": [
          "01-organisation/04-defis/00-deck-et-defis",
          "01-organisation/04-defis/01-formulaire-de-demande",
          "01-organisation/04-defis/02-processus-de-selection"
        ]
      },
      {
        "type": "category",
        "label": "Événement",
        "icon": "calendar-days",
        "collapsed": true,
        "items": [
          "01-organisation/05-evenement/00-programme-et-format"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "2. Données et open data",
    "icon": "database",
    "collapsed": false,
    "items": [
      "02-donnees/00-vue-ensemble",
      "02-donnees/01-cadre-et-sources",
      "02-donnees/02-tutoriel-publication",
      "02-donnees/03-accompagner-les-porteurs",
      "02-donnees/04-donnees-territoriales",
      {
        "type": "category",
        "label": "Open data par porteur",
        "icon": "table",
        "collapsed": true,
        "items": [
          "02-donnees/05-donnees-par-defi/00-synthese",
          "02-donnees/05-donnees-par-defi/01-cybermalveillance",
          "02-donnees/05-donnees-par-defi/02-assemblee-nationale",
          "02-donnees/05-donnees-par-defi/03-dgaln-dhup",
          "02-donnees/05-donnees-par-defi/04-patrinat-programme-r",
          "02-donnees/05-donnees-par-defi/05-station-f-ville-de-demain",
          "02-donnees/05-donnees-par-defi/06-communaute-paris-saclay",
          "02-donnees/05-donnees-par-defi/07-cnrs-campus-cyber"
        ]
      },
      {
        "type": "category",
        "label": "Données à aller chercher",
        "icon": "search",
        "collapsed": true,
        "items": [
          "02-donnees/06-donnees-a-aller-chercher/00-priorites",
          "02-donnees/06-donnees-a-aller-chercher/01-climat-et-risques",
          "02-donnees/06-donnees-a-aller-chercher/02-eau",
          "02-donnees/06-donnees-a-aller-chercher/03-energie",
          "02-donnees/06-donnees-a-aller-chercher/04-mobilites",
          "02-donnees/06-donnees-a-aller-chercher/05-logement-et-foncier",
          "02-donnees/06-donnees-a-aller-chercher/06-economie-et-recherche",
          "02-donnees/06-donnees-a-aller-chercher/07-services-publics-et-social",
          "02-donnees/06-donnees-a-aller-chercher/08-agriculture-nature-air"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "3. Documentation technique",
    "icon": "code",
    "collapsed": false,
    "items": [
      "03-technique/index",
      {
        "type": "category",
        "label": "Prise en main",
        "icon": "rocket",
        "collapsed": true,
        "items": [
          "03-technique/00-prise-en-main/00-installation",
          "03-technique/00-prise-en-main/01-deploiement",
          "03-technique/00-prise-en-main/02-conventions"
        ]
      },
      {
        "type": "category",
        "label": "Design system et style",
        "icon": "palette",
        "collapsed": true,
        "items": [
          "03-technique/01-design-system/00-theme-et-jetons"
        ]
      },
      {
        "type": "category",
        "label": "Architecture",
        "icon": "layers",
        "collapsed": true,
        "items": [
          "03-technique/02-architecture/00-vue-ensemble",
          "03-technique/02-architecture/01-contenu-du-site"
        ]
      },
      {
        "type": "category",
        "label": "Fonctionnalités",
        "icon": "layout-grid",
        "collapsed": true,
        "items": [
          "03-technique/03-fonctionnalites/00-routes",
          "03-technique/03-fonctionnalites/01-formulaires-et-rendus"
        ]
      },
      {
        "type": "category",
        "label": "Skills agents",
        "icon": "sparkles",
        "collapsed": true,
        "items": [
          "03-technique/04-skills/index",
          "03-technique/04-skills/architecture-review",
          "03-technique/04-skills/code-review",
          "03-technique/04-skills/design-change",
          "03-technique/04-skills/docs-mdx",
          "03-technique/04-skills/rgaa-review"
        ]
      }
    ]
  }
];

export const docsRedirects: ZudokuConfig["redirects"] = [
  {
    "from": "/index",
    "to": "/"
  }
];
