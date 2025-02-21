/// <reference types="cypress" />

describe("ATDD - Formulario de registro de usuario", () => {
  
    beforeEach(() => {
      cy.visit("https://magento.softwaretestingboard.com/customer/account/create/");
    });
  
    it("Registro de usuario con campos obligatorios vacíos", () => {
      cy.get('button.action.submit.primary').click();
      cy.get('#firstname-error').should('contain', 'This is a required field.');
      cy.get('#lastname-error').should('contain', 'This is a required field.');
    });
  
    it("Registro de usuario exitoso", () => {
      cy.get('#firstname').type('Juana');
      cy.get('#lastname').type('Rojas');
      cy.get('#email_address').type('validarna@domi.co');
      cy.get('#password').type('Juan123*');
      cy.get('#password-confirmation').type('Juan123*');
      cy.get('button.action.submit.primary').click();
      //cy.get('.message-success').should('contain','There is already an account with this email address.');
      cy.get('.message-success').should('be.visible')
      cy.contains('There is already an account with this email address.');
        
    });

    it("Validar correo existente", () => {
      cy.get('#firstname').type('Mario');
      cy.get('#lastname').type('Garcia');
      cy.get('#email_address').type('juana@domi.co');
      cy.get('#password').type('Mario123*');
      cy.get('#password-confirmation').type('Mario123*');
      cy.get('button.action.submit.primary').click();
      //cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
      cy.get('.message-error').should('be.visible')
      cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');


    });
  
    it("Validar formato de correo", () => {
      cy.get('#email_address').type('tesr@');
      cy.get('button.action.submit.primary').click();
      cy.get('#email_address-error').should('contain', 'Please enter a valid email address');
    });
  
    it("Validar longitud mínima de contraseña", () => {
      cy.get('#password').type('147q');
      cy.get('button.action.submit.primary').click();
      cy.get('#password-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols.');
    });
  
    it("Validar campo confirmación de contraseña", () => {
      cy.get('#password').type('Testing123');
      cy.get('#password-confirmation').type('147q');
      cy.get('button.action.submit.primary').click();
      cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.');
    });
  
  });
  