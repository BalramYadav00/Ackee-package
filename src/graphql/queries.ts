export const queryCreateToken = `
mutation createToken($input: CreateTokenInput!) {
    createToken(input: $input) {
        payload {
            id
        }
    }
}`;

export const queryCreatePermanentToken = `
mutation createPermanentToken($input: CreatePermanentTokenInput!) {
    createPermanentToken(input: $input) {
        payload {
            id
        }
    }
}
`;

export const queryCreateDomain = `
mutation createDomain($input: CreateDomainInput!) {
    createDomain(input: $input) {
        payload {
            id
            title
        }
    }
}
`;

export const queryDeleteDomain = `
mutation deleteDomain($id: ID!) {
    deleteDomain(id: $id) {
        success
    }
}
`;

export const queryGetDomain = `
query getDomains($id: ID!) {
    domain(id: $id) {
        id
        title
      	facts {
          averageViews { count }
          averageDuration { count }
          viewsToday
          viewsMonth
          viewsYear
        	
      	}
       
    }
}
`;

export const queryActiveUsers = `
query getDomains($id: ID!) {
    domain(id: $id) {
        id
        title
      	facts {
		  activeVisitors       	
      	}
       
    }
}
`

