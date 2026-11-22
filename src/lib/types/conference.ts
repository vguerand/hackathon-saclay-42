export type Conference = {
	id: string;
	title: string;
	/** Date et heure ISO, ex. '2027-03-18T14:00:00'. Vide : « Horaire à venir ». */
	startsAt?: string;
	description?: string;
	location?: string;
	speakerName?: string;
	speakerBio?: string;
	/** Chemin d'une image déposée dans public/, ex. '/conferences/ada.jpg'. */
	speakerPhotoUrl?: string;
	/** Lien vers le support (fichier de public/ ou URL externe). */
	slidesUrl?: string;
};
