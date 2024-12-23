import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsActivePotsRetrieveQueryResponse,
	V1AccountsActivePotsRetrievePathParams,
	V1AccountsActivePotsRetrieveQueryParams,
	V1AccountsActivePotsRetrieve404,
	V1AccountsActivePotsRetrieve500,
} from "../../types/V1AccountsActivePotsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/active_pots}
 */
export async function v1AccountsActivePotsRetrieve(
	{ account_id }: { account_id: V1AccountsActivePotsRetrievePathParams["account_id"] },
	params?: V1AccountsActivePotsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsActivePotsRetrieveQueryResponse,
		V1AccountsActivePotsRetrieve404 | V1AccountsActivePotsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/accounts/${account_id}/active_pots`,
		params,
		...config,
	});

	return res;
}
