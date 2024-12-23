import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsListRegistrationsRetrieveQueryResponse,
	V1AccountsListRegistrationsRetrievePathParams,
	V1AccountsListRegistrationsRetrieveQueryParams,
	V1AccountsListRegistrationsRetrieve404,
	V1AccountsListRegistrationsRetrieve500,
} from "../../types/V1AccountsListRegistrationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/list-registrations}
 */
export async function v1AccountsListRegistrationsRetrieve(
	{ account_id }: { account_id: V1AccountsListRegistrationsRetrievePathParams["account_id"] },
	params?: V1AccountsListRegistrationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsListRegistrationsRetrieveQueryResponse,
		V1AccountsListRegistrationsRetrieve404 | V1AccountsListRegistrationsRetrieve500,
		unknown
	>({ method: "GET", url: `/api/v1/accounts/${account_id}/list-registrations`, params, ...config });

	return res;
}
