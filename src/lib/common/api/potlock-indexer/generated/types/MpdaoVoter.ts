import type { LockingPosition } from "./LockingPosition.ts";
import type { VotePosition } from "./VotePosition.ts";

export type MpdaoVoter = {
	/**
	 * @type string
	 */
	voter_id: string;
	/**
	 * @type string
	 */
	balance_in_contract: string;
	/**
	 * @type string
	 */
	voting_power: string;
	/**
	 * @type array
	 */
	locking_positions: LockingPosition[];
	/**
	 * @type array
	 */
	vote_positions: VotePosition[];
};
