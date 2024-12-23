import type { PaginatedAccountsResponse } from "./PaginatedAccountsResponse.ts";

export type V1AccountsRetrieveQueryParams = {
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
 * @description Returns a paginated list of accounts
 */
export type V1AccountsRetrieve200 = PaginatedAccountsResponse;

/**
 * @description Internal server error
 */
export type V1AccountsRetrieve500 = any;

export type V1AccountsRetrieveQueryResponse = V1AccountsRetrieve200;

export type V1AccountsRetrieveQuery = {
	Response: V1AccountsRetrieve200;
	QueryParams: V1AccountsRetrieveQueryParams;
	Errors: V1AccountsRetrieve500;
};
