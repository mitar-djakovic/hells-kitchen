import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      console.log('on', on);

      return config
    },
    watchForFileChanges: true,
    specPattern: 'src/',
  },
  component: {
    specPattern: 'src/',
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
