import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsPayoutsRetrieveQueryResponse,
	V1PotsPayoutsRetrievePathParams,
	V1PotsPayoutsRetrieveQueryParams,
	V1PotsPayoutsRetrieve404,
} from "../../types/V1PotsPayoutsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots/:pot_id/payouts}
 */
export async function v1PotsPayoutsRetrieve(
	{ pot_id }: { pot_id: V1PotsPayoutsRetrievePathParams["pot_id"] },
	params?: V1PotsPayoutsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<V1PotsPayoutsRetrieveQueryResponse, V1PotsPayoutsRetrieve404, unknown>({
		method: "GET",
		url: `/api/v1/pots/${pot_id}/payouts`,
		params,
		...config,
	});

	return res;
}
