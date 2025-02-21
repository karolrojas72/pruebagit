/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario accede al formulario de registro", () => {
  cy.visit("https://magento.softwaretestingboard.com/customer/account/create/"); 
});

//Scenario 1
When('da clic en el botón "Create an Account" sin ingresar los campos obligatorios {string} y {string}', (nombre,apellido) => {
    cy.log(`Campos omitidos: ${nombre}, ${apellido}`);// Muestra en la consola de Cypress qué campos no se completaron
    cy.get('button.action.submit.primary').click();

});

Then('se genera el mensaje de validación para cada campo {string} {string}', (messageName,mesageLastname) => {
    // Verifica el mensaje en el campo "First Name"
    cy.get('#firstname-error').should('be.visible')
    cy.contains(messageName);
  
    // Verifica el mensaje en el campo "Last Name"
    cy.get('#lastname-error').should('be.visible')
    cy.contains(mesageLastname);
  });

//Scenario 2
When('da clic en el botón "Create an Account" con todos los campos obligatorios {string} {string} {string} {string} {string} diligenciados',
     (nombre,apellido,mail,password,confirmpassword) => {
  cy.get('#firstname').type(nombre);
  cy.get('#lastname').type(apellido);
  cy.get('#email_address').type(mail);
  cy.get('#password').type(password);
  cy.get('#password-confirmation').type(confirmpassword);
  //cy.get('button[type="submit"]').click();
  cy.get('button.action.submit.primary').click();
     
});

Then('verifica si el registro fue exitoso {string}', (message) => {
  cy.get('.message-success').should('be.visible')
  cy.contains(message);
 
});
/*Then('verifica si el registro fue exitoso {string} o si el correo ya existe {string}', (messageSuccess,messageError) => {
    cy.get('body').then((body) => {
      if (body.find('.message-error').length > 0) {
        cy.contains(messageError).should('be.visible');
      } else if (body.find('.message-success').length > 0) {
        cy.contains(messageSuccess).should('be.visible');
      } 
    });
});*/
//Scenario 3
When('ingresa todos los campos {string} {string} {string} {string} {string} al dar clic en el botón "Create an Account" con un correo electrónico existente',
  (nombre,apellido,mailExistente,password,confirmpassword) => {
  cy.get('#firstname').type(nombre);
  cy.get('#lastname').type(apellido);
  cy.get('#email_address').type(mailExistente);
  cy.get('#password').type(password);
  cy.get('#password-confirmation').type(confirmpassword);
  cy.get('button.action.submit.primary').click();
    
});
  
Then('verifica si el correo ya existe {string}', (messageExiste) => {
  cy.get('.message-error').should('be.visible')
  cy.contains(messageExiste);
  
});

//Instrucción empleando XPath
/*Then('verifica si el correo ya existe {string}', (messageExiste) => {
    cy.xpath('//div[@class="message-error error message"]').should('exist').and('be.visible').and('contain.text', messageExiste);
});*/

//Scenario 4
When('ingresa un correo electrónico inválido {string}', (correoInvalido) => {
  cy.get('#email_address').type(correoInvalido);
  cy.get('button.action.submit.primary').click();
});

Then('se genera el mensaje de validación para el campo de correo {string}', (messageCorreo) => {
  cy.get('#email_address-error').should('be.visible')
  cy.contains(messageCorreo);
  
});

//Scenario 5
When('ingresa una contraseña inferior a la longitud mínima {string}', (contraseñaCorta) => {
  cy.get('#password').type(contraseñaCorta);
  cy.get('button.action.submit.primary').click();
});

Then('se genera el mensaje de validación para el campo de contraseña {string}', (messageCorta) => {
    cy.get('#password-error').should('be.visible')
    cy.contains(messageCorta);
});

//Scenario 6
When('ingresa la contraseña {string} y confirma una contraseña diferente a la ingresada {string}', (contraseñaValida,contraseñaDiferente) => {
   
    cy.get('#password').type(contraseñaValida)
    cy.get('#password-confirmation').type(contraseñaDiferente);
    cy.get('button.action.submit.primary').click();
  });
  
Then('se genera el mensaje de validación para el campo confirmar contraseña {string}', (messageDiferente) => {
    cy.get('#password-confirmation-error').should('be.visible')
    cy.contains(messageDiferente);
});



