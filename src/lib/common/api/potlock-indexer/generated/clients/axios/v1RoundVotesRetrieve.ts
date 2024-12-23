import client from "@kubb/plugin-client/clients/axios";
import type {
	V1RoundVotesRetrieveQueryResponse,
	V1RoundVotesRetrievePathParams,
	V1RoundVotesRetrieveQueryParams,
	V1RoundVotesRetrieve404,
} from "../../types/V1RoundVotesRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/round/:round_id/:project_id/votes}
 */
export async function v1RoundVotesRetrieve(
	{
		project_id,
		round_id,
	}: {
		project_id: V1RoundVotesRetrievePathParams["project_id"];
		round_id: V1RoundVotesRetrievePathParams["round_id"];
	},
	params?: V1RoundVotesRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1RoundVotesRetrieveQueryResponse, V1RoundVotesRetrieve404, unknown>({
		method: "GET",
		url: `/api/v1/round/${round_id}/${project_id}/votes`,
		params,
		...config,
	});

	return res;
}
