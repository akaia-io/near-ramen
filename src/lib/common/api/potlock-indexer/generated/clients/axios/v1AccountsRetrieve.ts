import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsRetrieveQueryResponse,
	V1AccountsRetrieveQueryParams,
	V1AccountsRetrieve500,
} from "../../types/V1AccountsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts}
 */
export async function v1AccountsRetrieve(
	params?: V1AccountsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1AccountsRetrieveQueryResponse, V1AccountsRetrieve500, unknown>({
		method: "GET",
		url: `/api/v1/accounts`,
		params,
		...config,
	});

	return res;
}
