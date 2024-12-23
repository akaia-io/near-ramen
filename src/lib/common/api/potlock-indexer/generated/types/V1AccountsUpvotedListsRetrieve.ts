import type { PaginatedListsResponse } from "./PaginatedListsResponse.ts";

export type V1AccountsUpvotedListsRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsUpvotedListsRetrieveQueryParams = {
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
 * @description Returns a paginated list of user upvoted lists
 */
export type V1AccountsUpvotedListsRetrieve200 = PaginatedListsResponse;

/**
 * @description Account not found
 */
export type V1AccountsUpvotedListsRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsUpvotedListsRetrieve500 = any;

export type V1AccountsUpvotedListsRetrieveQueryResponse = V1AccountsUpvotedListsRetrieve200;

export type V1AccountsUpvotedListsRetrieveQuery = {
	Response: V1AccountsUpvotedListsRetrieve200;
	PathParams: V1AccountsUpvotedListsRetrievePathParams;
	QueryParams: V1AccountsUpvotedListsRetrieveQueryParams;
	Errors: V1AccountsUpvotedListsRetrieve404 | V1AccountsUpvotedListsRetrieve500;
};
