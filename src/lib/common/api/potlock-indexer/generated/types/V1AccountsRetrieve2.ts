import type { Account } from "./Account.ts";

export type V1AccountsRetrieve2PathParams = {
	/**
	 * @type string
	 */
	account_id: string;
};

/**
 * @description Returns account details
 */
export type V1AccountsRetrieve2200 = Account;

/**
 * @description Account not found
 */
export type V1AccountsRetrieve2404 = any;

/**
 * @description Internal server error
 */
export type V1AccountsRetrieve2500 = any;

export type V1AccountsRetrieve2QueryResponse = V1AccountsRetrieve2200;

export type V1AccountsRetrieve2Query = {
	Response: V1AccountsRetrieve2200;
	PathParams: V1AccountsRetrieve2PathParams;
	Errors: V1AccountsRetrieve2404 | V1AccountsRetrieve2500;
};
