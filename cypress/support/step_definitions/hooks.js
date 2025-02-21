import { Before } from "@badeball/cypress-cucumber-preprocessor";

// Hook para el escenario de login
Before({ tags: "@login" }, () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
  
  const password = "Testing134*"; // Guardamos la contraseña en una variable
  
  cy.get("#email").type("swaglabs1@yopmail.com");
  cy.get("#pass").type(password);
  cy.get('button.action.login.primary').click();
  
  // Guardamos la contraseña en Cypress.env() para usarla en otros pasos
  Cypress.env("userPassword", password);
});

/*Before({ tags: "@login" }, () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
  cy.get("#email").type("swaglabs1@yopmail.com");
  cy.get("#pass").type("Testing123*");
  cy.get('button.action.login.primary').click();
  //cy.url().should("include", "/customer/account/");
  //cy.visit("https://magento.softwaretestingboard.com/");
});*/

