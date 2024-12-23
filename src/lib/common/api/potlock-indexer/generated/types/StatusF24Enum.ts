export const statusF24EnumEnum = {
	Pending: "Pending",
	Approved: "Approved",
	Rejected: "Rejected",
	Graylisted: "Graylisted",
	Blacklisted: "Blacklisted",
} as const;

export type StatusF24EnumEnum = (typeof statusF24EnumEnum)[keyof typeof statusF24EnumEnum];

/**
 * @description * `Pending` - Pending\n* `Approved` - Approved\n* `Rejected` - Rejected\n* `Graylisted` - Graylisted\n* `Blacklisted` - Blacklisted
 */
export type StatusF24Enum = StatusF24EnumEnum;
