import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ListsRetrieve2QueryResponse,
	V1ListsRetrieve2PathParams,
	V1ListsRetrieve2404,
	V1ListsRetrieve2500,
} from "../../types/V1ListsRetrieve2.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/lists/:list_id}
 */
export async function v1ListsRetrieve2(
	{ list_id }: { list_id: V1ListsRetrieve2PathParams["list_id"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ListsRetrieve2QueryResponse,
		V1ListsRetrieve2404 | V1ListsRetrieve2500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/lists/${list_id}`,
		...config,
	});

	return res;
}
