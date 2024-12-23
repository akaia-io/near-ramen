import client from "@kubb/plugin-client/clients/axios";
import type {
	V1StatsRetrieveQueryResponse,
	V1StatsRetrieve500,
} from "../../types/V1StatsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/stats}
 */
export async function v1StatsRetrieve(config: Partial<RequestConfig> = {}) {
	const res = await client<V1StatsRetrieveQueryResponse, V1StatsRetrieve500, unknown>({
		method: "GET",
		url: `/api/v1/stats`,
		...config,
	});

	return res;
}
