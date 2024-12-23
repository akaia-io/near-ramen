import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsDonationsSentRetrieveQueryResponse,
	V1AccountsDonationsSentRetrievePathParams,
	V1AccountsDonationsSentRetrieveQueryParams,
	V1AccountsDonationsSentRetrieve404,
	V1AccountsDonationsSentRetrieve500,
} from "../../types/V1AccountsDonationsSentRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/donations_sent}
 */
export async function v1AccountsDonationsSentRetrieve(
	{ account_id }: { account_id: V1AccountsDonationsSentRetrievePathParams["account_id"] },
	params?: V1AccountsDonationsSentRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsDonationsSentRetrieveQueryResponse,
		V1AccountsDonationsSentRetrieve404 | V1AccountsDonationsSentRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/accounts/${account_id}/donations_sent`,
		params,
		...config,
	});

	return res;
}
