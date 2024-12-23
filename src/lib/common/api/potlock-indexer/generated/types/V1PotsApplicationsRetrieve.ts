import type { PaginatedPotApplicationsResponse } from "./PaginatedPotApplicationsResponse.ts";

export type V1PotsApplicationsRetrievePathParams = {
	/**
	 * @type string
	 */
	pot_id: string;
};

export type V1PotsApplicationsRetrieveQueryParams = {
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
	 * @description Search by applicant name or account ID
	 * @type string | undefined
	 */
	search?: string;
	/**
	 * @description Filter by application status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns applications for the pot
 */
export type V1PotsApplicationsRetrieve200 = PaginatedPotApplicationsResponse;

/**
 * @description Pot not found
 */
export type V1PotsApplicationsRetrieve404 = any;

export type V1PotsApplicationsRetrieveQueryResponse = V1PotsApplicationsRetrieve200;

export type V1PotsApplicationsRetrieveQuery = {
	Response: V1PotsApplicationsRetrieve200;
	PathParams: V1PotsApplicationsRetrievePathParams;
	QueryParams: V1PotsApplicationsRetrieveQueryParams;
	Errors: V1PotsApplicationsRetrieve404;
};
