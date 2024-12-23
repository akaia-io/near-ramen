import type { PaginatedRoundApplicationsResponse } from "./PaginatedRoundApplicationsResponse.ts";

export type V1RoundsApplicationsRetrievePathParams = {
	/**
	 * @type string
	 */
	round_id: string;
};

export type V1RoundsApplicationsRetrieveQueryParams = {
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
 * @description Returns applications for the round
 */
export type V1RoundsApplicationsRetrieve200 = PaginatedRoundApplicationsResponse;

/**
 * @description Round not found
 */
export type V1RoundsApplicationsRetrieve404 = any;

export type V1RoundsApplicationsRetrieveQueryResponse = V1RoundsApplicationsRetrieve200;

export type V1RoundsApplicationsRetrieveQuery = {
	Response: V1RoundsApplicationsRetrieve200;
	PathParams: V1RoundsApplicationsRetrievePathParams;
	QueryParams: V1RoundsApplicationsRetrieveQueryParams;
	Errors: V1RoundsApplicationsRetrieve404;
};
