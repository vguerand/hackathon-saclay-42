import { describe, expect, it } from 'vitest';
import { renderMarkdown } from '../../src/lib/utils/markdown';

describe('renderMarkdown security', () => {
	it('escapes raw HTML instead of preserving active tags', () => {
		const html = renderMarkdown('<img src=x onerror="alert(1)"><script>alert(2)</script>');

		expect(html).toContain('&lt;img');
		expect(html).toContain('&lt;script&gt;');
		expect(html).not.toContain('<img');
		expect(html).not.toContain('<script>');
		expect(html).not.toContain('onerror="');
	});

	it('drops markdown links with dangerous protocols', () => {
		const html = renderMarkdown('[click](javascript:alert(1)) [data](data:text/html,alert(1))');

		expect(html).toContain('click');
		expect(html).toContain('data');
		expect(html).not.toContain('<a');
		expect(html).not.toContain('javascript:');
		expect(html).not.toContain('data:text/html');
	});

	it('keeps safe markdown links with noopener noreferrer', () => {
		const html = renderMarkdown('[site](https://example.com/path?a=1&b=2)');

		expect(html).toContain('<a href="https://example.com/path?a=1&amp;b=2"');
		expect(html).toContain('rel="noopener noreferrer"');
	});

	it('only renders markdown images from safe URLs', () => {
		const html = renderMarkdown(
			'![safe](https://example.com/image.png) ![bad](javascript:alert(1))'
		);

		expect(html).toContain('<img src="https://example.com/image.png" alt="safe" />');
		expect(html).toContain('bad');
		expect(html).not.toContain('javascript:');
	});
});
