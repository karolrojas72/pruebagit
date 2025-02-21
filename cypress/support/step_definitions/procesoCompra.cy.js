/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Escenario 1: Agregar un producto al carrito (independiente)
Given("que el usuario está en la página de productos", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When('selecciona el producto {string} con tamaño {string}, color {string} y cantidad {string} y da clic en "Add to Cart"', 
    (producto, size, color, quantity) => {
      cy.xpath(`//a[@title='${producto}' and contains(@class, 'product-item-link')]`).should("be.visible").click();
      cy.wait(1000);
      cy.xpath(`//div[contains(@id, 'option-label-size') and text()='${size}']`).should("be.visible").click();
      cy.xpath(`//div[contains(@id, 'option-label-color') and @option-label='${color}']`).should("be.visible").click();
      cy.get("#qty").should("be.visible").clear().type(quantity);
      cy.get("#product-addtocart-button").should("be.visible").click();
});

Then("verifica si el producto se añade con éxito al carrito {string}", (messageProduct) => {
  cy.get('.message-success.success').should('be.visible');
  cy.contains(messageProduct);
});

// Definición del paso "que el usuario tiene productos en el carrito"
Given("que el usuario tiene productos en el carrito", () => {
  // Agregar producto al carrito
  cy.visit("https://magento.softwaretestingboard.com/");
  cy.xpath("//a[@title='Hero Hoodie' and contains(@class, 'product-item-link')]").should("be.visible").click();
  cy.wait(1000);
  cy.xpath("//div[contains(@id, 'option-label-size') and text()='M']").should("be.visible").click();
  cy.xpath("//div[contains(@id, 'option-label-color') and @option-label='Green']").should("be.visible").click();
  cy.get("#qty").should("be.visible").clear().type("2");
  cy.get("#product-addtocart-button").should("be.visible").click();
  cy.get('.message-success.success').should('be.visible');
});

// Escenario 2: Abrir el carrito y proceder al checkout
When('da clic en el icono del carrito de compras y luego da clic en "Proceed to Checkout"', () => {
  cy.get("a.showcart").should("be.visible").click();
  cy.get("button.action.primary.checkout").should("be.visible").click();
});

Then("se redirije al usuario al formulario \"Shipping Address\"", () => {
  cy.wait(1000);
  cy.url().should("include", "/checkout/#shipping");
  //cy.xpath('//li[@id="shipping"]').should("be.visible");
  //cy.contains("Shipping Address").should("be.visible");
  cy.contains('.step-title', "Shipping Address").should("be.visible");
  
});

// Escenario 3: Acceder al checkout y validar el formulario "Shipping Address"
When("accede al checkout y el sistema autocompleta los campos de dirección de envío y facturación", () => {
  // Ir al carrito y proceder al checkout
  cy.get("a.showcart").should("be.visible").click();
  cy.get("button.action.primary.checkout").should("be.visible").click();

  // Validar que se redirige correctamente
  cy.wait(1000);
  cy.url().should("include", "/checkout/#shipping");

  // Validar que haya al menos una dirección seleccionada
  cy.get(".shipping-address-item.selected-item").should("exist");
});

// Verificar que los datos de dirección se completaron correctamente
Then("verifica si los campos se completan con la información guardada del usuario registrado", () => {
  cy.get(".shipping-address-item.selected-item").should("be.visible")
   
});

// Escenario 4: Da clic en "Next" y se redirige a la sección de revisión y pago
When('da clic en "Next" se redirige a la sección de revisión y pago', () => {
  cy.get("#shipping-method-buttons-container button").should("be.visible").click(); // Clic en el botón "Next"

  // Validar que se redirige a la sección "Review & Payments"
  cy.url().should("include", "/checkout/#payment");
  
});

// Se redirige a la sección "Payment Method" y verifica la información del pedido
Then('se redirije a la seccion "Payment Method" y verifica la información del pedido', () => {
  // Validar que la sección "Payment Method" es visible
  cy.contains(".step-title", "Payment Method").should("be.visible");
  cy.contains(".title", "Order Summary").should("be.visible");

  // Validar que los productos y el total del pedido están visibles
  cy.get(".opc-block-summary").should("be.visible"); // Validar resumen del pedido
    
  // Validar que los detalles de pago están disponibles
  cy.get("#checkout-payment-method-load").should("be.visible"); // Contenedor de métodos de pago
  cy.get('input[name="payment[method]"]').should("exist"); // Verifica que hay al menos una opción de pago
  
});

// Escenario 5: Validar que el proceso de compra se realiza con éxito
When('procede a la sección resumen de pedido y da clic en "Place Order"', () => {
  cy.get("button.action.primary.checkout").should("be.visible").click();
});

Then('se genera el mensaje de éxito de la compra {string}', (successMessage) => {
  cy.get(".checkout-success").should("be.visible");
  cy.contains(successMessage);
});

