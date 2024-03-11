import axios from "axios";

import { queryActiveUsers, queryCreateDomain, queryCreatePermanentToken, queryCreateToken, queryDeleteDomain, queryGetDomain } from "../graphql/queries";

const instance = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer 2a2a4bcb-46cb-49be-88c4-b646024bfd38`
	},
	baseURL: "http://localhost:8000/api"
});
// instance.defaults.baseURL = "http://localhost:8000/api"

const graphqlEndpoint: string | undefined = "http://localhost:8000/api";

if (!graphqlEndpoint) {
	throw new Error('GraphQL endpoint not specified in environment variables');
}

export const createToken = async (input: object) => {

	try {
		const response = await instance.post('',
			{ query: queryCreateToken, variables: input }
		);

		const domain = response.data.data.createToken;
		return domain;
	} catch (error) {
		console.log(error);
		return "Something went wrong" + error;
	}

}

export const createPermanentToken = async (input: object) => {

	try {
		const response = await instance.post('',
			{ query: queryCreatePermanentToken, variables: input }
		);

		const domain = response.data.data.createPermanentToken;
		return domain;
	} catch (error) {
		console.log(error);
		return "Something went wrong" + error;
	}

}

// export const activeUsers = async instance.post('', 

// )

export const createDomain = async (input: object) => {

	try {

		const response = await instance.post('',
			{ query: queryCreateDomain, variables: input }
		);

		const domain = response.data.data.createDomain;
		return domain;

	} catch (error) {
		console.log(error);
		return "Something went wrong";
	}

}

export const deleteDomain = async (id: object) => {
	try {
		const response = await instance.post('',
			{ query: queryDeleteDomain, variables: id }
		);
		const domain = response.data.data.deleteDomain;
		return domain;
	} catch (error) {
		console.log(error);
		return "Something went wrong";
	}

}

export const getDomain = async (id: object) => {
	try {
		const response = await instance.post('',
			{ query: queryGetDomain, variables: id }
		);

		const domain = response.data.data.domain;
		return domain;

	} catch (error) {
		console.log(error);
		throw error;
		return "Something went wrong";
	}

}

export const activeUsers = async (id: object) => {
	try {
		const response = await instance.post('',
			{query: queryActiveUsers, variables: id}
		);
		const domain = response.data.data.domain;
		return domain
	}catch (error) {
	console.log(error);
	return "Somehting went wrong"
}
}