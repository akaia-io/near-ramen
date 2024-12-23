import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsRetrieve2QueryResponse,
	V1AccountsRetrieve2PathParams,
	V1AccountsRetrieve2404,
	V1AccountsRetrieve2500,
} from "../../types/V1AccountsRetrieve2.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id}
 */
export async function v1AccountsRetrieve2(
	{ account_id }: { account_id: V1AccountsRetrieve2PathParams["account_id"] },
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsRetrieve2QueryResponse,
		V1AccountsRetrieve2404 | V1AccountsRetrieve2500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/accounts/${account_id}`,
		...config,
	});

	return res;
}
