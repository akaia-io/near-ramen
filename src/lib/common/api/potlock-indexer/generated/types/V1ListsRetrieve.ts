import type { PaginatedListsResponse } from "./PaginatedListsResponse.ts";

export type V1ListsRetrieveQueryParams = {
	/**
	 * @description Filter lists by account
	 * @type string | undefined
	 */
	account?: string;
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
 * @description Returns a paginated list of lists
 */
export type V1ListsRetrieve200 = PaginatedListsResponse;

/**
 * @description Account not found
 */
export type V1ListsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1ListsRetrieve500 = any;

export type V1ListsRetrieveQueryResponse = V1ListsRetrieve200;

export type V1ListsRetrieveQuery = {
	Response: V1ListsRetrieve200;
	QueryParams: V1ListsRetrieveQueryParams;
	Errors: V1ListsRetrieve404 | V1ListsRetrieve500;
};
