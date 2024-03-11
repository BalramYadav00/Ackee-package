export declare const queryCreateToken = "\nmutation createToken($input: CreateTokenInput!) {\n    createToken(input: $input) {\n        payload {\n            id\n        }\n    }\n}";
export declare const queryCreatePermanentToken = "\nmutation createPermanentToken($input: CreatePermanentTokenInput!) {\n    createPermanentToken(input: $input) {\n        payload {\n            id\n        }\n    }\n}\n";
export declare const queryCreateDomain = "\nmutation createDomain($input: CreateDomainInput!) {\n    createDomain(input: $input) {\n        payload {\n            id\n            title\n        }\n    }\n}\n";
export declare const queryDeleteDomain = "\nmutation deleteDomain($id: ID!) {\n    deleteDomain(id: $id) {\n        success\n    }\n}\n";
export declare const queryGetDomain = "\nquery getDomains($id: ID!) {\n    domain(id: $id) {\n        id\n        title\n      \tfacts {\n          averageViews { count }\n          averageDuration { count }\n          viewsToday\n          viewsMonth\n          viewsYear\n        \t\n      \t}\n       \n    }\n}\n";
export declare const queryActiveUsers = "\nquery getDomains($id: ID!) {\n    domain(id: $id) {\n        id\n        title\n      \tfacts {\n\t\t  activeVisitors       \t\n      \t}\n       \n    }\n}\n";