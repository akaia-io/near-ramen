export const projectStatusEnumEnum = {
	NEW: "NEW",
	APPROVED: "APPROVED",
	REJECTED: "REJECTED",
	COMPLETED: "COMPLETED",
} as const;

export type ProjectStatusEnumEnum =
	(typeof projectStatusEnumEnum)[keyof typeof projectStatusEnumEnum];

/**
 * @description * `NEW` - New\n* `APPROVED` - Approved\n* `REJECTED` - Rejected\n* `COMPLETED` - Completed
 */
export type ProjectStatusEnum = ProjectStatusEnumEnum;
