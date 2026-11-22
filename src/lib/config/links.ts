/**
 * Liens externes du hackathon (formulaires Tally, dépôt git partagé).
 *
 * Un lien vide ('') masque automatiquement le bouton correspondant sur le site :
 * il suffit de renseigner l'URL ici quand 42 Paris fournit le formulaire.
 */
export const LINKS = {
	/** Formulaire d'inscription des participants (Saclay / 42 Paris). */
	registration: '',
	/** Formulaire pour porter un défi. */
	submitChallenge: '',
	/** Formulaire pour proposer une idée de projet. */
	submitIdea: 'https://tally.so/r/kbdkV6',
	/** Dépôt git partagé : une branche par équipe pour le rendu final. */
	sharedRepository: '',
	/** Code source de ce site. */
	sourceCode: 'https://github.com/vguerand/hackathon-saclay-42'
} as const;
