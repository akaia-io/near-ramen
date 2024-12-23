import type { ListRegistration } from "./ListRegistration.ts";

export type V1ListsRandomRegistrationRetrievePathParams = {
	/**
	 * @type integer
	 */
	list_id: number;
};

export type V1ListsRandomRegistrationRetrieveQueryParams = {
	/**
	 * @description Filter registrations by status
	 * @type string | undefined
	 */
	status?: string;
};

/**
 * @description Returns a random registration for the list
 */
export type V1ListsRandomRegistrationRetrieve200 = ListRegistration;

/**
 * @description List not found
 */
export type V1ListsRandomRegistrationRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1ListsRandomRegistrationRetrieve500 = any;

export type V1ListsRandomRegistrationRetrieveQueryResponse = V1ListsRandomRegistrationRetrieve200;

export type V1ListsRandomRegistrationRetrieveQuery = {
	Response: V1ListsRandomRegistrationRetrieve200;
	PathParams: V1ListsRandomRegistrationRetrievePathParams;
	QueryParams: V1ListsRandomRegistrationRetrieveQueryParams;
	Errors: V1ListsRandomRegistrationRetrieve404 | V1ListsRandomRegistrationRetrieve500;
};
