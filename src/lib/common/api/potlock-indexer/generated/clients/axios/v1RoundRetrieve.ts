import client from "@kubb/plugin-client/clients/axios";
import type {
	V1RoundRetrieveQueryResponse,
	V1RoundRetrievePathParams,
	V1RoundRetrieve404,
} from "../../types/V1RoundRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/round/:round_id/}
 */
export async function v1RoundRetrieve(
	{ round_id }: { round_id: V1RoundRetrievePathParams["round_id"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1RoundRetrieveQueryResponse, V1RoundRetrieve404, unknown>({
		method: "GET",
		url: `/api/v1/round/${round_id}/`,
		...config,
	});

	return res;
}
