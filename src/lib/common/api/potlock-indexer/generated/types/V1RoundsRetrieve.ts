import type { PaginatedRoundsResponse } from "./PaginatedRoundsResponse.ts";

export type V1RoundsRetrievePathParams = {
	/**
	 * @description get rounds by this account
	 * @type string
	 */
	account_id: string;
};

export type V1RoundsRetrieveQueryParams = {
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
export type V1RoundsRetrieve200 = PaginatedRoundsResponse;

/**
 * @description Internal server error
 */
export type V1RoundsRetrieve500 = any;

export type V1RoundsRetrieveQueryResponse = V1RoundsRetrieve200;

export type V1RoundsRetrieveQuery = {
	Response: V1RoundsRetrieve200;
	PathParams: V1RoundsRetrievePathParams;
	QueryParams: V1RoundsRetrieveQueryParams;
	Errors: V1RoundsRetrieve500;
};
