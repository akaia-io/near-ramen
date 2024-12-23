import { setupBitgetWallet } from "@near-wallet-selector/bitget-wallet";
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import {
	type EthereumWalletsParams,
	setupEthereumWallets,
} from "@near-wallet-selector/ethereum-wallets";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupLedger } from "@near-wallet-selector/ledger";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupMintbaseWallet } from "@near-wallet-selector/mintbase-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNarwallets } from "@near-wallet-selector/narwallets";
import { setupNearMobileWallet } from "@near-wallet-selector/near-mobile-wallet";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupRamperWallet } from "@near-wallet-selector/ramper-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupXDEFI } from "@near-wallet-selector/xdefi";
import naxios from "@wpdas/naxios";

import { NETWORK, SOCIAL_CONTRACT_ACCOUNT_ID } from "$common/_config";
import { FULL_TGAS } from "$common/constants";

import { wagmiConfig, web3Modal } from "./web3modal";

export const RPC_NODE_URL = `https://${NETWORK === "mainnet" ? "free.rpc.fastnear.com" : "test.rpc.fastnear.com"}`;

export const naxiosInstance = new naxios({
	rpcNodeUrl: RPC_NODE_URL,
	contractId: SOCIAL_CONTRACT_ACCOUNT_ID,
	network: NETWORK,

	walletSelectorModules: [
		setupMyNearWallet(),
		setupSender(),
		setupHereWallet(),
		setupMeteorWallet(),
		setupLedger(),

		setupEthereumWallets({
			wagmiConfig: wagmiConfig as EthereumWalletsParams["wagmiConfig"],
			web3Modal: web3Modal as EthereumWalletsParams["web3Modal"],
			alwaysOnboardDuringSignIn: true,
		}),

		setupNearMobileWallet(),
		setupNightly(),
		setupBitgetWallet(),
		setupCoin98Wallet(),
		setupMathWallet(),
		setupMintbaseWallet(),
		setupBitteWallet(),
		setupNearFi(),
		setupWelldoneWallet(),
		setupXDEFI(),
		setupNarwallets(),
		setupRamperWallet(),
		setupNeth({ gas: FULL_TGAS, bundle: false }),
	],
});

/**
 * NEAR Wallet API
 */
export const walletApi = naxiosInstance.walletApi();

/**
 * NEAR RPC API Provider3
 */
export const rpc = naxiosInstance.rpcApi();
