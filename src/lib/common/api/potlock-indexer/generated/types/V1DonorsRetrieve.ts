import type { PaginatedAccountsResponse } from "./PaginatedAccountsResponse.ts";

export type V1DonorsRetrieveQueryParams = {
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
	 * @description Sort by field, e.g., most_donated_usd
	 * @type string | undefined
	 */
	sort?: string;
};

/**
 * @description Returns a paginated list of donor accounts
 */
export type V1DonorsRetrieve200 = PaginatedAccountsResponse;

/**
 * @description Internal server error
 */
export type V1DonorsRetrieve500 = any;

export type V1DonorsRetrieveQueryResponse = V1DonorsRetrieve200;

export type V1DonorsRetrieveQuery = {
	Response: V1DonorsRetrieve200;
	QueryParams: V1DonorsRetrieveQueryParams;
	Errors: V1DonorsRetrieve500;
};
