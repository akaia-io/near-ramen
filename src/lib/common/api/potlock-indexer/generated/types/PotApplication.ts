import type { Account } from "./Account.ts";
import type { Pot } from "./Pot.ts";
import type { Status68eEnum } from "./Status68eEnum.ts";

export type PotApplication = {
	/**
	 * @description Application id.
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
	applicant: Account;
	/**
	 * @description Application message.
	 * @type string
	 */
	message?: string | null;
	/**
	 * @description Application status.\n\n* `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `InReview` - InReview\n* `Blacklisted` - Blacklisted
	 */
	status: Status68eEnum;
	/**
	 * @description Application submission date.
	 * @type string, date-time
	 */
	submitted_at: string;
	/**
	 * @description Application last update date.
	 * @type string, date-time
	 */
	updated_at?: string | null;
	/**
	 * @description Transaction hash.
	 * @type string
	 */
	tx_hash?: string | null;
};
