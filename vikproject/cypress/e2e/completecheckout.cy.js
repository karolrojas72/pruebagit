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

    it('Complete checkout', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //backpack
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() //bikeLight
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() //mameluco
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() //Tshirt red
        cy.get('[data-test="shopping-cart-link"]').click()//open shopping cart
        
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="title"]').contains("Checkout: Your Information")
        cy.get('[data-test="firstName"]').type("teamVIK")
        cy.get('[data-test="lastName"]').type("UAutonoma_Manizales")
        cy.get('[data-test="postalCode"]').type("170001")
        cy.get('[data-test="continue"]').click()
        cy.get('.shopping_cart_badge').should('contain', '4')
       cy.get('[data-test="finish"]').click()
       cy.get('.complete-header').should('contain', 'Thank you for your order!')
        
    })
 
     
    
})
