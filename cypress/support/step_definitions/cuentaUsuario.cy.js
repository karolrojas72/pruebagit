import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Escenario: Cambio de dirección de facturación
Given("que el usuario ha seleccionado la opción \"Address Book\"", () => {
  cy.visit("/customer/address/");
});

When("el usuario hace clic en el enlace \"Change Billing Address\"", () => {
  cy.get("a:contains('Change Billing Address')").click();
});

Then("se redirige al usuario al formulario \"Edit Address\"", () => {
  cy.url().should("include", "customer/address/edit");
});

// Escenario: Cambio del campo Phone Number
Given("que el usuario ha seleccionado la opción \"Address Book\" y hace clic en el enlace \"Change Billing Address\"" , () => {
  cy.get("a:contains('Change Billing Address')").click();
  cy.visit("/customer/address/edit/id/1/"); // /customer/address/edit/id/1/
  
  //a/span[contains(text(),'Change Billing Address')]
});

When('el usuario ingresa un nuevo valor en el campo {string} y hace clic en {string}', (phoneNumber) => {
  cy.get("input[name='telephone']").clear().type(phoneNumber);
  cy.get("button:contains('Save Address')").click();
});

Then("se muestra el mensaje de confirmación \"You saved the address.\"", () => {
  cy.contains("You saved the address.").should("be.visible");
});

// Escenario: Adicionar una nueva dirección
When("el usuario hace clic en \"Add New Address\"", () => {
  cy.get("button:contains('Add New Address')").click();
});

Then("se redirige al usuario al formulario de edición de dirección", () => {
  cy.url().should("include", "customer/address/new");
});

// Escenario: Validación de mis órdenes realizadas
Given("que el usuario ha seleccionado la opción \"My Orders\"", () => {
  cy.visit("/sales/order/history/");
});

When("el usuario hace clic en el enlace \"View Order\"", () => {
  cy.get("a:contains('View Order')").first().click();
});

Then("se redirige al usuario a la página de detalles de la orden", () => {
  cy.url().should("include", "sales/order/view");
});

// Escenario: Compartir la lista de productos favoritos
Given("el usuario ha seleccionado la opción \"My Wish List\"", () => {
  cy.visit("/wishlist/");
});

When("el usuario hace clic en el botón \"Share Wish List\"", () => {
  cy.get("button:contains('Share Wish List')").click();
});

Then("se redirige el usuario a la página de compartir lista de deseos", () => {
  cy.url().should("include", "wishlist/index/share");
});

// Escenario: Validar que la lista de productos favoritos se comparte con éxito
When("el usuario hace clic en el botón \"Share Wish List\" y diligencia el campo \"Email Address\" y hace clic en \"Share Wish List\"", () => {
  cy.get("input[name='emails']").type("test@example.com");
  cy.get("button:contains('Share Wish List')").click();
});

Then("se muestra el mensaje de confirmación \"Your wish list has been shared.\"", () => {
  cy.contains("Your wish list has been shared.").should("be.visible");
});

// Escenario: Cambiar la contraseña
Given("que el usuario ha seleccionado la opción \"Account Information\" y ha marcado la casilla \"Change Password\"", () => {
  cy.visit("/customer/account/edit/");
  cy.get("input#change-password").check().should("be.checked"); // Asegura que la casilla está activada
});

When('se carga la contraseña actual "Current Password", el usuario ingresa una {string}, la confirma en {string} y hace clic en "Save"', (password, confirmpassword) => {
  // Obtener la contraseña almacenada en el login
  const currentPassword = Cypress.env("userPassword");

  // Validar que los campos sean visibles antes de escribir
  cy.get("input#current-password").should("be.visible").type(currentPassword);
  cy.get("input#password").should("be.visible").type(password);
  cy.get("input#password-confirmation").should("be.visible").type(confirmpassword);

  // Hacer clic en "Save"
  cy.get("button").contains("Save").click();
});

Then("se redirige al usuario a la página de inicio de sesión y se muestra el mensaje de éxito \"You saved the account information.\"", () => {
  cy.url().should("include", "customer/account/login");
  cy.contains("You saved the account information.").should("be.visible");
});

