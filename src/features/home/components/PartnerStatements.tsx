'use client';

import { TEXTS as t } from '$lib/content/texts';
import { Box, Container, Grid, Paper, Stack, Text, Title } from '@mantine/core';

export function PartnerStatements() {
	return (
		<Box
			py={{ base: 40, md: 64 }}
			style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
		>
			<Container size="xl">
				<Box mb="xl">
					<Text
						size="xs"
						fw={800}
						c="#63003C"
						style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}
					>
						{t.partners.sectionNumber}
					</Text>
					<Title
						order={2}
						mt="xs"
						style={{
							fontFamily: 'Lora, serif',
							color: '#313E48',
							fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
							fontWeight: 800,
							textTransform: 'uppercase'
						}}
					>
						{t.partners.title}
					</Title>
				</Box>

				<Grid gutter="xl">
					<Grid.Col span={{ base: 12 }}>
						<Paper
							p="xl"
							radius="0"
							withBorder
							style={{
								backgroundColor: '#fafbfc',
								borderColor: '#e2e8f0',
								borderTop: '3px solid #63003C',
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between'
							}}
						>
							<Stack gap="md">
								<Text
									size="xs"
									fw={800}
									c="#63003C"
									style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
								>
									{t.partners.quote1Title}
								</Text>
								<blockquote style={{ margin: 0 }}>
									<Text
										size="md"
										style={{
											fontFamily: 'Lora, serif',
											lineHeight: 1.7,
											color: '#1e293b',
											fontStyle: 'italic'
										}}
									>
										{t.partners.quote1Text}
									</Text>
								</blockquote>
							</Stack>

							<Box mt="xl" pt="md" style={{ borderTop: '1px solid #e2e8f0' }}>
								<Text size="sm" fw={800} c="#313E48">
									{t.partners.quote1Author}
								</Text>
								<Text size="xs" c="#64748b" style={{ letterSpacing: '0.05em' }}>
									{t.partners.quote1Sub}
								</Text>
							</Box>
						</Paper>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>
	);
}
