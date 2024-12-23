import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsPotApplicationsRetrieveQueryResponse,
	V1AccountsPotApplicationsRetrievePathParams,
	V1AccountsPotApplicationsRetrieveQueryParams,
	V1AccountsPotApplicationsRetrieve400,
	V1AccountsPotApplicationsRetrieve404,
	V1AccountsPotApplicationsRetrieve500,
} from "../../types/V1AccountsPotApplicationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/pot_applications}
 */
export async function v1AccountsPotApplicationsRetrieve(
	{ account_id }: { account_id: V1AccountsPotApplicationsRetrievePathParams["account_id"] },
	params?: V1AccountsPotApplicationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsPotApplicationsRetrieveQueryResponse,
		| V1AccountsPotApplicationsRetrieve400
		| V1AccountsPotApplicationsRetrieve404
		| V1AccountsPotApplicationsRetrieve500,
		unknown
	>({ method: "GET", url: `/api/v1/accounts/${account_id}/pot_applications`, params, ...config });

	return res;
}
