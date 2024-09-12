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
    
    
    it('Sort products by name', () => {
    

    cy.get('[data-test="product-sort-container"]').then(select => {
            if (select.val() !== 'az') {
            cy.get('[data-test="product-sort-container"]').select('az')// Verify products are sorted by name A to Z
            }
            
            else if (select.val() !== 'za') {
            
            cy.get('[data-test="product-sort-container"]').select('za')// Verify products are sorted by name Z to A
            }
        })   
            
    })
})