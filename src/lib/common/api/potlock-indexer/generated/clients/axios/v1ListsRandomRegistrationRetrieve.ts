import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ListsRandomRegistrationRetrieveQueryResponse,
	V1ListsRandomRegistrationRetrievePathParams,
	V1ListsRandomRegistrationRetrieveQueryParams,
	V1ListsRandomRegistrationRetrieve404,
	V1ListsRandomRegistrationRetrieve500,
} from "../../types/V1ListsRandomRegistrationRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/lists/:list_id/random_registration}
 */
export async function v1ListsRandomRegistrationRetrieve(
	{ list_id }: { list_id: V1ListsRandomRegistrationRetrievePathParams["list_id"] },
	params?: V1ListsRandomRegistrationRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ListsRandomRegistrationRetrieveQueryResponse,
		V1ListsRandomRegistrationRetrieve404 | V1ListsRandomRegistrationRetrieve500,
		unknown
	>({ method: "GET", url: `/api/v1/lists/${list_id}/random_registration`, params, ...config });

	return res;
}
