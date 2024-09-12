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
    
    it('Sort products by price', () => {
        
        cy.get('[data-test="product-sort-container"]').then(select => {
             if (select.val() !== 'hilo') {
                cy.get('[data-test="product-sort-container"]').select('hilo')// Verify products are sorted by price high to low
             }
             
             else if (select.val() !== 'lohi') {
               
               cy.get('[data-test="product-sort-container"]').select('lohi')// Verify products are sorted by price low to high
            }
        })   
              
    })
})