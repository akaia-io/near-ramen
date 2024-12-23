import type { Account } from "./Account.ts";
import type { List } from "./List.ts";
import type { StatusF24Enum } from "./StatusF24Enum.ts";

export type ListRegistration = {
	/**
	 * @description Registration id.
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @type object
	 */
	list: List;
	/**
	 * @type object
	 */
	registrant: Account;
	/**
	 * @type object
	 */
	registered_by: Account;
	/**
	 * @description Registration status.\n\n* `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `Graylisted` - Graylisted\n* `Blacklisted` - Blacklisted
	 */
	status: StatusF24Enum;
	/**
	 * @description Registration submission date.
	 * @type string, date-time
	 */
	submitted_at: string;
	/**
	 * @description Registration last update date.
	 * @type string, date-time
	 */
	updated_at: string;
	/**
	 * @description Registrant notes.
	 * @type string
	 */
	registrant_notes?: string | null;
	/**
	 * @description Admin notes.
	 * @type string
	 */
	admin_notes?: string | null;
	/**
	 * @description Transaction hash.
	 * @type string
	 */
	tx_hash?: string | null;
};
