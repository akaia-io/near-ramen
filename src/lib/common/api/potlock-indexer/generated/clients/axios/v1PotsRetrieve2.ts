import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsRetrieve2QueryResponse,
	V1PotsRetrieve2PathParams,
	V1PotsRetrieve2404,
} from "../../types/V1PotsRetrieve2.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots/:pot_id/}
 */
export async function v1PotsRetrieve2(
	{ pot_id }: { pot_id: V1PotsRetrieve2PathParams["pot_id"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1PotsRetrieve2QueryResponse, V1PotsRetrieve2404, unknown>({
		method: "GET",
		url: `/api/v1/pots/${pot_id}/`,
		...config,
	});

	return res;
}
