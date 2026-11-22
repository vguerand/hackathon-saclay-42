import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib'),
			'@': path.resolve(__dirname, './src')
		}
	},
	test: {
		environment: 'node',
		include: ['tests/lib/**/*.test.ts']
	}
});
