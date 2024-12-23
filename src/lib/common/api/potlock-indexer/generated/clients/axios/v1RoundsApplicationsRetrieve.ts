import client from "@kubb/plugin-client/clients/axios";
import type {
	V1RoundsApplicationsRetrieveQueryResponse,
	V1RoundsApplicationsRetrievePathParams,
	V1RoundsApplicationsRetrieveQueryParams,
	V1RoundsApplicationsRetrieve404,
} from "../../types/V1RoundsApplicationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/rounds/:round_id/applications}
 */
export async function v1RoundsApplicationsRetrieve(
	{ round_id }: { round_id: V1RoundsApplicationsRetrievePathParams["round_id"] },
	params?: V1RoundsApplicationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1RoundsApplicationsRetrieveQueryResponse,
		V1RoundsApplicationsRetrieve404,
		unknown
	>({
		method: "GET",
		url: `/api/v1/rounds/${round_id}/applications`,
		params,
		...config,
	});

	return res;
}
