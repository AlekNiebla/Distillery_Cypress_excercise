import {
    USERNAME_INPUT,
    PASSWORD_INPUT,
    SIGN_IN_BUTTON,
    ERROR_POPUP_MSG,
    ERROR_POPUP_EXCLAMATION
} from '../support/selectors'

import {API_URL} from '../support/constants'

describe('Distillery excercise: Invalid SignIn', () => {
    before( () => {
        cy.intercept('GET',API_URL.GOOGLE_API_MAPS_URL).as('googleApi')
        cy.intercept('POST',API_URL.SCORPION_OAUTH_URL).as('oauth')
        cy.intercept('POST',API_URL.LOGIN_POST_URL).as('login')

		cy.visit('/')

        cy.wait('@googleApi')
        cy.wait('@oauth')
	})

    it('Verify invalid sing in shows error message', () => {
        cy.get(USERNAME_INPUT)
            .should('be.visible')
            .and('be.enabled')
            .type('invalid_username@mail.com')

        cy.get(PASSWORD_INPUT)
            .should('be.visible')
            .and('be.enabled')
            .type('n0T 4 P4ssw0rd')

        cy.get(SIGN_IN_BUTTON)
            .should('be.visible')
            .and('be.enabled')
            .click()

        cy.wait('@login').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(400)
            expect(xhr.response.body.status.messageId).to.eq("user-not-authorized")
        })

        cy.get(ERROR_POPUP_EXCLAMATION)
            .should('be.visible')
            .and('contain.text', 'Oops!')
        cy.get(ERROR_POPUP_MSG)
            .should('be.visible')
            .and('contain.text', 'Invalid Username or Password.') 
    })
})