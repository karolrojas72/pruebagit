/// <reference types="Cypress" />

describe('Login in user with invalidate credentials', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
      });
    
    
    it('A red error message is displayed', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('invalid_usermname');
        cy.get('#password').type('invalid_password');
        cy.get('#login-button').click();

        cy.get('.error-message-container').should('be.visible')
        
        cy.contains('Epic sadface: Username and password do not match any user in this service');
    });
  
});
