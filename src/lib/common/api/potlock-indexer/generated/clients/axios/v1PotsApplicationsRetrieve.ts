import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsApplicationsRetrieveQueryResponse,
	V1PotsApplicationsRetrievePathParams,
	V1PotsApplicationsRetrieveQueryParams,
	V1PotsApplicationsRetrieve404,
} from "../../types/V1PotsApplicationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots/:pot_id/applications}
 */
export async function v1PotsApplicationsRetrieve(
	{ pot_id }: { pot_id: V1PotsApplicationsRetrievePathParams["pot_id"] },
	params?: V1PotsApplicationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1PotsApplicationsRetrieveQueryResponse,
		V1PotsApplicationsRetrieve404,
		unknown
	>({
		method: "GET",
		url: `/api/v1/pots/${pot_id}/applications`,
		params,
		...config,
	});

	return res;
}
