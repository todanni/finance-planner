import { type SubCategory, type Transaction } from '@prisma/client';

type Totals = {
	INCOME: number;
	BILL: number;
	LIVING_COSTS: number;
	DISCRETIONARY: number;
	DEBT: number;
	SAVINGS: number;
	TAX: number;
	SPENDING: number;
	hasResults: boolean;
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

export { type Totals, type SpendingPayments };
