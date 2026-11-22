function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function decodeHtmlEntities(value: string): string {
	return value
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}

function normalizeMarkdownUrl(value: string, options: { image?: boolean } = {}): string | null {
	const decoded = Array.from(decodeHtmlEntities(value).trim())
		.filter((character) => {
			const code = character.charCodeAt(0);
			return code > 0x20 && code !== 0x7f;
		})
		.join('');

	if (!decoded) {
		return null;
	}

	if (decoded.startsWith('/')) {
		if (options.image && !decoded.startsWith('/api/challenges/repository-file?')) {
			return null;
		}
		return decoded;
	}

	try {
		const url = new URL(decoded);
		if (url.protocol !== 'https:' && url.protocol !== 'http:') {
			return null;
		}
		return url.toString();
	} catch {
		return null;
	}
}

function renderInlineMarkdown(value: string): string {
	const escaped = escapeHtml(value);
	const rendered = escaped
		.replace(/`([^`]+)`/g, '<code>$1</code>')
		.replace(/!\[([^\]]*)\]\s*\(([^)]+)\)/g, (_, alt: string, src: string) => {
			const safeSrc = normalizeMarkdownUrl(src, { image: true });
			return safeSrc ? `<img src="${escapeHtml(safeSrc)}" alt="${alt}" />` : alt;
		})
		.replace(/\[([^\]]+)\]\s*\(([^)]+)\)/g, (_, label: string, href: string) => {
			const safeHref = normalizeMarkdownUrl(href);
			return safeHref
				? `<a href="${escapeHtml(safeHref)}" target="_blank" rel="noopener noreferrer">${label}</a>`
				: label;
		})
		.replace(
			/(?<!["'>])(https?:\/\/[^\s<]+)/g,
			'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
		)
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
		.replace(/__([^_]+)__/g, '<strong>$1</strong>')
		.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
		.replace(/(?<!_)_([^_]+)_(?!_)/g, '<em>$1</em>');

	return rendered;
}

function isTableSeparator(line: string): boolean {
	return /^\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(line.trim());
}

function splitTableRow(line: string): string[] {
	return line
		.trim()
		.replace(/^\|/, '')
		.replace(/\|$/, '')
		.split('|')
		.map((cell) => renderInlineMarkdown(cell.trim()));
}

export function renderMarkdown(value: string): string {
	const normalized = value.replace(/\r\n/g, '\n').trim();

	if (!normalized) {
		return '';
	}

	const lines = normalized.split('\n');
	const html: string[] = [];
	let i = 0;

	while (i < lines.length) {
		const line = lines[i].trimEnd();
		const trimmed = line.trim();

		if (!trimmed) {
			i += 1;
			continue;
		}

		if (trimmed.startsWith('```')) {
			const codeLines: string[] = [];
			i += 1;
			while (i < lines.length && !lines[i].trim().startsWith('```')) {
				codeLines.push(lines[i]);
				i += 1;
			}
			html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
			i += 1;
			continue;
		}

		if (/^#{1,6}\s+/.test(trimmed)) {
			const level = trimmed.match(/^#+/)?.[0].length ?? 1;
			html.push(
				`<h${level}>${renderInlineMarkdown(trimmed.replace(/^#{1,6}\s+/, ''))}</h${level}>`
			);
			i += 1;
			continue;
		}

		if (trimmed.startsWith('>')) {
			const quoteLines: string[] = [];
			while (i < lines.length && lines[i].trim().startsWith('>')) {
				quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
				i += 1;
			}
			html.push(
				`<blockquote><p>${quoteLines.map(renderInlineMarkdown).join('<br />')}</p></blockquote>`
			);
			continue;
		}

		if (trimmed.startsWith('- ') || /^\d+\.\s+/.test(trimmed)) {
			const ordered = /^\d+\.\s+/.test(trimmed);
			const items: string[] = [];
			while (
				i < lines.length &&
				(ordered ? /^\d+\.\s+/.test(lines[i].trim()) : lines[i].trim().startsWith('- '))
			) {
				items.push(
					renderInlineMarkdown(lines[i].trim().replace(ordered ? /^\d+\.\s+/ : /^-\s+/, ''))
				);
				i += 1;
			}
			html.push(
				`<${ordered ? 'ol' : 'ul'}>${items.map((item) => `<li>${item}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`
			);
			continue;
		}

		if (trimmed.includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
			const headers = splitTableRow(lines[i]);
			i += 2;
			const rows: string[][] = [];
			while (i < lines.length && lines[i].trim().includes('|') && lines[i].trim() !== '') {
				rows.push(splitTableRow(lines[i]));
				i += 1;
			}
			html.push(
				`<table><thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${rows
					.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
					.join('')}</tbody></table>`
			);
			continue;
		}

		const paragraphLines: string[] = [];
		while (
			i < lines.length &&
			lines[i].trim() !== '' &&
			!lines[i].trim().startsWith('```') &&
			!/^#{1,6}\s+/.test(lines[i].trim()) &&
			!lines[i].trim().startsWith('>') &&
			!lines[i].trim().startsWith('- ') &&
			!/^\d+\.\s+/.test(lines[i].trim()) &&
			!(lines[i].trim().includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
		) {
			paragraphLines.push(lines[i].trim());
			i += 1;
		}
		html.push(`<p>${paragraphLines.map(renderInlineMarkdown).join('<br />')}</p>`);
	}

	return html.join('');
}
