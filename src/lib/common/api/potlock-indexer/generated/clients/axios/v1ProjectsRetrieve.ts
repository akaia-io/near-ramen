import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ProjectsRetrieveQueryResponse,
	V1ProjectsRetrieveQueryParams,
	V1ProjectsRetrieve400,
	V1ProjectsRetrieve404,
	V1ProjectsRetrieve500,
} from "../../types/V1ProjectsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/projects}
 */
export async function v1ProjectsRetrieve(
	params?: V1ProjectsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ProjectsRetrieveQueryResponse,
		V1ProjectsRetrieve400 | V1ProjectsRetrieve404 | V1ProjectsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/projects`,
		params,
		...config,
	});

	return res;
}
