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
        
    it('Enter succesfully home page', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible')
        cy.get('.login_logo').contains("Swag Labs")
        
    })

    //login
    it('Login successfully', () => {
        
        
        
    })

    //logout
    it('Logout successfully', () => {
        
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')

        
    })

    //Sort products by name
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

    //Sort products by price
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
   
    //Add products to the cart
       
    it('Add products to the cart', () => {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //backpack
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() //bikeLight
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() //mameluco
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() //Tshirt red
        cy.get('[data-test="shopping-cart-link"]').click()//open shopping cart
        cy.get('[data-test="title"]').contains("Your Cart")
        
    })

    //Remove products from the cart
    it('Remove products to the cart', () => {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //backpack
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() //bikeLight
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() //mameluco
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() //Tshirt red
        cy.get('[data-test="shopping-cart-link"]').click()//open shopping cart
              
        cy.get('[data-test="remove-sauce-labs-onesie"]').click()//mameluco
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()//Tshirt red
        
    })

    //Complete checkout
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

       
 