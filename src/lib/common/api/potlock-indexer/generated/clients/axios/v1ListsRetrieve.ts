import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ListsRetrieveQueryResponse,
	V1ListsRetrieveQueryParams,
	V1ListsRetrieve404,
	V1ListsRetrieve500,
} from "../../types/V1ListsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/lists}
 */
export async function v1ListsRetrieve(
	params?: V1ListsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ListsRetrieveQueryResponse,
		V1ListsRetrieve404 | V1ListsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/lists`,
		params,
		...config,
	});

	return res;
}
