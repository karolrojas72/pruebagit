/// <reference types="cypress" />
/*
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

  // Función reutilizable para agregar producto al carrito
  function agregarProductoAlCarrito() {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.xpath("//a[@title='Hero Hoodie' and contains(@class, 'product-item-link')]").click();
    cy.wait(1000);
    cy.xpath("//div[contains(@id, 'option-label-size') and text()='M']").click();
    cy.xpath("//div[contains(@id, 'option-label-color') and @option-label='Green']").click();
    cy.get("#qty").clear().type("2");
    cy.get("#product-addtocart-button").click();
    cy.contains("You added Hero Hoodie to your shopping cart.").should("be.visible");
  }

  it("Debe agregar un producto al carrito", () => {
    agregarProductoAlCarrito();
  });

  it("Debe completar el proceso de compra", () => {
    agregarProductoAlCarrito(); // Llamada al comando de Cypress

    // Proceder al checkout desde el carrito
    cy.get("a.showcart").click();
    cy.get("button.action.primary.checkout").click();
    cy.wait(1000);
    cy.url().should("include", "/checkout/#shipping");
    cy.contains(".step-title", "Shipping Address").should("be.visible");

    // Validar que los datos de dirección de envío se autocompletan
    cy.get(".shipping-address-item.selected-item").should("be.visible");

    // Redirigir a la sección de revisión y pago
    cy.get("#shipping-method-buttons-container button").click();
    cy.url().should("include", "/checkout/#payment");
    cy.contains(".step-title", "Payment Method").should("be.visible");
    cy.contains(".title", "Order Summary").should("be.visible");
    cy.get(".opc-block-summary").should("be.visible");
    cy.get("#checkout-payment-method-load").should("be.visible");
    cy.get('input[name="payment[method]"]').should("exist");

    // Completar la compra y validar mensaje de éxito
    cy.get("button.action.primary.checkout").click();
    cy.get(".checkout-success").should("be.visible");
    cy.contains("Thank you for your purchase!");
  });

 
});*/

describe("Proceso de compra", () => {
  beforeEach(function () {
    // Determinar qué usuario usar según el nombre del test
    if (this.currentTest.title.includes("usuarios sin dirección de envío")) {
      cy.login("user_no_shipping");  // Inicia sesión con el usuario sin dirección
    } else {
      cy.login("admin");  // Inicia sesión con el usuario admin
    }
  });


  // Función reutilizable para agregar producto al carrito
  function agregarProductoAlCarrito() {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.xpath("//a[@title='Hero Hoodie' and contains(@class, 'product-item-link')]").click();
    cy.wait(1000);
    cy.xpath("//div[contains(@id, 'option-label-size') and text()='M']").click();
    cy.xpath("//div[contains(@id, 'option-label-color') and @option-label='Green']").click();
    cy.get("#qty").clear().type("2");
    cy.get("#product-addtocart-button").click();
    cy.contains("You added Hero Hoodie to your shopping cart.").should("be.visible");
  }

  it("Debe agregar un producto al carrito", () => {
    agregarProductoAlCarrito();
  });

  it("Debe completar el proceso de compra", () => {
    agregarProductoAlCarrito();

    // Proceder al checkout desde el carrito
    cy.get("a.showcart").click();
    cy.get("button.action.primary.checkout").click();
    cy.wait(1000);
    cy.url().should("include", "/checkout/#shipping");
    cy.contains(".step-title", "Shipping Address").should("be.visible");

    // Validar que los datos de dirección de envío se autocompletan
    cy.get(".shipping-address-item.selected-item").should("be.visible");

    // Redirigir a la sección de revisión y pago
    cy.get("#shipping-method-buttons-container button").click();
    cy.url().should("include", "/checkout/#payment");
    cy.contains(".step-title", "Payment Method").should("be.visible");
    cy.contains(".title", "Order Summary").should("be.visible");
    cy.get(".opc-block-summary").should("be.visible");
    cy.get("#checkout-payment-method-load").should("be.visible");
    cy.get('input[name="payment[method]"]').should("exist");

    // Completar la compra y validar mensaje de éxito
    cy.get("button.action.primary.checkout").click();
    cy.get(".checkout-success").should("be.visible");
    cy.contains("Thank you for your purchase!");
  });

  it("Debe autocompletar los campos de Nombre y Apellido para usuarios sin dirección de envío", () => {
    agregarProductoAlCarrito();
    cy.visit("https://magento.softwaretestingboard.com/checkout/");

    cy.get('input[name="firstname"]').should("exist").and("be.visible").and("not.have.value", "");
    cy.get('input[name="lastname"]').should("exist").and("be.visible").and("not.have.value", "");
   
  });

  it("Debe diligenciar los campos obligatorios en checkout para usuarios sin dirección de envío", () => {
    agregarProductoAlCarrito();
    cy.visit("https://magento.softwaretestingboard.com/checkout/");

    // Diligenciar los campos obligatorios
    cy.get('input[name="firstname"]').type("Valeria");
    cy.get('input[name="lastname"]').type("Martinez");
    cy.get('input[name="street[0]"]').type("carrera 23");
    cy.get('input[name="city"]').type("Manizales");
    cy.get('select[name="region_id"]').select("State/Province");
    cy.get('input[name="postcode"]').type("123");
    cy.get('select[name="country_id"]').select("United States");
    cy.get('input[name="telephone"]').type("1234567890");
/*
    // Seleccionar el método de envío y hacer clic en "Next"
    cy.get('input[name="ko_unique_1"]').check();
    cy.get("button.continue").click();

    // Validar que se dirija a la sección "Review & Payments"
    cy.url().should("include", "/checkout/#payment");
    cy.contains(".step-title", "Review & Payments").should("be.visible");*/
  });

  


});
