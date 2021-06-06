/// <reference types="cypress" />
class LoginPage {
    visit() {
        cy.visit(Cypress.env('baseUrl'))
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
        return cy.get('.cg-notify-close > [aria-hidden="true"]')
    }

    notifyClose() {
        return cy.get('.cg-notify-close')
    }

    blankNotify()
        {
            return cy.contains("Please fill out this field.").should('have.text', 'Please fill out this field.')
        }

    notify()
        {
            return cy.get('.cg-notify-message')
        }
}
export default LoginPage
