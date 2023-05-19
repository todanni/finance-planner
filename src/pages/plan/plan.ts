import { DateTime } from 'luxon';

export const PlanPage = {
	title: 'Your plan',
	dateRange: DateTime.now(),
	sections: [
		{
			title: 'Overview',
			cards: [
				{
					title: 'Payments summary',
					content: 'All transactions for the set date range',
				},
				{
					title: 'Payments breakdown',
					content: 'Chart with category split',
				},
				{
					title: 'Goals',
					content: 'All goals for the set date range',
				},
				{
					title: 'Balance summary',
					content: 'Total balance for assets, debt, savings, networth',
				},
			],
		},
		{
			title: 'Income',
			cards: [
				{
					title: 'Income payments',
					content: 'Income transactions for the set date range',
				},
			],
		},
		{
			title: 'Spending',
			cards: [
				{
					title: 'Spending payments',
					content: 'Spending transactions for the set date range',
				},
			],
		},
		{
			title: 'Debt',
			cards: [
				{
					title: 'Income payments',
					content: 'Income transactions for the set date range',
				},
			],
		},
		{
			title: 'Savings',
			cards: [
				{
					title: 'Income payments',
					content: 'Income transactions for the set date range',
				},
			],
		},
	],
};
