type HackathonDay = {
	weekday: string;
	day: number;
	month: string;
	year: number;
};

function formatDay(day: HackathonDay, withYear = false) {
	return `${day.weekday} ${day.day} ${day.month}${withYear ? ` ${day.year}` : ''}`;
}

const day1: HackathonDay = { weekday: 'jeudi', day: 18, month: 'mars', year: 2027 };
const day2: HackathonDay = { weekday: 'vendredi', day: 19, month: 'mars', year: 2027 };

export const HACKATHON = {
	year: 2027,
	title: 'Hackathon 2027 ✺ Saclay x 42 Paris',
	description:
		'Hackathon Saclay x 42 Paris sur la donnée territoriale : des porteurs de défis publics partagent leurs données, les participants en font émerger des solutions, les 18 et 19 mars 2027.',
	location: 'Campus 42 Paris, 96 boulevard Bessières, 75017 Paris',
	days: { day1, day2 },
	labels: {
		shortDates: `${day1.day} & ${day2.day} ${day1.month}`,
		shortDatesWithYear: `${day1.day} & ${day2.day} ${day1.month} ${day1.year}`,
		fullDates: `${day1.weekday} ${day1.day} et ${day2.weekday} ${day2.day} ${day1.month}`,
		fullDatesWithYear: `${day1.weekday} ${day1.day} et ${day2.weekday} ${day2.day} ${day1.month} ${day1.year}`,
		day1: formatDay(day1),
		day1WithYear: formatDay(day1, true),
		day2: formatDay(day2),
		day2WithYear: formatDay(day2, true)
	}
} as const;
