import type { Account } from "./Account.ts";
import type { ProjectContact } from "./ProjectContact.ts";

export type Round = {
	/**
	 * @description Round ID in DB (does not necessarily correspond to on-chain ID).
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @description Round ID in contract
	 * @type integer
	 */
	on_chain_id: number;
	/**
	 * @type string
	 */
	readonly chain: string;
	/**
	 * @description Round factory account ID.
	 * @type string
	 */
	factory_contract: string;
	/**
	 * @description Round deployment date.
	 * @type string, date-time
	 */
	deployed_at: string;
	/**
	 * @type object
	 */
	owner: Account;
	/**
	 * @type array
	 */
	admins: Account[];
	/**
	 * @description Round name.
	 * @type string
	 */
	name: string;
	/**
	 * @description Round description.
	 * @type string
	 */
	description: string;
	/**
	 * @type array | undefined
	 */
	contacts?: ProjectContact[];
	/**
	 * @description Expected amount.
	 * @type string
	 */
	expected_amount: string;
	/**
	 * @description Base currency.
	 * @type string
	 */
	base_currency?: string | null;
	/**
	 * @description Round application start date.
	 * @type string, date-time
	 */
	application_start?: string | null;
	/**
	 * @description Round application end date.
	 * @type string, date-time
	 */
	application_end?: string | null;
	/**
	 * @description Round voting start date.
	 * @type string, date-time
	 */
	voting_start: string;
	/**
	 * @description Round voting end date.
	 * @type string, date-time
	 */
	voting_end: string;
	/**
	 * @description Use whitelist.
	 * @type boolean
	 */
	use_whitelist: boolean;
	/**
	 * @description Use vault.
	 * @type boolean
	 */
	use_vault: boolean;
	/**
	 * @description Number of picks per voter.
	 * @type integer
	 */
	num_picks_per_voter?: number | null;
	/**
	 * @description Max participants.
	 * @type integer
	 */
	max_participants?: number | null;
	/**
	 * @description Projects Approved for round.
	 * @type array
	 */
	approved_projects: string[];
	/**
	 * @description Allow applications.
	 * @type boolean
	 */
	allow_applications: boolean;
	/**
	 * @description Is video required.
	 * @type boolean
	 */
	is_video_required: boolean;
	/**
	 * @description Round cooldown end date.
	 * @type string, date-time
	 */
	cooldown_end?: string | null;
	/**
	 * @description Round cooldown period in ms.
	 * @type integer, int64
	 */
	cooldown_period_ms?: number | null;
	/**
	 * @description Compliance req desc.
	 * @type string
	 */
	compliance_req_desc: string;
	/**
	 * @description Compliance period in ms.
	 * @type integer, int64
	 */
	compliance_period_ms?: number | null;
	/**
	 * @description Compliance end date.
	 * @type string, date-time
	 */
	compliance_end?: string | null;
	/**
	 * @description Allow remaining dist.
	 * @type boolean
	 */
	allow_remaining_dist: boolean;
	/**
	 * @type object
	 */
	remaining_dist_address: Account;
	/**
	 * @description Remaining dist memo.
	 * @type string
	 */
	remaining_dist_memo?: string | null;
	/**
	 * @description Remaining dist at ms.
	 * @type integer, int64
	 */
	remaining_dist_at_ms?: number | null;
	/**
	 * @description Current vault balance.
	 * @type string
	 */
	current_vault_balance?: string | null;
	/**
	 * @type string, decimal
	 */
	current_vault_balance_usd: string;
	/**
	 * @type object
	 */
	remaining_dist_by: Account;
	/**
	 * @description Referrer fee basis points.
	 * @type integer
	 */
	referrer_fee_basis_points?: number | null;
	/**
	 * @description Vault total deposits.
	 * @type string
	 */
	vault_total_deposits?: string | null;
	/**
	 * @type string, decimal
	 */
	vault_total_deposits_usd: string;
	/**
	 * @description Round complete date.
	 * @type string, date-time
	 */
	round_complete?: string | null;
};
