import type { Account } from "./Account.ts";
import type { ApplicationReview } from "./ApplicationReview.ts";
import type { Round } from "./Round.ts";
import type { Status68eEnum } from "./Status68eEnum.ts";

export type RoundApplication = {
	/**
	 * @description Application id.
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @type object
	 */
	round: Round;
	/**
	 * @type object
	 */
	applicant: Account;
	/**
	 * @type object
	 */
	project: Account;
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
	 * @type array
	 */
	reviews: ApplicationReview[];
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
