import type { Round } from "./Round.ts";

export type V1RoundRetrievePathParams = {
	/**
	 * @type string
	 */
	round_id: string;
};

/**
 * @description Returns rounds details
 */
export type V1RoundRetrieve200 = Round;

/**
 * @description Round not found
 */
export type V1RoundRetrieve404 = any;

export type V1RoundRetrieveQueryResponse = V1RoundRetrieve200;

export type V1RoundRetrieveQuery = {
	Response: V1RoundRetrieve200;
	PathParams: V1RoundRetrievePathParams;
	Errors: V1RoundRetrieve404;
};
