/// <reference types="cypress" />


describe("Login en Magento", () => {
    beforeEach(() => {
      cy.fixture("login.json").then((data) => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
  
        cy.get("#email").type(data.admin.email);
        cy.get("#pass").type(data.admin.password);
        cy.get('button.action.login.primary').click();
      });
    });
  
    it("Enter succesfully home page", () => {
      cy.url().should("include", "/customer/account");
    });
  });
  
    