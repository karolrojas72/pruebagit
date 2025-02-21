const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    
    specPattern: 
    [
      "**/*.{feature,e2e,cy.js,spec.js}",  // Soporta archivos .feature, .cy.js y .spec.js
      "cypress/e2e/**/*.feature", // Asegura que los archivos .feature sean detectados
      "cypress/e2e/tests/login.cy.js"    
      //"cypress/e2e/**/login.cy.js"
      
    ],
       
    excludeSpecPattern: [
      "cypress/support/step_definitions/*.cy.js",
      //"cypress/e2e/ATDD/tests/**/*.cy.js",
    ],
    
  baseUrl: 'https://magento.softwaretestingboard.com',
    
    stepDefinitions: "cypress/support/step_definitions/**/*.js", // Permite que reconozca los steps
    
    supportFile: "cypress/support/e2e.js",
   

  },
});



