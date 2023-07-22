import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// eslint-disable-next-line import/no-unresolved,@typescript-eslint/no-var-requires,global-require
			require('@cypress/code-coverage/task')(on, config);

			return config;
		},
		watchForFileChanges: true,
		specPattern: 'src/',
	},
	component: {
		specPattern: 'src/',
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
