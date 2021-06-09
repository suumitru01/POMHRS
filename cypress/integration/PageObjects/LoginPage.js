/// <reference types="cypress" />
class LoginPage {

    getAPI1() {
        return cy.intercept({
            method: 'GET',
            url: 'https://ekr.zdassets.com/compose/web_widget/healthrecoverysolutions.zendesk.com'
        },
            {
                statusCode: 200,
                headers: { 'content-type': 'application/json; charset=utf-8' }
            }).as('retrieve1')
    }
    getAPI2() {
        return cy.intercept({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/tokens'
        },
            {
                statusCode: 422,
                headers: { 'content-type': 'application/json' }
            }).as('retrieve2')
    }
    getAPI3() {
        return cy.intercept({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/password-reset-tokens'
        },
            {
                statusCode: 422,
                headers: { 'content-type': 'application/json' }
            }).as('retrieve3')
    }
    getAPI4() {
        return cy.intercept({
            method: 'POST',
            url: 'https://gateway.healthrecoverysolutions.com/v1/password-reset-tokens'
        },
            {
                statusCode: 204,
                headers: { 'content-type': 'application/json' }
            }).as('retrieve4')
    }
    visit() {
        cy.visit(Cypress.env('baseUrl'),{timeout:10000})
    }

    fillEmail() {
        return cy.get("#loginEmail")

    }

    resetPwdUsername() {
        return cy.get("#resetPassword_username")
    }

    fillPassword() {
        return cy.get("#password")
    }

    showPassword() {
        return cy.get("i.fa.fa-eye")
    }

    forgotPassword() {
        return cy.get("a[title='Click here to reset your password']")
    }

    resetPwdSubmit() {
        return cy.get('#resetPasswordSaveButton')
    }

    resetPwdBack() {
        return cy.get('#resetPasswordBackButton')
    }

    submitDisable() {
        return cy.contains("Sign In").should('be.disabled')
    }

    submitClickable() {
        return cy.get('#loginSubmitButton').should('be.visible')
    }

    closeMsg() {
        return cy.get('[aria-hidden="true"]')
    }

    notifyClose() {
        return cy.get('.cg-notify-close')
    }

    blankNotify() {
        return cy.contains("Please fill out this field.").should('have.text', 'Please fill out this field.')
    }

    notify() {
        return cy.get('.cg-notify-message')
    }
}
export default LoginPage
