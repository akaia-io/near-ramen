import type { Account } from "./Account.ts";

export type PotFactory = {
	/**
	 * @description Pot factory account ID.
	 * @type string
	 */
	account: string;
	/**
	 * @type object
	 */
	owner: Account;
	/**
	 * @type array
	 */
	admins: Account[];
	/**
	 * @type array
	 */
	whitelisted_deployers: Account[];
	source_metadata?: any;
	/**
	 * @description Pot factory deployment date.
	 * @type string, date-time
	 */
	deployed_at: string;
	/**
	 * @description Pot factory protocol fee basis points.
	 * @type integer
	 */
	protocol_fee_basis_points: number;
	/**
	 * @description Require whitelist.
	 * @type boolean
	 */
	require_whitelist: boolean;
	/**
	 * @type object
	 */
	protocol_fee_recipient: Account;
};
