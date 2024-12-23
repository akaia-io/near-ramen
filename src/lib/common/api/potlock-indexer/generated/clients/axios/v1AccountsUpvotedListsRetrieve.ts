import client from "@kubb/plugin-client/clients/axios";
import type {
	V1AccountsUpvotedListsRetrieveQueryResponse,
	V1AccountsUpvotedListsRetrievePathParams,
	V1AccountsUpvotedListsRetrieveQueryParams,
	V1AccountsUpvotedListsRetrieve404,
	V1AccountsUpvotedListsRetrieve500,
} from "../../types/V1AccountsUpvotedListsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/accounts/:account_id/upvoted-lists}
 */
export async function v1AccountsUpvotedListsRetrieve(
	{ account_id }: { account_id: V1AccountsUpvotedListsRetrievePathParams["account_id"] },
	params?: V1AccountsUpvotedListsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1AccountsUpvotedListsRetrieveQueryResponse,
		V1AccountsUpvotedListsRetrieve404 | V1AccountsUpvotedListsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/accounts/${account_id}/upvoted-lists`,
		params,
		...config,
	});

	return res;
}
