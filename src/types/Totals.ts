import {
	type Category,
	type SubCategory,
	type Transaction,
} from '@prisma/client';

type Totals = {
	INCOME: number;
	BILL: number;
	LIVING_COSTS: number;
	DISCRETIONARY: number;
	DEBT: number;
	SAVINGS: number;
	TAX: number;
	SPENDING: number;
	TRANSFERS: number;
	REMAINING: number;
	hasResults: boolean;
};
type PaymentTotals = {
	payments: number;
	remaining: number;
	categories: {
		category: Category;
		title: string;
		total: number;
		subCategories: {
			title: string;
			total: number;
		}[];
	}[];
};

type SpendingPayments = {
	bills: (Transaction & {
		subCategory: SubCategory;
	})[];
	lc: (Transaction & {
		subCategory: SubCategory;
	})[];
	discr: (Transaction & {
		subCategory: SubCategory;
	})[];
};

type IncomePayments = {
	categories: [
		{
			title: 'Income payments';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
		{
			title: 'Pre-tax deductions';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
	];
};

type SpendingPaymentTotals = {
	categories: [
		{
			title: 'Bills';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
		{
			title: 'Living costs';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
		{
			title: 'Discretionary';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
	];
};

type DebtPayments = {
	categories: [
		{
			title: 'Debt repayment';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
	];
};

type SavingsPayments = {
	categories: [
		{
			title: 'Savings contributions';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
		{
			title: 'From pre-tax deductions';
			total: number;
			subCategories: {
				title: string;
				total: number;
			}[];
		},
	];
};

export {
	type Totals,
	type SpendingPayments,
	type IncomePayments,
	type PaymentTotals,
	type SpendingPaymentTotals,
	type DebtPayments,
	type SavingsPayments,
};
