import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsDonationsReceivedRetrieveQueryResponse,
	V1AccountsDonationsReceivedRetrievePathParams,
	V1AccountsDonationsReceivedRetrieveQueryParams,
	V1AccountsDonationsReceivedRetrieve404,
	V1AccountsDonationsReceivedRetrieve500,
} from "../../types/V1AccountsDonationsReceivedRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/donations_received}
 */
export async function v1AccountsDonationsReceivedRetrieve(
	{ account_id }: { account_id: V1AccountsDonationsReceivedRetrievePathParams["account_id"] },
	params?: V1AccountsDonationsReceivedRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsDonationsReceivedRetrieveQueryResponse,
		V1AccountsDonationsReceivedRetrieve404 | V1AccountsDonationsReceivedRetrieve500,
		unknown
	>({ method: "GET", url: `/api/v1/accounts/${account_id}/donations_received`, params, ...config });

	return res;
}
