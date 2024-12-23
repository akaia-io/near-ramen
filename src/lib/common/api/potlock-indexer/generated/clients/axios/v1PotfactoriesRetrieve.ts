import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotfactoriesRetrieveQueryResponse,
	V1PotfactoriesRetrieveQueryParams,
} from "../../types/V1PotfactoriesRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/potfactories}
 */
export async function v1PotfactoriesRetrieve(
	params?: V1PotfactoriesRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1PotfactoriesRetrieveQueryResponse, Error, unknown>({
		method: "GET",
		url: `/api/v1/potfactories`,
		params,
		...config,
	});

	return res;
}
