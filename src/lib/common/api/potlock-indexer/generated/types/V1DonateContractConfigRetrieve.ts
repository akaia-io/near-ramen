import type { DonationContractConfig } from "./DonationContractConfig.ts";

export type V1DonateContractConfigRetrieveQueryParams = {
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
 * @description Returns config for donate.potlock.testnet
 */
export type V1DonateContractConfigRetrieve200 = DonationContractConfig;

/**
 * @description Internal server error
 */
export type V1DonateContractConfigRetrieve500 = any;

export type V1DonateContractConfigRetrieveQueryResponse = V1DonateContractConfigRetrieve200;

export type V1DonateContractConfigRetrieveQuery = {
	Response: V1DonateContractConfigRetrieve200;
	QueryParams: V1DonateContractConfigRetrieveQueryParams;
	Errors: V1DonateContractConfigRetrieve500;
};
