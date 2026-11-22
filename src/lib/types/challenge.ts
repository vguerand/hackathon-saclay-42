export type ThemeTag = {
	id: string;
	label: string;
};

export type Challenge = {
	/** Nom du fichier Markdown sans extension : sert d'URL (/defis/<id>). */
	id: string;
	/** Nom du porteur de défi. */
	title: string;
	shortDescription: string;
	/** Titres des problématiques : les titres `###` du fichier Markdown. */
	problems: string[];
	/** Corps du fichier Markdown. */
	description?: string;
	themes: ThemeTag[];
	image?: string;
	/** Dépôt git du projet (externe ou dépôt partagé). */
	repoUrl?: string;
	/** Branche de l'équipe dans le dépôt partagé. */
	branch?: string;
	demoUrl?: string;
	slidesUrl?: string;
	/** Motif de fond utilisé quand le défi n'a pas d'image (1 à 20). */
	gradientVariant: number;
};
