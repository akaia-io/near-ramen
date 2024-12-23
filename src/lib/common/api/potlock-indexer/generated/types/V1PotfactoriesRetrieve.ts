import type { PaginatedPotFactoriesResponse } from "./PaginatedPotFactoriesResponse.ts";

export type V1PotfactoriesRetrieveQueryParams = {
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
 * @description Returns a paginated list of pot factories
 */
export type V1PotfactoriesRetrieve200 = PaginatedPotFactoriesResponse;

export type V1PotfactoriesRetrieveQueryResponse = V1PotfactoriesRetrieve200;

export type V1PotfactoriesRetrieveQuery = {
	Response: V1PotfactoriesRetrieve200;
	QueryParams: V1PotfactoriesRetrieveQueryParams;
	Errors: any;
};
