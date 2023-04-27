import {
	type Balance,
	type Category,
	type SubCategory,
	type Transaction,
} from '@prisma/client';

type Payment = {
	id: 5;
	amount: 1234;
	createdAt: '2023-04-23T16:10:29.155Z';
	name: 'RL';
	subCategoryId: 2;
	userId: 'clgqfe8zq0002jz34ofc2dilm';
	balanceId: null;
	subCategory: SubCategory;
};

type PanelCategory = {
	title: 'Income' | 'Spending' | 'Debt' | 'Savings' | 'Overview';
	isLoading: boolean;
	categories: {
		title: string;
		category: Category;
		payments?: (Transaction & {
			subCategory: SubCategory;
		})[];
		balances?: Balance[];
	}[];
};

export { type PanelCategory, type Payment };
