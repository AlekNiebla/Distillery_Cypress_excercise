export const API_URL={
    GOOGLE_API_MAPS_URL:'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true',
    SCORPION_OAUTH_URL:"https://staging.scorpion.co/platform/identity/v1/api/oauth2/isauthorized",
    LOGIN_POST_URL:'https://staging.scorpion.co/platform/identity/v1/api/oauth2/login2'
}

export const GUID_REGEX = new RegExp('^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$')

export const GET_ACCOUNTS_QUERY= `
    query accounts {
        accounts(first: 10) {
        items {
            accountId
            accountName
            __typename
        }
        __typename
        }
    }`