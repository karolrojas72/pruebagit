/// <reference types="cypress" />

describe("Proceso de compra usuario registrado", () => {
    let loginJson

    before(() => {
        cy.fixture('login.json').then((data) => {
            loginJson = data
    
        })
    })
    
    beforeEach(function() {
        if (this.currentTest.title !== "Enter succesfully home page") {// this ingresar a los its el que sea diferente de ese lo ejecuta
            cy.login(loginJson.admin.email,loginJson.admin.password)
        }
            
    }) 
 
    it("Debe agregar un producto al carrito", () => {
      cy.visit("https://magento.softwaretestingboard.com/");
      cy.xpath("//a[@title='Hero Hoodie' and contains(@class, 'product-item-link')]").click();
      cy.wait(1000);
      cy.xpath("//div[contains(@id, 'option-label-size') and text()='M']").click();
      cy.xpath("//div[contains(@id, 'option-label-color') and @option-label='Green']").click();
      cy.get("#qty").clear().type("2");
      cy.get("#product-addtocart-button").click();
      cy.contains("You added Hero Hoodie to your shopping cart.").should("be.visible");
    });
  
    it("Debe proceder al checkout desde el carrito", () => {
      cy.get("a.showcart").click();
      cy.get("button.action.primary.checkout").click();
      cy.wait(1000);
      cy.url().should("include", "/checkout/#shipping");
      cy.contains(".step-title", "Shipping Address").should("be.visible");
    });
  
    it("Debe validar que los datos de dirección de envío se autocompletan", () => {
      cy.get("a.showcart").click();
      cy.get("button.action.primary.checkout").click();
      cy.wait(1000);
      cy.url().should("include", "/checkout/#shipping");
      cy.get(".shipping-address-item.selected-item").should("be.visible");
    });
  
    it("Debe redirigir a la sección de revisión y pago", () => {
      cy.get("#shipping-method-buttons-container button").click();
      cy.url().should("include", "/checkout/#payment");
      cy.contains(".step-title", "Payment Method").should("be.visible");
      cy.contains(".title", "Order Summary").should("be.visible");
      cy.get(".opc-block-summary").should("be.visible");
      cy.get("#checkout-payment-method-load").should("be.visible");
      cy.get('input[name="payment[method]"]').should("exist");
    });
  
    it("Debe completar la compra y mostrar mensaje de éxito", () => {
      cy.get("button.action.primary.checkout").click();
      cy.get(".checkout-success").should("be.visible");
      cy.contains("Thank you for your purchase!");
    });
  });
  