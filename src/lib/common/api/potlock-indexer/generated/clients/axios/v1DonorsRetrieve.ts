import client from "@kubb/plugin-client/clients/axios";
import type {
	V1DonorsRetrieveQueryResponse,
	V1DonorsRetrieveQueryParams,
	V1DonorsRetrieve500,
} from "../../types/V1DonorsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/donors}
 */
export async function v1DonorsRetrieve(
	params?: V1DonorsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1DonorsRetrieveQueryResponse, V1DonorsRetrieve500, unknown>({
		method: "GET",
		url: `/api/v1/donors`,
		params,
		...config,
	});

	return res;
}
