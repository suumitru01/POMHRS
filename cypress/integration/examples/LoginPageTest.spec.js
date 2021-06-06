/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage.js"

const lp = new LoginPage()
describe("Test Suite", function () {

    it("User should be able to launch an url", function () {
        lp.visit()
        cy.title().should('include', 'HRS | ClinicianConnect')
        cy.url().should('include', 'login')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it("Verify that Sign In button should be disable If UN and PW is not entered", function () {
        lp.fillEmail(' ')
        lp.fillPassword(' ')
        lp.submitDisable()
    })

    it("Verify that Sign In button should be clickable If UN and PW is entered", function () {
        lp.fillEmail().clear().type('sumittelmore')
        lp.fillPassword().clear().type('admin')
        lp.submitClickable().click()
        cy.wait(3000)
        lp.notify().each((note) => {
           const state= cy.log(note.text());
            state.should('contain', 'Username and/or password invalid')
            .should('have.css', 'background-color', 'rgb(251, 67, 74)')
        })
        lp.notifyClose().click()
    })

    it("Warning message should be disaplyed if only UN is entered and clicked on SignIn", function () {
        lp.fillEmail().clear().type('sumittelmore')
        lp.fillPassword().clear()
        cy.wait(1000)
        lp.submitClickable().click()
        cy.contains("Please fill out this field.").should('have.text', 'Please fill out this field.')
    })

    it("Navigate to Forgot Password when user click on forgot password", function () {
        lp.forgotPassword().click()
        cy.get('h3.text-center.ng-binding').should('contain', 'Forgot Password?')
    })

    it("Click on Back button and navigate to login page", function () {
        lp.resetPwdBack().click()
        cy.url().should('include', 'login')
    })

    it("Click on Reset Submit button without entering UN", function () {
        lp.forgotPassword().click()
        lp.resetPwdSubmit().click()
        lp.notify().each((note) => {
            const state= cy.log(note.text());
             state.should('contain', 'Failed to submit reset password request.')
             .should('have.css', 'background-color', 'rgb(251, 67, 74)')
         })
        cy.wait(3000)
        lp.notifyClose().click()
    })

    it("Enter UN to reset and click on submit", function () {
        lp.resetPwdUsername().clear().type('sumit')
        lp.resetPwdSubmit().click()
        lp.notify().each((note) => {
            const state= cy.log(note.text());
             state.should('contain', 'Reset password request successfully submitted.')
             .should('have.css', 'background-color', 'rgb(70, 190, 138)')
         })
        cy.wait(3000)
        lp.notifyClose().click()
        cy.url().should('include', 'login')
    })
})


