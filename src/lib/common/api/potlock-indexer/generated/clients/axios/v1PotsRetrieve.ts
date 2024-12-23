import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsRetrieveQueryResponse,
	V1PotsRetrieveQueryParams,
} from "../../types/V1PotsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots}
 */
export async function v1PotsRetrieve(
	params?: V1PotsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1PotsRetrieveQueryResponse, Error, unknown>({
		method: "GET",
		url: `/api/v1/pots`,
		params,
		...config,
	});

	return res;
}
