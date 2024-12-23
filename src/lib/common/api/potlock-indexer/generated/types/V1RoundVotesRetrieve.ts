import type { PaginatedVotesResponse } from "./PaginatedVotesResponse.ts";

export type V1RoundVotesRetrievePathParams = {
	/**
	 * @type string
	 */
	project_id: string;
	/**
	 * @type string
	 */
	round_id: string;
};

export type V1RoundVotesRetrieveQueryParams = {
	/**
	 * @description Page number for pagination
	 * @type integer | undefined
	 */
	page?: number;
	/**
	 * @description Number of results per page
	 * @type integer | undefined
	 */
	page_size?: number;
};

/**
 * @description Returns votes for a project in the round
 */
export type V1RoundVotesRetrieve200 = PaginatedVotesResponse;

/**
 * @description Round or project not found
 */
export type V1RoundVotesRetrieve404 = any;

export type V1RoundVotesRetrieveQueryResponse = V1RoundVotesRetrieve200;

export type V1RoundVotesRetrieveQuery = {
	Response: V1RoundVotesRetrieve200;
	PathParams: V1RoundVotesRetrievePathParams;
	QueryParams: V1RoundVotesRetrieveQueryParams;
	Errors: V1RoundVotesRetrieve404;
};
