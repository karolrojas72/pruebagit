const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000,
  watchForFileChanges: true,
  chromeWebSecurity: false,

  env: {
    apiUrl: "http://localhost:4000/api",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
