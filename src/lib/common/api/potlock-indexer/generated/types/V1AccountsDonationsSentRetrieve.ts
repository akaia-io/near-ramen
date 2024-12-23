import type { PaginatedDonationsResponse } from "./PaginatedDonationsResponse.ts";

export type V1AccountsDonationsSentRetrievePathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

export type V1AccountsDonationsSentRetrieveQueryParams = {
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
 * @description Returns paginated donations sent by the account
 */
export type V1AccountsDonationsSentRetrieve200 = PaginatedDonationsResponse;

/**
 * @description Account not found
 */
export type V1AccountsDonationsSentRetrieve404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsDonationsSentRetrieve500 = any;

export type V1AccountsDonationsSentRetrieveQueryResponse = V1AccountsDonationsSentRetrieve200;

export type V1AccountsDonationsSentRetrieveQuery = {
	Response: V1AccountsDonationsSentRetrieve200;
	PathParams: V1AccountsDonationsSentRetrievePathParams;
	QueryParams: V1AccountsDonationsSentRetrieveQueryParams;
	Errors: V1AccountsDonationsSentRetrieve404 | V1AccountsDonationsSentRetrieve500;
};
