import type { PaginatedPotPayoutsResponse } from "./PaginatedPotPayoutsResponse.ts";

export type V1PotsPayoutsRetrievePathParams = {
	/**
	 * @type string
	 */
	pot_id: string;
};

export type V1PotsPayoutsRetrieveQueryParams = {
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
	 * @description Search by recipient name or account ID
	 * @type string | undefined
	 */
	search?: string;
};

/**
 * @description Returns payouts for the pot
 */
export type V1PotsPayoutsRetrieve200 = PaginatedPotPayoutsResponse;

/**
 * @description Pot not found
 */
export type V1PotsPayoutsRetrieve404 = any;

export type V1PotsPayoutsRetrieveQueryResponse = V1PotsPayoutsRetrieve200;

export type V1PotsPayoutsRetrieveQuery = {
	Response: V1PotsPayoutsRetrieve200;
	PathParams: V1PotsPayoutsRetrievePathParams;
	QueryParams: V1PotsPayoutsRetrieveQueryParams;
	Errors: V1PotsPayoutsRetrieve404;
};
