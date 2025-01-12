import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";

export const initWalletSelector = async () =>
	await setupWalletSelector({
		network: "testnet",
		modules: [setupMyNearWallet(), setupHereWallet()],
	});
