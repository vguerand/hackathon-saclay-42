import { Center } from '@mantine/core';

export function SeparateurDrapeauFr() {
	return (
		<Center my="lg">
			<svg
				width="150"
				height="14"
				viewBox="0 0 150 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<g filter="url(#filter0_d_45245_473)">
					<rect x="4" width="47.3333" height="5.17708" fill="#2A327D" />
					<rect x="51.332" width="47.3333" height="5.17708" fill="white" />
					<rect x="98.668" width="47.3333" height="5.17708" fill="#EE0C0C" />
				</g>
				<defs>
					<filter
						id="filter0_d_45245_473"
						x="0"
						y="0"
						width="150"
						height="13.1768"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45245_473" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_45245_473"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</Center>
	);
}
