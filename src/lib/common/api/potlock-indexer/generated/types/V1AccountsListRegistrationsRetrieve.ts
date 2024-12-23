import type { PaginatedListRegistrationsResponse } from "./PaginatedListRegistrationsResponse.ts";

export type V1AccountsListRegistrationsRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsListRegistrationsRetrieveQueryParams = {
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
 * @description Returns List registrations for the account provided
 */
export type V1AccountsListRegistrationsRetrieve200 = PaginatedListRegistrationsResponse;

/**
 * @description Account not found
 */
export type V1AccountsListRegistrationsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsListRegistrationsRetrieve500 = any;

export type V1AccountsListRegistrationsRetrieveQueryResponse =
	V1AccountsListRegistrationsRetrieve200;

export type V1AccountsListRegistrationsRetrieveQuery = {
	Response: V1AccountsListRegistrationsRetrieve200;
	PathParams: V1AccountsListRegistrationsRetrievePathParams;
	QueryParams: V1AccountsListRegistrationsRetrieveQueryParams;
	Errors: V1AccountsListRegistrationsRetrieve404 | V1AccountsListRegistrationsRetrieve500;
};
