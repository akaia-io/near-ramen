import type { Account } from "./Account.ts";
import type { Pot } from "./Pot.ts";
import type { Token } from "./Token.ts";

export type PotPayout = {
	/**
	 * @description Payout id.
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @type object
	 */
	pot: Pot;
	/**
	 * @type object
	 */
	recipient: Account;
	/**
	 * @description Payout amount.
	 * @type string
	 */
	amount: string;
	/**
	 * @description Payout amount in USD.
	 * @type string, decimal
	 */
	amount_paid_usd?: string | null;
	/**
	 * @type object
	 */
	token: Token;
	/**
	 * @description Payout date.
	 * @type string, date-time
	 */
	paid_at?: string | null;
	/**
	 * @description Transaction hash.
	 * @type string
	 */
	tx_hash?: string | null;
};
