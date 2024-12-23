import type { PaginatedDonationsResponse } from "./PaginatedDonationsResponse.ts";

export type V1PotsDonationsRetrievePathParams = {
	/**
	 * @type string
	 */
	pot_id: string;
};

export type V1PotsDonationsRetrieveQueryParams = {
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
 * @description Returns donations for the pot
 */
export type V1PotsDonationsRetrieve200 = PaginatedDonationsResponse;

/**
 * @description Pot not found
 */
export type V1PotsDonationsRetrieve404 = any;

export type V1PotsDonationsRetrieveQueryResponse = V1PotsDonationsRetrieve200;

export type V1PotsDonationsRetrieveQuery = {
	Response: V1PotsDonationsRetrieve200;
	PathParams: V1PotsDonationsRetrievePathParams;
	QueryParams: V1PotsDonationsRetrieveQueryParams;
	Errors: V1PotsDonationsRetrieve404;
};
