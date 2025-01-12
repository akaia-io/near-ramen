import { browser } from "$app/environment";
import { nearClient } from "$lib/common/api/near";
import { setupModal } from "@near-wallet-selector/modal-ui-js";
import type { LayoutLoad } from "./$types";
import { SOCIAL_DB_CONTRACT_ENV_CONFIG } from "$lib/common/_config";

export const ssr = false;

export const load: LayoutLoad = async () => {
	if (browser) {
		const modal = setupModal(await nearClient.initWalletSelector(), {
			contractId: SOCIAL_DB_CONTRACT_ENV_CONFIG.accountId,
		});

		return {
			modal,
		};
	}
};
