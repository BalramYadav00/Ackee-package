"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeUsers = exports.getDomain = exports.deleteDomain = exports.createDomain = exports.createPermanentToken = exports.createToken = void 0;
const axios_1 = __importDefault(require("axios"));
const queries_1 = require("../graphql/queries");
const instance = axios_1.default.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 2a2a4bcb-46cb-49be-88c4-b646024bfd38`
    },
    baseURL: "http://localhost:8000/api"
});
// instance.defaults.baseURL = "http://localhost:8000/api"
const graphqlEndpoint = "http://localhost:8000/api";
if (!graphqlEndpoint) {
    throw new Error('GraphQL endpoint not specified in environment variables');
}
const createToken = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryCreateToken, variables: input });
        const domain = response.data.data.createToken;
        return domain;
    }
    catch (error) {
        console.log(error);
        return "Something went wrong" + error;
    }
});
exports.createToken = createToken;
const createPermanentToken = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryCreatePermanentToken, variables: input });
        const domain = response.data.data.createPermanentToken;
        return domain;
    }
    catch (error) {
        console.log(error);
        return "Something went wrong" + error;
    }
});
exports.createPermanentToken = createPermanentToken;
// export const activeUsers = async instance.post('', 
// )
const createDomain = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryCreateDomain, variables: input });
        const domain = response.data.data.createDomain;
        return domain;
    }
    catch (error) {
        console.log(error);
        return "Something went wrong";
    }
});
exports.createDomain = createDomain;
const deleteDomain = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryDeleteDomain, variables: id });
        const domain = response.data.data.deleteDomain;
        return domain;
    }
    catch (error) {
        console.log(error);
        return "Something went wrong";
    }
});
exports.deleteDomain = deleteDomain;
const getDomain = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryGetDomain, variables: id });
        const domain = response.data.data.domain;
        return domain;
    }
    catch (error) {
        console.log(error);
        throw error;
        return "Something went wrong";
    }
});
exports.getDomain = getDomain;
const activeUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield instance.post('', { query: queries_1.queryActiveUsers, variables: id });
        const domain = response.data.data.domain;
        return domain;
    }
    catch (error) {
        console.log(error);
        return "Somehting went wrong";
    }
});
exports.activeUsers = activeUsers;
