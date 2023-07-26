import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: [
				'src/pages/**/*.ts',
				'src/pages/**/*.tsx',
				'src/components/**/*.ts',
				'src/components/**/*.tsx',
				'src/lib/**/*.ts',
				'src/lib/**/*.tsx',
				'src/utils/**/*.ts',
				'src/utils/**/*.tsx',
			],
			reportsDirectory: './tests/unit/coverage',
			lines: 50,
			branches: 50,
			functions: 50,
			statements: 50,
			all: true,
		},
	},
});
