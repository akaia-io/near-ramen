import client from "@kubb/plugin-client/clients/axios";
import type {
	V1MpdaoVoterInfoRetrieveQueryResponse,
	V1MpdaoVoterInfoRetrieveQueryParams,
	V1MpdaoVoterInfoRetrieve404,
	V1MpdaoVoterInfoRetrieve500,
} from "../../types/V1MpdaoVoterInfoRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/mpdao/voter-info}
 */
export async function v1MpdaoVoterInfoRetrieve(
	params?: V1MpdaoVoterInfoRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1MpdaoVoterInfoRetrieveQueryResponse,
		V1MpdaoVoterInfoRetrieve404 | V1MpdaoVoterInfoRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/mpdao/voter-info`,
		params,
		...config,
	});

	return res;
}
