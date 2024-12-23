import client from "@kubb/plugin-client/clients/axios";
import type {
	V1ListsRegistrationsRetrieveQueryResponse,
	V1ListsRegistrationsRetrievePathParams,
	V1ListsRegistrationsRetrieveQueryParams,
	V1ListsRegistrationsRetrieve404,
	V1ListsRegistrationsRetrieve500,
} from "../../types/V1ListsRegistrationsRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/lists/:list_id/registrations}
 */
export async function v1ListsRegistrationsRetrieve(
	{ list_id }: { list_id: V1ListsRegistrationsRetrievePathParams["list_id"] },
	params?: V1ListsRegistrationsRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1ListsRegistrationsRetrieveQueryResponse,
		V1ListsRegistrationsRetrieve404 | V1ListsRegistrationsRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/lists/${list_id}/registrations`,
		params,
		...config,
	});

	return res;
}
