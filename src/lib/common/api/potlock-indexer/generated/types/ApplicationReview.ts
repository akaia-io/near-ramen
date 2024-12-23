import type { Account } from "./Account.ts";
import type { Status68eEnum } from "./Status68eEnum.ts";

export type ApplicationReview = {
	/**
	 * @type object
	 */
	reviewer: Account;
	/**
	 * @description Review notes.
	 * @type string
	 */
	notes?: string | null;
	/**
	 * @description Application status for this review.\n\n* `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `InReview` - InReview\n* `Blacklisted` - Blacklisted
	 */
	status: Status68eEnum;
	/**
	 * @description Review date.
	 * @type string, date-time
	 */
	reviewed_at: string;
	/**
	 * @description Transaction hash.
	 * @type string
	 */
	tx_hash?: string | null;
};
