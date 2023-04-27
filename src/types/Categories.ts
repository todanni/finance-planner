import { Category } from '@prisma/client';

const IncomeCategory = {
	category: Category.INCOME,
	name: 'Income',
	subCategories: [],
};

const BillsCategory = {
	category: Category.BILL,
	name: 'Bills',
	subCategories: [],
};

const LivingCostsCategory = {
	category: Category.LIVING_COSTS,
	name: 'Living Costs',
	subCategories: [],
};

const DiscrCategory = {
	category: Category.DISCRETIONARY,
	name: 'Discretionary',
	subCategories: [],
};

const SavingsCategory = {
	category: Category.SAVINGS,
	name: 'Savings',
	subCategories: [],
};

const DebtCategory = {
	category: Category.DEBT,
	name: 'Debt',
	subCategories: [],
};

const TaxCategory = {
	category: Category.TAX,
	name: 'Tax',
	subCategories: [],
};

const SpendingCategory = {
	categories: [BillsCategory, LivingCostsCategory, DiscrCategory],
};

const MainCategories = [
	IncomeCategory,
	SpendingCategory,
	SavingsCategory,
	DebtCategory,
];

export {
	IncomeCategory,
	BillsCategory,
	LivingCostsCategory,
	DiscrCategory,
	SavingsCategory,
	DebtCategory,
	SpendingCategory,
	MainCategories,
};
