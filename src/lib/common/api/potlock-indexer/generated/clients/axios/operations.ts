export const operations = {
	v1_project_stats_retrieve: {
		path: "/api/v1/:account_id/project-stats",
		method: "get",
	},
	v1_projects_retrieve_2: {
		path: "/api/v1/:account_id/projects",
		method: "get",
	},
	v1_accounts_retrieve: {
		path: "/api/v1/accounts",
		method: "get",
	},
	v1_accounts_retrieve_2: {
		path: "/api/v1/accounts/:account_id",
		method: "get",
	},
	v1_accounts_active_pots_retrieve: {
		path: "/api/v1/accounts/:account_id/active_pots",
		method: "get",
	},
	v1_accounts_donations_received_retrieve: {
		path: "/api/v1/accounts/:account_id/donations_received",
		method: "get",
	},
	v1_accounts_donations_sent_retrieve: {
		path: "/api/v1/accounts/:account_id/donations_sent",
		method: "get",
	},
	v1_accounts_list_registrations_retrieve: {
		path: "/api/v1/accounts/:account_id/list-registrations",
		method: "get",
	},
	v1_accounts_payouts_received_retrieve: {
		path: "/api/v1/accounts/:account_id/payouts_received",
		method: "get",
	},
	v1_accounts_pot_applications_retrieve: {
		path: "/api/v1/accounts/:account_id/pot_applications",
		method: "get",
	},
	v1_accounts_rounds_retrieve: {
		path: "/api/v1/accounts/:account_id/rounds",
		method: "get",
	},
	v1_accounts_upvoted_lists_retrieve: {
		path: "/api/v1/accounts/:account_id/upvoted-lists",
		method: "get",
	},
	v1_donate_contract_config_retrieve: {
		path: "/api/v1/donate_contract_config",
		method: "get",
	},
	v1_donors_retrieve: {
		path: "/api/v1/donors",
		method: "get",
	},
	v1_lists_retrieve: {
		path: "/api/v1/lists",
		method: "get",
	},
	v1_lists_retrieve_2: {
		path: "/api/v1/lists/:list_id",
		method: "get",
	},
	v1_lists_random_registration_retrieve: {
		path: "/api/v1/lists/:list_id/random_registration",
		method: "get",
	},
	v1_lists_registrations_retrieve: {
		path: "/api/v1/lists/:list_id/registrations",
		method: "get",
	},
	v1_mpdao_voter_info_retrieve: {
		path: "/api/v1/mpdao/voter-info",
		method: "get",
	},
	v1_potfactories_retrieve: {
		path: "/api/v1/potfactories",
		method: "get",
	},
	v1_pots_retrieve: {
		path: "/api/v1/pots",
		method: "get",
	},
	v1_pots_retrieve_2: {
		path: "/api/v1/pots/:pot_id/",
		method: "get",
	},
	v1_pots_applications_retrieve: {
		path: "/api/v1/pots/:pot_id/applications",
		method: "get",
	},
	v1_pots_donations_retrieve: {
		path: "/api/v1/pots/:pot_id/donations",
		method: "get",
	},
	v1_pots_payouts_retrieve: {
		path: "/api/v1/pots/:pot_id/payouts",
		method: "get",
	},
	v1_pots_sponsors_retrieve: {
		path: "/api/v1/pots/:pot_id/sponsors",
		method: "get",
	},
	v1_projects_retrieve: {
		path: "/api/v1/projects",
		method: "get",
	},
	v1_round_retrieve: {
		path: "/api/v1/round/:round_id/",
		method: "get",
	},
	v1_round_votes_retrieve: {
		path: "/api/v1/round/:round_id/:project_id/votes",
		method: "get",
	},
	v1_rounds_retrieve: {
		path: "/api/v1/rounds",
		method: "get",
	},
	v1_rounds_applications_retrieve: {
		path: "/api/v1/rounds/:round_id/applications",
		method: "get",
	},
	v1_stats_retrieve: {
		path: "/api/v1/stats",
		method: "get",
	},
} as const;
