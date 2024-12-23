import type { PaginatedProjectsResponse } from "./PaginatedProjectsResponse.ts";

export type V1ProjectsRetrieve2PathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1ProjectsRetrieve2QueryParams = {
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
 * @description Returns a paginated list of a user\'s owned projects
 */
export type V1ProjectsRetrieve2200 = PaginatedProjectsResponse;

/**
 * @description Invalid status value
 */
export type V1ProjectsRetrieve2400 = any;

/**
 * @description owner not found
 */
export type V1ProjectsRetrieve2404 = any;

/**
 * @description Internal server error
 */
export type V1ProjectsRetrieve2500 = any;

export type V1ProjectsRetrieve2QueryResponse = V1ProjectsRetrieve2200;

export type V1ProjectsRetrieve2Query = {
	Response: V1ProjectsRetrieve2200;
	PathParams: V1ProjectsRetrieve2PathParams;
	QueryParams: V1ProjectsRetrieve2QueryParams;
	Errors: V1ProjectsRetrieve2400 | V1ProjectsRetrieve2404 | V1ProjectsRetrieve2500;
};
