/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage.js"

const lp = new LoginPage()
describe("Test Suite", function () {

    it("User should be able to launch an url", function () {
        cy.intercept({
            method: 'GET',
            url: 'https://ekr.zdassets.com/compose/web_widget/healthrecoverysolutions.zendesk.com'
        },
            {
                statusCode: 200,
                headers: { 'content-type': 'application/json; charset=utf-8' }
            }).as('retrieve')
        lp.visit()
        cy.wait('@retrieve')
            .its('response.statusCode')
            .should('equal', 200)
    })

})