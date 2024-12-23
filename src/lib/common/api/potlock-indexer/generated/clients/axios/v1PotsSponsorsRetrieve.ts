import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsSponsorsRetrieveQueryResponse,
	V1PotsSponsorsRetrievePathParams,
	V1PotsSponsorsRetrieveQueryParams,
	V1PotsSponsorsRetrieve404,
} from "../../types/V1PotsSponsorsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots/:pot_id/sponsors}
 */
export async function v1PotsSponsorsRetrieve(
	{ pot_id }: { pot_id: V1PotsSponsorsRetrievePathParams["pot_id"] },
	params?: V1PotsSponsorsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1PotsSponsorsRetrieveQueryResponse, V1PotsSponsorsRetrieve404, unknown>(
		{
			method: "GET",
			url: `/api/v1/pots/${pot_id}/sponsors`,
			params,
			...config,
		},
	);

	return res;
}
