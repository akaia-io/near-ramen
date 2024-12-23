import client from "@kubb/plugin-client/clients/axios";
import type {
	V1RoundsRetrieveQueryResponse,
	V1RoundsRetrievePathParams,
	V1RoundsRetrieveQueryParams,
	V1RoundsRetrieve500,
} from "../../types/V1RoundsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/rounds}
 */
export async function v1RoundsRetrieve(
	{ account_id }: { account_id: V1RoundsRetrievePathParams["account_id"] },
	params?: V1RoundsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1RoundsRetrieveQueryResponse, V1RoundsRetrieve500, unknown>({
		method: "GET",
		url: `/api/v1/rounds`,
		params,
		...config,
	});

	return res;
}
