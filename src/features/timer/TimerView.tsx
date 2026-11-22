'use client';

import { Box, Button, Group, Stack, Title, rem } from '@mantine/core';
import * as React from 'react';

export function TimerView() {
	const [remaining, setRemaining] = React.useState(60);
	const [isRunning, setIsRunning] = React.useState(false);

	React.useEffect(() => {
		if (!isRunning) return;

		const timer = setInterval(() => {
			setRemaining((prev) => {
				if (prev <= 1) {
					setIsRunning(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isRunning]);

	const minutes = Math.floor(remaining / 60);
	const seconds = remaining % 60;
	const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

	function reset(newDuration: number) {
		setRemaining(newDuration);
		setIsRunning(false);
	}

	return (
		<Box
			style={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#0b1220',
				color: '#ffffff',
				padding: '32px'
			}}
		>
			<Stack align="center" gap="xl">
				<Title order={1} style={{ fontFamily: 'Lora, serif', color: '#ffffff', fontSize: rem(36) }}>
					Chronomètre Hackathon
				</Title>

				<Box
					style={{
						fontFamily: 'monospace',
						fontSize: rem(96),
						fontWeight: 900,
						letterSpacing: '0.15em',
						color: remaining <= 10 ? '#f87171' : '#63e0be',
						transition: 'color 300ms ease'
					}}
				>
					{formatted}
				</Box>

				<Group gap="md">
					<Button
						onClick={() => setIsRunning(!isRunning)}
						size="lg"
						color={isRunning ? 'yellow' : 'an-emerald'}
						style={{ color: '#090a1a', fontWeight: 700 }}
					>
						{isRunning ? 'Pause' : 'Démarrer'}
					</Button>
					<Button onClick={() => reset(60)} variant="outline" size="lg" color="gray">
						1 minute (Pitch)
					</Button>
					<Button onClick={() => reset(180)} variant="outline" size="lg" color="gray">
						3 minutes (Restitution)
					</Button>
				</Group>
			</Stack>
		</Box>
	);
}
