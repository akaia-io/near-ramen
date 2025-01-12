import { browser } from "$app/environment";
import { nearClient } from "$lib/common/api/near";
import { setupModal } from "@near-wallet-selector/modal-ui-js";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load: LayoutLoad = async () => {
	if (browser) {
		const modal = setupModal(await nearClient.initWalletSelector(), { contractId: "social.near" });

		return {
			modal,
		};
	}
};
