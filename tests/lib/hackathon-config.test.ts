import { describe, expect, it } from 'vitest';
import { HACKATHON } from '../../src/lib/config/hackathon';

describe('hackathon config', () => {
	it('exposes the 18 and 19 March 2027 labels', () => {
		expect(HACKATHON.labels.shortDates).toBe('18 & 19 mars');
		expect(HACKATHON.labels.shortDatesWithYear).toBe('18 & 19 mars 2027');
		expect(HACKATHON.labels.fullDates).toBe('jeudi 18 et vendredi 19 mars');
		expect(HACKATHON.labels.fullDatesWithYear).toBe('jeudi 18 et vendredi 19 mars 2027');
		expect(HACKATHON.labels.day1WithYear).toBe('jeudi 18 mars 2027');
		expect(HACKATHON.labels.day2).toBe('vendredi 19 mars');
	});
});
