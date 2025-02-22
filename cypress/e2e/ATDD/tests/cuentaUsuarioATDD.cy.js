describe("ATDD - Cuenta de usuario registrada", () => {
  
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
  
    // Escenario: Cambio de dirección de facturación
    it("Cambio de dirección de facturación", () => {
      cy.visit("/customer/address/");
      cy.contains("Change Billing Address").click();
      cy.url().should("include", "customer/address/edit");
    });
  
    // Escenario: Cambio del campo Phone Number
    it("Cambio del campo Phone Number", () => {
      cy.visit("/customer/address/");
      cy.contains("Change Billing Address").click();
      cy.url().should("include", "customer/address/edit");
      cy.get("input[name='telephone']").clear().type("79879");
      cy.contains("button", "Save Address").click();
      cy.contains("You saved the address.").should("be.visible");
    });
  
    // Escenario: Adicionar una nueva dirección
    it("Adicionar una nueva dirección", () => {
      cy.visit("/customer/address/");
      cy.get("button[role='add-address']").click();
      cy.url().should("include", "customer/address/new");
    });
  
    // Escenario: Validación de mis órdenes realizadas
    it("Validación de mis órdenes realizadas", () => {
      cy.visit("/sales/order/history/");
      cy.contains("View Order").click();
      cy.url().should("include", "sales/order/view");
    });
  
    // Escenario: Compartir la lista de productos favoritos
    it("Compartir la lista de productos favoritos", () => {
      cy.visit("/wishlist/");
      cy.wait(3000); 
      cy.contains("button", "Share Wish List", { timeout: 10000 })
        .should("be.visible")
        .click();
        cy.url().should("include", "wishlist/index/share");
    });
    
  
    // Escenario: Validar que la lista de productos favoritos se comparte con éxito
    it("Validar que la lista de productos favoritos se comparte con éxito", () => {
      cy.visit("/wishlist/");
      cy.contains("button", "Share Wish List").click();
      cy.get("textarea[name='emails']").type("test@example.com");
      cy.contains("button", "Share Wish List").click();
      cy.contains("Your wish list has been shared.").should("be.visible");
    });
  
    // Escenario: Cambiar la contraseña
    it("Cambiar la contraseña", () => {
      cy.visit("/customer/account/edit/");
      cy.get("input[name='change_password']").check();
      cy.get("#current-password").type("Mundo123*");
      cy.get("#password").type("Mundo123*");
      cy.get("#password-confirmation").type("Mundo123*");
      cy.contains("button", "Save").click();
      cy.url().should("include", "/customer/account/login/");
      cy.contains("You saved the account information.").should("be.visible");
    });
  
  });
  