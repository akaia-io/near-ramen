import type { PaginatedPotApplicationsResponse } from "./PaginatedPotApplicationsResponse.ts";

export type V1AccountsPotApplicationsRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsPotApplicationsRetrieveQueryParams = {
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
	 * @description Filter pot applications by status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns paginated pot applications for the account
 */
export type V1AccountsPotApplicationsRetrieve200 = PaginatedPotApplicationsResponse;

/**
 * @description Invalid status value
 */
export type V1AccountsPotApplicationsRetrieve400 = any;

/**
 * @description Account not found
 */
export type V1AccountsPotApplicationsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsPotApplicationsRetrieve500 = any;

export type V1AccountsPotApplicationsRetrieveQueryResponse = V1AccountsPotApplicationsRetrieve200;

export type V1AccountsPotApplicationsRetrieveQuery = {
	Response: V1AccountsPotApplicationsRetrieve200;
	PathParams: V1AccountsPotApplicationsRetrievePathParams;
	QueryParams: V1AccountsPotApplicationsRetrieveQueryParams;
	Errors:
		| V1AccountsPotApplicationsRetrieve400
		| V1AccountsPotApplicationsRetrieve404
		| V1AccountsPotApplicationsRetrieve500;
};
