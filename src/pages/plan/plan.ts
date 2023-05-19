import { type IconObject } from '@todanni/ui';
import { type BalanceCardProps } from '~/components/plan/cards/BalancesCard';
import { type GoalsCardProps } from '~/components/plan/cards/GoalsCard';

export type PlanPanel = {
	title: string;
	icon: IconObject;
	fill: 'default' | 'blue' | 'green' | 'red' | 'yellow';
	balanceCard?: BalanceCardProps;
	goalsCard?: GoalsCardProps;
};

export type PlanContents = {
	title: string;
	panels: PlanPanel[];
};

export const planContents: PlanContents = {
	title: 'Your plan',
	panels: [
		{
			title: 'Overview',
			icon: 'plan',
			fill: 'default',
			balanceCard: {
				title: 'Balance statement',
				totalLabel: 'Estimated networth',
				totalAmount: 383108.01,
				balances: [
					{
						name: 'Starting balance',
						amount: 1234.01,
						fill: 'green',
						icon: 'money',
					},
					{
						name: 'Assets',
						amount: 383108.01,
						fill: 'blue',
						icon: 'assets',
					},
					{
						name: 'Debt',
						amount: 315108.92,
						fill: 'red',
						icon: 'card',
					},
					{
						name: 'Savings',
						amount: 1108.01,
						fill: 'yellow',
						icon: 'piggy',
					},
				],
			},
			goalsCard: {
				hasButton: false,
				goals: [
					{
						description: 'Income',
						amount: 100,
						fill: 'green',
						goal: 100,
					},
					{
						description: 'Spending',
						amount: 50,
						fill: 'blue',
						goal: 100,
					},
					{
						description: 'Savings',
						amount: 25,
						fill: 'yellow',
						goal: 100,
					},
					{
						description: 'Debt',
						amount: 75,
						fill: 'red',
						goal: 100,
					},
				],
			},
		},
		{
			title: 'Income',
			icon: 'money',
			fill: 'green',
			goalsCard: {
				hasButton: true,
				goalExample: 'Earn additional £100 this month.',
				goals: [],
			},
		},
		{
			title: 'Spending',
			icon: 'wallet',
			fill: 'blue',
			goalsCard: {
				hasButton: true,
				goalExample: 'Spend less than £250 on takeaway this month.',
				goals: [],
			},
		},
		{
			title: 'Debt',
			icon: 'card',
			fill: 'red',
			balanceCard: {
				title: 'Balance statement',
				totalLabel: 'Total',
				totalAmount: 1108,
				balances: [
					{
						name: 'Mortgage',
						amount: 383108.01,
						fill: 'red',
						icon: 'assets',
					},
					{
						name: 'VW Finance',
						amount: 1108.01,
						fill: 'red',
						icon: 'piggy',
					},
					{
						name: 'Student Loan',
						amount: 315108.92,
						fill: 'red',
						icon: 'card',
					},
					{
						name: 'Monzo loan',
						amount: 315108.92,
						fill: 'red',
						icon: 'card',
					},
					{
						name: 'Novuna Finance',
						amount: 315108.92,
						fill: 'red',
						icon: 'card',
					},
				],
			},
			goalsCard: {
				hasButton: true,
				goalExample: 'Pay off an extra £100 towards credit card balance.',
				goals: [],
			},
		},
		{
			title: 'Savings',
			icon: 'piggy',
			fill: 'yellow',
			balanceCard: {
				title: 'Balance statement',
				totalLabel: 'Total',
				totalAmount: 11104.84,
				balances: [
					{
						name: 'Pension HL',
						amount: 4143.01,
						fill: 'green',
						icon: 'assets',
					},
					{
						name: 'Pension RL',
						amount: 5367.01,
						fill: 'green',
						icon: 'piggy',
					},
					{
						name: 'Cash ISA',
						amount: 801.92,
						fill: 'green',
						icon: 'card',
					},
					{
						name: 'Stocks ISA',
						amount: 307.92,
						fill: 'green',
						icon: 'card',
					},
				],
			},
			goalsCard: {
				hasButton: true,
				goalExample: 'Contribute 100£ towards Help to Buy ISA.',
				goals: [],
			},
		},
	],
};
