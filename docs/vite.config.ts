import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		// Accepte tout nom d'hôte (accès via un domaine ou un tunnel en dev)
		allowedHosts: true
	},
	preview: {
		allowedHosts: true
	},
	optimizeDeps: {
		include: ['style-to-js', 'style-to-object'],
		esbuildOptions: {
			plugins: [
				{
					name: 'ignore-virtual-zudoku-modules',
					setup(build) {
						build.onResolve({ filter: /^virtual:zudoku/ }, (args) => {
							return { path: args.path, external: true };
						});
					}
				}
			]
		}
	}
});
