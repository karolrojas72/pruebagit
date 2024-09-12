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
    
    it('Add products to the cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //backpack
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() //bikeLight
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() //mameluco
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() //Tshirt red
        cy.get('[data-test="shopping-cart-link"]').click()//open shopping cart
        cy.get('[data-test="title"]').contains("Your Cart")
        
    })
})
    