import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsPayoutsReceivedRetrieveQueryResponse,
	V1AccountsPayoutsReceivedRetrievePathParams,
	V1AccountsPayoutsReceivedRetrieveQueryParams,
	V1AccountsPayoutsReceivedRetrieve404,
	V1AccountsPayoutsReceivedRetrieve500,
} from "../../types/V1AccountsPayoutsReceivedRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/payouts_received}
 */
export async function v1AccountsPayoutsReceivedRetrieve(
	{ account_id }: { account_id: V1AccountsPayoutsReceivedRetrievePathParams["account_id"] },
	params?: V1AccountsPayoutsReceivedRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsPayoutsReceivedRetrieveQueryResponse,
		V1AccountsPayoutsReceivedRetrieve404 | V1AccountsPayoutsReceivedRetrieve500,
		unknown
	>({ method: "GET", url: `/api/v1/accounts/${account_id}/payouts_received`, params, ...config });

	return res;
}
