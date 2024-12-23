import type { PaginatedAccountsResponse } from "./PaginatedAccountsResponse.ts";

export type V1PotsSponsorsRetrievePathParams = {
	/**
	 * @type string
	 */
	pot_id: string;
};

export type V1PotsSponsorsRetrieveQueryParams = {
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
 * @description Returns sponsors for the pot
 */
export type V1PotsSponsorsRetrieve200 = PaginatedAccountsResponse;

/**
 * @description Pot not found
 */
export type V1PotsSponsorsRetrieve404 = any;

export type V1PotsSponsorsRetrieveQueryResponse = V1PotsSponsorsRetrieve200;

export type V1PotsSponsorsRetrieveQuery = {
	Response: V1PotsSponsorsRetrieve200;
	PathParams: V1PotsSponsorsRetrievePathParams;
	QueryParams: V1PotsSponsorsRetrieveQueryParams;
	Errors: V1PotsSponsorsRetrieve404;
};
