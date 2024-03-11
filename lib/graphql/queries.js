"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryActiveUsers = exports.queryGetDomain = exports.queryDeleteDomain = exports.queryCreateDomain = exports.queryCreatePermanentToken = exports.queryCreateToken = void 0;
exports.queryCreateToken = `
mutation createToken($input: CreateTokenInput!) {
    createToken(input: $input) {
        payload {
            id
        }
    }
}`;
exports.queryCreatePermanentToken = `
mutation createPermanentToken($input: CreatePermanentTokenInput!) {
    createPermanentToken(input: $input) {
        payload {
            id
        }
    }
}
`;
exports.queryCreateDomain = `
mutation createDomain($input: CreateDomainInput!) {
    createDomain(input: $input) {
        payload {
            id
            title
        }
    }
}
`;
exports.queryDeleteDomain = `
mutation deleteDomain($id: ID!) {
    deleteDomain(id: $id) {
        success
    }
}
`;
exports.queryGetDomain = `
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
exports.queryActiveUsers = `
query getDomains($id: ID!) {
    domain(id: $id) {
        id
        title
      	facts {
		  activeVisitors       	
      	}
       
    }
}
`;
