import type { PaginatedListRegistrationsResponse } from "./PaginatedListRegistrationsResponse.ts";

export type V1ListsRegistrationsRetrievePathParams = {
	/**
	 * @type integer
	 */
	list_id: number;
};

export type V1ListsRegistrationsRetrieveQueryParams = {
	/**
	 * @description Filter registrations by category
	 * @type string | undefined
	 */
	category?: string;
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
	 * @description Search registrants by name or account ID
	 * @type string | undefined
	 */
	search?: string;
	/**
	 * @description Filter registrations by status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns registrations for the list
 */
export type V1ListsRegistrationsRetrieve200 = PaginatedListRegistrationsResponse;

/**
 * @description List not found
 */
export type V1ListsRegistrationsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1ListsRegistrationsRetrieve500 = any;

export type V1ListsRegistrationsRetrieveQueryResponse = V1ListsRegistrationsRetrieve200;

export type V1ListsRegistrationsRetrieveQuery = {
	Response: V1ListsRegistrationsRetrieve200;
	PathParams: V1ListsRegistrationsRetrievePathParams;
	QueryParams: V1ListsRegistrationsRetrieveQueryParams;
	Errors: V1ListsRegistrationsRetrieve404 | V1ListsRegistrationsRetrieve500;
};
