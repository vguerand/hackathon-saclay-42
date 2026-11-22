import React, { useEffect, useId, useRef, useState } from 'react';

export type MermaidProps = {
	chart?: string;
	children?: string;
	title?: string;
	caption?: string;
};

export const Mermaid: React.FC<MermaidProps> = ({ chart, children, title, caption }) => {
	const content = (chart || children || '').trim();
	const containerRef = useRef<HTMLDivElement>(null);
	const [svg, setSvg] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const rawId = useId();
	const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
	const titleId = `${id}-title`;
	const captionId = `${id}-caption`;

	useEffect(() => {
		let isMounted = true;

		async function renderChart() {
			if (typeof window === 'undefined' || !content) return;

			try {
				const mermaid = (await import('mermaid')).default;
				const isDark = document.documentElement.classList.contains('dark');

				mermaid.initialize({
					startOnLoad: false,
					securityLevel: 'loose',
					theme: isDark ? 'dark' : 'default',
					themeVariables: isDark
						? {
								primaryColor: '#C26A9C',
								primaryTextColor: '#F8FAFC',
								primaryBorderColor: '#E0A3C5',
								lineColor: '#94A3B8',
								secondaryColor: '#1E293B',
								tertiaryColor: '#0F172A',
								background: '#0F172A',
								mainBkg: '#1E293B',
								nodeBorder: '#C26A9C',
								clusterBkg: '#1E293B',
								clusterBorder: '#475569',
								defaultLinkColor: '#E0A3C5',
								fontFamily: 'Inter, system-ui, sans-serif',
								fontSize: '14px'
							}
						: {
								primaryColor: '#FDF2F7',
								primaryTextColor: '#63003C',
								primaryBorderColor: '#C26A9C',
								lineColor: '#475569',
								secondaryColor: '#FEF3C7',
								tertiaryColor: '#F0FDF4',
								background: '#FFFFFF',
								mainBkg: '#FFFFFF',
								nodeBorder: '#C26A9C',
								clusterBkg: '#F8FAFC',
								clusterBorder: '#CBD5E1',
								defaultLinkColor: '#63003C',
								fontFamily: 'Inter, system-ui, sans-serif',
								fontSize: '14px'
							}
				});

				// Generate unique container ID
				const uniqueId = `${id}-${Date.now()}`;
				const { svg: renderedSvg } = await mermaid.render(uniqueId, content);

				if (isMounted) {
					setSvg(renderedSvg);
					setError(null);
				}
			} catch (err: unknown) {
				if (isMounted) {
					console.warn('Mermaid render error:', err);
					setError(err instanceof Error ? err.message : String(err));
				}
			}
		}

		renderChart();

		// Re-render when theme changes (Light / Dark)
		const observer = new MutationObserver((mutations) => {
			for (const m of mutations) {
				if (m.type === 'attributes' && m.attributeName === 'class') {
					renderChart();
				}
			}
		});

		observer.observe(document.documentElement, { attributes: true });

		return () => {
			isMounted = false;
			observer.disconnect();
		};
	}, [content, id]);

	return (
		<figure
			role="group"
			aria-labelledby={title ? titleId : undefined}
			aria-describedby={caption ? captionId : undefined}
			style={{
				margin: '1.5rem 0',
				borderRadius: '0',
				border: '1px solid var(--border)',
				backgroundColor: 'transparent',
				boxShadow: 'none',
				overflow: 'hidden'
			}}
		>
			{title && (
				<div
					id={titleId}
					style={{
						padding: '0.75rem 1.25rem',
						borderBottom: '1px solid var(--border)',
						backgroundColor: 'color-mix(in srgb, var(--muted) 40%, transparent)',
						fontWeight: 700,
						fontSize: '0.95rem',
						color: 'inherit'
					}}
				>
					{title}
				</div>
			)}

			<div
				ref={containerRef}
				tabIndex={0}
				aria-label={title ? `Schéma : ${title}` : 'Schéma Mermaid'}
				style={{
					padding: '1.5rem',
					overflowX: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '120px',
					backgroundColor: 'transparent'
				}}
			>
				{error ? (
					<div role="alert" style={{ color: 'var(--destructive)', fontSize: '0.9rem' }}>
						Impossible d'afficher le schéma : {error}
					</div>
				) : svg ? (
					<div
						style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
						dangerouslySetInnerHTML={{ __html: svg }}
					/>
				) : (
					<div style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem' }}>
						Chargement du schéma…
					</div>
				)}
			</div>

			{caption && (
				<figcaption
					id={captionId}
					style={{
						padding: '0.5rem 1.25rem 0.75rem',
						fontSize: '0.85rem',
						color: 'var(--muted-foreground)',
						fontStyle: 'italic',
						textAlign: 'center',
						borderTop: '1px solid var(--border)'
					}}
				>
					{caption}
				</figcaption>
			)}
		</figure>
	);
};

export default Mermaid;
