import {
    GET_ACCOUNTS_QUERY,
    GUID_REGEX
} from '../support/constants'

describe('BackEnd test: validate Graphql request', () => {

    const API_URL='https://qa.scorpion.co/accounts/crm/graphql'
    const API_KEY='api-key 43FF78A0-24BE-4ECF-AE26-D43CB9EA4038'

    it('Validate accounts query has expected attributes',() => {
        cy.request({
            method: 'POST',
            url: API_URL,
            headers: { Authorization:API_KEY },
            body: { query: GET_ACCOUNTS_QUERY}
        })
        .then(res => {
            cy.wrap(res.body.data.accounts.items).as('accts_found')
            expect('@accts_found').to.have.lengthOf.above(0)

            cy.wrap(res.body.data.accounts.items[0]).as('first_result')
            cy.get('@first_result')
                .then( acct => {
                    expect(acct).to.contain.keys(["accountId", "accountName", "__typename"])
                    expect(acct.accountId).to.match(GUID_REGEX, 'accountId is of type GUID')
                    assert.typeOf(acct.accountName,'string', 'AccountName is of type string')
                })
        })
    })
})

