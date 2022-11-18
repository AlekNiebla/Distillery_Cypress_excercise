import {
    USERNAME_INPUT,
    PASSWORD_INPUT,
    SIGN_IN_BUTTON
} from '../support/selectors'

describe('Distillery excercise', () => {
    before( () => {
		cy.visit('/', {timeout: 10000})
	})

    it('Verify incorrect credentials shows alert', () => {
        cy.get(USERNAME_INPUT)
            .within(()=>{
                cy.get('input')
                    .should('be.visible')
                    .and('be.enabled')
                    .type('invalid_username@mail.com')
            })
        cy.get(PASSWORD_INPUT)
            .within(()=>{
                cy.get('input')
                    .should('be.visible')
                    .and('be.enabled')
                    .type('n0T 4 P4ssw0rd')
            })

        cy.get(SIGN_IN_BUTTON)
            .within(() => {
                cy.get('button')
                    .should('be.visible')
                    .and('be.enabled')
                    .click()
            })
    })
})