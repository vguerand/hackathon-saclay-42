import * as React from 'react';

declare module '*.css';

declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			'iconify-icon': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
					icon?: string;
					width?: string | number;
					height?: string | number;
					rotate?: string | number;
					flip?: string;
					mode?: string;
					inline?: boolean;
					class?: string;
					style?: React.CSSProperties;
				},
				HTMLElement
			>;
		}
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'iconify-icon': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & {
					icon?: string;
					width?: string | number;
					height?: string | number;
					rotate?: string | number;
					flip?: string;
					mode?: string;
					inline?: boolean;
					class?: string;
					style?: React.CSSProperties;
				},
				HTMLElement
			>;
		}
	}
}
