import type { Account } from "./Account.ts";
import type { ProjectContact } from "./ProjectContact.ts";
import type { ProjectContract } from "./ProjectContract.ts";
import type { ProjectRepository } from "./ProjectRepository.ts";
import type { ProjectStatusEnum } from "./ProjectStatusEnum.ts";

export type Project = {
	/**
	 * @type integer
	 */
	readonly id: number;
	/**
	 * @description Project id in contract
	 * @type integer
	 */
	on_chain_id: number;
	/**
	 * @type string, uri
	 */
	image_url: string;
	/**
	 * @type string, uri
	 */
	video_url: string;
	/**
	 * @type string
	 */
	name: string;
	/**
	 * @type string
	 */
	overview: string;
	/**
	 * @type object
	 */
	owner: Account;
	/**
	 * @type object
	 */
	payout_address: Account;
	/**
	 * @type array | undefined
	 */
	contacts?: ProjectContact[];
	/**
	 * @type array | undefined
	 */
	contracts?: ProjectContract[];
	/**
	 * @description Project Team Member
	 * @type array
	 */
	team_members: string[];
	/**
	 * @type array | undefined
	 */
	repositories?: ProjectRepository[];
	/**
	 * @type string
	 */
	status: ProjectStatusEnum;
	/**
	 * @type integer, int64
	 */
	submited_ms: number;
	/**
	 * @type integer, int64
	 */
	updated_ms?: number | null;
	/**
	 * @description Project Admin
	 * @type array
	 */
	admins: string[];
};
