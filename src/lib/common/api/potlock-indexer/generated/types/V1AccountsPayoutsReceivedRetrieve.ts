import type { PaginatedPotPayoutsResponse } from "./PaginatedPotPayoutsResponse.ts";

export type V1AccountsPayoutsReceivedRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsPayoutsReceivedRetrieveQueryParams = {
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
 * @description Returns paginated payouts received by the account
 */
export type V1AccountsPayoutsReceivedRetrieve200 = PaginatedPotPayoutsResponse;

/**
 * @description Account not found
 */
export type V1AccountsPayoutsReceivedRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsPayoutsReceivedRetrieve500 = any;

export type V1AccountsPayoutsReceivedRetrieveQueryResponse = V1AccountsPayoutsReceivedRetrieve200;

export type V1AccountsPayoutsReceivedRetrieveQuery = {
	Response: V1AccountsPayoutsReceivedRetrieve200;
	PathParams: V1AccountsPayoutsReceivedRetrievePathParams;
	QueryParams: V1AccountsPayoutsReceivedRetrieveQueryParams;
	Errors: V1AccountsPayoutsReceivedRetrieve404 | V1AccountsPayoutsReceivedRetrieve500;
};
