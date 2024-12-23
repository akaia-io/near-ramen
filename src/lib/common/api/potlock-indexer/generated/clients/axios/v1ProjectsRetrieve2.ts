import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ProjectsRetrieve2QueryResponse,
	V1ProjectsRetrieve2PathParams,
	V1ProjectsRetrieve2QueryParams,
	V1ProjectsRetrieve2400,
	V1ProjectsRetrieve2404,
	V1ProjectsRetrieve2500,
} from "../../types/V1ProjectsRetrieve2.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/:account_id/projects}
 */
export async function v1ProjectsRetrieve2(
	{ account_id }: { account_id: V1ProjectsRetrieve2PathParams["account_id"] },
	params?: V1ProjectsRetrieve2QueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ProjectsRetrieve2QueryResponse,
		V1ProjectsRetrieve2400 | V1ProjectsRetrieve2404 | V1ProjectsRetrieve2500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/${account_id}/projects`,
		params,
		...config,
	});

	return res;
}
