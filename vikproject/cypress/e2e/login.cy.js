/// <reference types="Cypress" />
describe('Home page - Sauce Demo', () => {
    let loginJson

    before(() => {
        cy.fixture('login.json').then((data) => {
            loginJson = data
    
        })
    })
    
    beforeEach(function() {
        if (this.currentTest.title !== "Enter succesfully home page") {// this ingresar a los its el que sea diferente de ese lo ejecuta
            cy.login(loginJson.admin.username,loginJson.admin.password)
        }
            
    })   
    
    it('Login successfully', () => {
       
        
    })
})
    