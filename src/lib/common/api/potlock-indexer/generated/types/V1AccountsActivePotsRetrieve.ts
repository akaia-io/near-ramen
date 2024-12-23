import type { PaginatedPotsResponse } from "./PaginatedPotsResponse.ts";

export type V1AccountsActivePotsRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsActivePotsRetrieveQueryParams = {
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
	/**
	 * @description Filter by pot status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns paginated active pots for the account
 */
export type V1AccountsActivePotsRetrieve200 = PaginatedPotsResponse;

/**
 * @description Account not found
 */
export type V1AccountsActivePotsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsActivePotsRetrieve500 = any;

export type V1AccountsActivePotsRetrieveQueryResponse = V1AccountsActivePotsRetrieve200;

export type V1AccountsActivePotsRetrieveQuery = {
	Response: V1AccountsActivePotsRetrieve200;
	PathParams: V1AccountsActivePotsRetrievePathParams;
	QueryParams: V1AccountsActivePotsRetrieveQueryParams;
	Errors: V1AccountsActivePotsRetrieve404 | V1AccountsActivePotsRetrieve500;
};
