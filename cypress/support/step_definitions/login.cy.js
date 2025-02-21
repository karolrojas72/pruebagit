/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Scenario 1
Given("que el usuario accede a la página de inicio de sesión", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
});

When('ingresa el correo {string}, la contraseña {string} y da clic en "Sign In"', (email,password) => {
  cy.get("#email").type(email);
  cy.get("#pass").type(password);
  cy.get('button.action.login.primary').click();
});

Then("se redirige al panel de la cuenta y el nombre del usuario está visible en la cabecera", () => {
  cy.url().should("include", "/customer/account/");
  cy.get(".header .greet.welcome").should("be.visible").and("contain", "Welcome");
});



