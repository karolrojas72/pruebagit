/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el usuario está en la página principal", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When("el usuario selecciona la opción {string}", (option) => {
  cy.contains("nav a", option).trigger("mouseover"); // Abre el menú desplegable "Women"
});

When("el usuario selecciona la categoría {string}", (category) => {
  cy.contains("nav a", category).trigger("mouseover"); // Despliega la categoría "Bottoms"
});

When("el usuario selecciona la subcategoría {string}", (subcategory) => {
  cy.contains("nav a", subcategory).click(); // Selecciona "Pants"
});

Then("el sistema muestra solo productos que coinciden con {string}", (subcategory) => {
  
  });
