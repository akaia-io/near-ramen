import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsRoundsRetrieveQueryResponse,
	V1AccountsRoundsRetrievePathParams,
	V1AccountsRoundsRetrieveQueryParams,
	V1AccountsRoundsRetrieve500,
} from "../../types/V1AccountsRoundsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/rounds}
 */
export async function v1AccountsRoundsRetrieve(
	{ account_id }: { account_id: V1AccountsRoundsRetrievePathParams["account_id"] },
	params?: V1AccountsRoundsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsRoundsRetrieveQueryResponse,
		V1AccountsRoundsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/accounts/${account_id}/rounds`,
		params,
		...config,
	});

	return res;
}
