import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ProjectStatsRetrieveQueryResponse,
	V1ProjectStatsRetrievePathParams,
	V1ProjectStatsRetrieveQueryParams,
	V1ProjectStatsRetrieve500,
} from "../../types/V1ProjectStatsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/:account_id/project-stats}
 */
export async function v1ProjectStatsRetrieve(
	{ account_id }: { account_id: V1ProjectStatsRetrievePathParams["account_id"] },
	params?: V1ProjectStatsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1ProjectStatsRetrieveQueryResponse, V1ProjectStatsRetrieve500, unknown>(
		{
			method: "GET",
			url: `/api/v1/${account_id}/project-stats`,
			params,
			...config,
		},
	);

	return res;
}
