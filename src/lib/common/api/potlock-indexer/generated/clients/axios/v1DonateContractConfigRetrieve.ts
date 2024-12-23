import client from "@kubb/plugin-client/clients/axios";
import type {
	V1DonateContractConfigRetrieveQueryResponse,
	V1DonateContractConfigRetrieveQueryParams,
	V1DonateContractConfigRetrieve500,
} from "../../types/V1DonateContractConfigRetrieve.ts";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";

/**
 * {@link /api/v1/donate_contract_config}
 */
export async function v1DonateContractConfigRetrieve(
	params?: V1DonateContractConfigRetrieveQueryParams,
	config: Partial<RequestConfig> = {},
) {
	const res = await client<
		V1DonateContractConfigRetrieveQueryResponse,
		V1DonateContractConfigRetrieve500,
		unknown
	>({
		method: "GET",
		url: `/api/v1/donate_contract_config`,
		params,
		...config,
	});

	return res;
}
