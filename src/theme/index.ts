import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
	primaryColor: 'saclay-plum',
	primaryShade: 6,
	fontFamily:
		"'Lato', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
	headings: {
		fontFamily: "'Lora', Georgia, serif",
		sizes: {
			h1: { fontSize: rem(42), lineHeight: '1.15', fontWeight: '800' },
			h2: { fontSize: rem(30), lineHeight: '1.25', fontWeight: '700' },
			h3: { fontSize: rem(24), lineHeight: '1.35', fontWeight: '700' },
			h4: { fontSize: rem(18), lineHeight: '1.4', fontWeight: '600' }
		}
	},
	colors: {
		// Palette Officielle Université Paris-Saclay (Pantone 229 C / #63003C)
		'saclay-plum': [
			'#fdf2f7', // 0
			'#fce7f1', // 1
			'#f8cde2', // 2
			'#f3a2cb', // 3
			'#eb6ca9', // 4
			'#9e115e', // 5
			'#63003C', // 6: Couleur institutionnelle officielle Paris-Saclay
			'#520032', // 7
			'#410027', // 8
			'#280018' // 9
		],
		// Accent Magenta Paris-Saclay (#CA007A)
		'saclay-magenta': [
			'#fdf2f8',
			'#fce7f3',
			'#fbcfe8',
			'#f9a8d4',
			'#f472b6',
			'#db2777',
			'#CA007A', // 6: Accent innovation Paris-Saclay
			'#a30062',
			'#82004e',
			'#540033'
		],
		// Bleu Nuit Recherche Paris-Saclay (Pantone 2955 / #202955)
		'saclay-navy': [
			'#eef1f8',
			'#dce1f0',
			'#b8c2e1',
			'#8f9fce',
			'#5f76b8',
			'#3a4f8f',
			'#202955', // 6: Bleu nuit profond Paris-Saclay
			'#182043',
			'#121833',
			'#0c0f20'
		],
		// Gris Ardoise Officiel Paris-Saclay (PMS 432 C / #313E48)
		'saclay-slate': [
			'#f4f6f8',
			'#e8ebed',
			'#d1d7dc',
			'#a8b3bc',
			'#7f8f9c',
			'#566a7b',
			'#313E48', // 6: Ardoise foncé institutionnel
			'#27323a',
			'#1d252c',
			'#13191d'
		],
		// Cyan Tech 42 (#00BABC)
		'saclay-cyan': [
			'#e6fcfb',
			'#cbf8f7',
			'#96f2ef',
			'#5fe5e1',
			'#2ad1cc',
			'#00babc', // 5: Cyan 42
			'#009b9c',
			'#007a7b',
			'#005a5a',
			'#003b3b'
		],
		// Rétrocompatibilité progressive
		'an-blue': [
			'#fdf2f7',
			'#fce7f1',
			'#f8cde2',
			'#f3a2cb',
			'#eb6ca9',
			'#9e115e',
			'#63003C', // Paris-Saclay Plum
			'#520032',
			'#202955',
			'#0c0f20'
		],
		'an-red': [
			'#fdf2f8',
			'#fce7f3',
			'#fbcfe8',
			'#f9a8d4',
			'#f472b6',
			'#CA007A', // Magenta Paris-Saclay
			'#a30062',
			'#82004e',
			'#63003C',
			'#410027'
		],
		'an-emerald': [
			'#e6fcfb',
			'#cbf8f7',
			'#96f2ef',
			'#5fe5e1',
			'#2ad1cc',
			'#00babc',
			'#009b9c',
			'#007a7b',
			'#005a5a',
			'#003b3b'
		],
		'an-navy': [
			'#eef1f8',
			'#dce1f0',
			'#b8c2e1',
			'#8f9fce',
			'#5f76b8',
			'#3a4f8f',
			'#202955',
			'#182043',
			'#121833',
			'#0c0f20'
		]
	},
	// Design éditorial Design Spot : angles droits nets (radius 0), bordures structurées, 0 ombres superflues
	radius: {
		xs: rem(0),
		sm: rem(0),
		md: rem(0),
		lg: rem(0),
		xl: rem(0)
	},
	shadows: {
		xs: 'none',
		sm: 'none',
		md: 'none',
		lg: 'none',
		xl: 'none'
	},
	components: {
		Button: {
			defaultProps: {
				radius: '0'
			},
			styles: {
				root: {
					borderRadius: 0,
					fontWeight: 700,
					letterSpacing: '0.04em',
					textTransform: 'uppercase',
					fontSize: rem(13),
					transition: 'all 120ms ease'
				}
			}
		},
		Card: {
			defaultProps: {
				radius: '0',
				shadow: 'none',
				withBorder: true
			},
			styles: {
				root: {
					borderRadius: 0,
					boxShadow: 'none',
					borderColor: '#e2e8f0'
				}
			}
		},
		Paper: {
			defaultProps: {
				radius: '0',
				shadow: 'none',
				withBorder: true
			},
			styles: {
				root: {
					borderRadius: 0,
					boxShadow: 'none',
					borderColor: '#e2e8f0'
				}
			}
		},
		Badge: {
			defaultProps: {
				radius: '0'
			},
			styles: {
				root: {
					borderRadius: 0,
					fontWeight: 700,
					letterSpacing: '0.06em',
					textTransform: 'uppercase',
					fontSize: rem(11)
				}
			}
		},
		TextInput: {
			defaultProps: {
				radius: '0'
			},
			styles: {
				input: {
					borderRadius: 0,
					borderColor: '#cbd5e1',
					'&:focus': {
						borderColor: '#63003C'
					}
				}
			}
		},
		Textarea: {
			defaultProps: {
				radius: '0'
			},
			styles: {
				input: {
					borderRadius: 0,
					borderColor: '#cbd5e1',
					'&:focus': {
						borderColor: '#63003C'
					}
				}
			}
		},
		Modal: {
			defaultProps: {
				radius: '0',
				shadow: 'none'
			},
			styles: {
				content: {
					borderRadius: 0,
					boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
					border: '1px solid #313E48'
				}
			}
		}
	}
});
