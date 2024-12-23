import type { MpdaoVoter } from "./MpdaoVoter.ts";

export type V1MpdaoVoterInfoRetrieveQueryParams = {
	/**
	 * @description NEAR account ID of the voter
	 * @type string | undefined
	 */
	voter_id?: string;
};

/**
 * @description Returns voter details
 */
export type V1MpdaoVoterInfoRetrieve200 = MpdaoVoter;

/**
 * @description Voter not found
 */
export type V1MpdaoVoterInfoRetrieve404 = any;

/**
 * @description File read error
 */
export type V1MpdaoVoterInfoRetrieve500 = any;

export type V1MpdaoVoterInfoRetrieveQueryResponse = V1MpdaoVoterInfoRetrieve200;

export type V1MpdaoVoterInfoRetrieveQuery = {
	Response: V1MpdaoVoterInfoRetrieve200;
	QueryParams: V1MpdaoVoterInfoRetrieveQueryParams;
	Errors: V1MpdaoVoterInfoRetrieve404 | V1MpdaoVoterInfoRetrieve500;
};
