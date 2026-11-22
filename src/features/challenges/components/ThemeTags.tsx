import type { ThemeTag } from '$lib/types/challenge';
import { Badge, Group, rem } from '@mantine/core';
import type * as React from 'react';

type Props = {
	themes?: ThemeTag[];
	style?: React.CSSProperties;
	size?: 'xs' | 'sm' | 'md';
};

export function ThemeTags({ themes = [], style, size = 'xs' }: Props) {
	if (themes.length === 0) return null;

	return (
		<Group gap="4px" style={style}>
			{themes.map((theme) => (
				<Badge
					key={theme.id}
					variant="outline"
					color="saclay-slate"
					size={size}
					radius="0"
					style={{
						borderRadius: 0,
						textTransform: 'uppercase',
						letterSpacing: '0.04em',
						fontWeight: 700,
						fontSize: rem(10),
						borderWidth: '1px',
						borderColor: '#cbd5e1',
						color: '#313E48',
						backgroundColor: '#f8fafc'
					}}
				>
					{theme.label}
				</Badge>
			))}
		</Group>
	);
}
