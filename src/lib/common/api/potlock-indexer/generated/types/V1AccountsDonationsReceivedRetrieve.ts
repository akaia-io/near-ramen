import type { PaginatedDonationsResponse } from "./PaginatedDonationsResponse.ts";

export type V1AccountsDonationsReceivedRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsDonationsReceivedRetrieveQueryParams = {
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
 * @description Returns paginated donations received by the account
 */
export type V1AccountsDonationsReceivedRetrieve200 = PaginatedDonationsResponse;

/**
 * @description Account not found
 */
export type V1AccountsDonationsReceivedRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsDonationsReceivedRetrieve500 = any;

export type V1AccountsDonationsReceivedRetrieveQueryResponse =
	V1AccountsDonationsReceivedRetrieve200;

export type V1AccountsDonationsReceivedRetrieveQuery = {
	Response: V1AccountsDonationsReceivedRetrieve200;
	PathParams: V1AccountsDonationsReceivedRetrievePathParams;
	QueryParams: V1AccountsDonationsReceivedRetrieveQueryParams;
	Errors: V1AccountsDonationsReceivedRetrieve404 | V1AccountsDonationsReceivedRetrieve500;
};
