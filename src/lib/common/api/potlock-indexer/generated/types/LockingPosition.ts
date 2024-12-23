export type LockingPosition = {
	/**
	 * @type integer
	 */
	index: number;
	/**
	 * @type string
	 */
	amount: string;
	/**
	 * @type integer
	 */
	locking_period: number;
	/**
	 * @type string
	 */
	voting_power: string;
	/**
	 * @type string
	 */
	unlocking_started_at: string | null;
	/**
	 * @type boolean
	 */
	is_unlocked: boolean;
	/**
	 * @type boolean
	 */
	is_unlocking: boolean;
	/**
	 * @type boolean
	 */
	is_locked: boolean;
};
