import type { StatsResponse } from "./StatsResponse.ts";

/**
 * @description Returns statistics data
 */
export type V1StatsRetrieve200 = StatsResponse;

/**
 * @description Internal server error
 */
export type V1StatsRetrieve500 = any;

export type V1StatsRetrieveQueryResponse = V1StatsRetrieve200;

export type V1StatsRetrieveQuery = {
	Response: V1StatsRetrieve200;
	Errors: V1StatsRetrieve500;
};
