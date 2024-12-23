import type { PaginatedProjectsResponse } from "./PaginatedProjectsResponse.ts";

export type V1ProjectsRetrieveQueryParams = {
	/**
	 * @description Filter projects by owner id
	 * @type string | undefined
	 */
	owner?: string;
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
	 * @description Filter projects by status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns a paginated list of projects
 */
export type V1ProjectsRetrieve200 = PaginatedProjectsResponse;

/**
 * @description Invalid status value
 */
export type V1ProjectsRetrieve400 = any;

/**
 * @description owner not found
 */
export type V1ProjectsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1ProjectsRetrieve500 = any;

export type V1ProjectsRetrieveQueryResponse = V1ProjectsRetrieve200;

export type V1ProjectsRetrieveQuery = {
	Response: V1ProjectsRetrieve200;
	QueryParams: V1ProjectsRetrieveQueryParams;
	Errors: V1ProjectsRetrieve400 | V1ProjectsRetrieve404 | V1ProjectsRetrieve500;
};
