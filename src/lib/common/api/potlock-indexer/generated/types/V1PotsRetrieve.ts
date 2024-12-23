import type { PaginatedPotsResponse } from "./PaginatedPotsResponse.ts";

export type V1PotsRetrieveQueryParams = {
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
 * @description Returns a paginated list of pots
 */
export type V1PotsRetrieve200 = PaginatedPotsResponse;

export type V1PotsRetrieveQueryResponse = V1PotsRetrieve200;

export type V1PotsRetrieveQuery = {
	Response: V1PotsRetrieve200;
	QueryParams: V1PotsRetrieveQueryParams;
	Errors: any;
};
