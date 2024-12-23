import client from "@kubb/plugin-client/clients/axios";
import type {
	V1PotsDonationsRetrieveQueryResponse,
	V1PotsDonationsRetrievePathParams,
	V1PotsDonationsRetrieveQueryParams,
	V1PotsDonationsRetrieve404,
} from "../../types/V1PotsDonationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/pots/:pot_id/donations}
 */
export async function v1PotsDonationsRetrieve(
	{ pot_id }: { pot_id: V1PotsDonationsRetrievePathParams["pot_id"] },
	params?: V1PotsDonationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1PotsDonationsRetrieveQueryResponse,
		V1PotsDonationsRetrieve404,
		unknown
	>({
		method: "GET",
		url: `/api/v1/pots/${pot_id}/donations`,
		params,
		...config,
	});

	return res;
}
