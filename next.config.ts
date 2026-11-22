import type { NextConfig } from 'next';

// Site 100 % statique : `next build` produit le dossier `out/`,
// servi tel quel par n'importe quel serveur web.
const nextConfig: NextConfig = {
	output: 'export',
	trailingSlash: true,
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
};

export default nextConfig;
