import type { PaginatedRoundsResponse } from "./PaginatedRoundsResponse.ts";

export type V1AccountsRoundsRetrievePathParams = {
	/**
	 * @description get rounds by this account
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsRoundsRetrieveQueryParams = {
	/**
	 * @description Filter projects by chain
	 * @type string | undefined
	 */
	chain?: string;
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
	 * @description Sort by field, e.g., deployed_at, vault_total_deposits
	 * @type string | undefined
	 */
	sort?: string;
};

/**
 * @description Returns a paginated list of rounds
 */
export type V1AccountsRoundsRetrieve200 = PaginatedRoundsResponse;

/**
 * @description Internal server error
 */
export type V1AccountsRoundsRetrieve500 = any;

export type V1AccountsRoundsRetrieveQueryResponse = V1AccountsRoundsRetrieve200;

export type V1AccountsRoundsRetrieveQuery = {
	Response: V1AccountsRoundsRetrieve200;
	PathParams: V1AccountsRoundsRetrievePathParams;
	QueryParams: V1AccountsRoundsRetrieveQueryParams;
	Errors: V1AccountsRoundsRetrieve500;
};
