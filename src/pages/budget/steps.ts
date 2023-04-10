import { type Category } from '@prisma/client';

export type CategoryStep = Category & {
	helpText: string;
};

export type StepProps = {
	categories: CategoryStep[];
	title: string;
	description: string;
	notes: string[];
};

export type Step = {
	categories: CategoryStep[];
	title: string;
	description: string;
	notes: string[];
};

export const steps: StepProps[] = [
	{
		categories: [
			{
				id: 1,
				name: 'Income',
				helpText: '',
			},
		],
		title: 'Income',
		description: 'Your monthly income',
		notes: [
			'Use the form to add your income sources - e.g salary, pension, benefits.',
			'When specifying the number, please enter the net amount (post-tax).',
			'If you would like the tool to estimate your income based on the pre-tax amount, please use the planner, where you will have more advanced options.',
		],
	},
	{
		categories: [
			{
				id: 4,
				name: 'Bills',
				helpText: '',
			},
			{
				id: 5,
				name: 'Living Costs',
				helpText: '',
			},
			{
				id: 6,
				name: 'Discretionary',
				helpText: '',
			},
		],
		title: 'Spending',
		description: 'Your monthly outgoings',
		notes: [
			'This is the next step of understanding your financial situation.',
			'In order to see where your money is going, we can break down your spending into 3 categories - bills, living costs and discretionary spending.',
			'Start with inputting your household and other monthly bills - e.g rent, electricity, gas, internet.',
			'The living costs category is for the spending which entails your necessities - groceries, fuel, medication, transport, pets',
			'Finally, the discretionary spending will note how much you spend on wants, the things that make your life more enjoyable.',
			'Because of this, there are no set categories, so feel free to give your expenses their own names. ',
			'Some example may include haircut, eating out, travel, beauty procedures, hobbies. ',
		],
	},
	{
		categories: [
			{
				id: 2,
				name: 'Debt',
				helpText: '',
			},
		],
		title: 'Debt',
		description: 'Your monthly debt repayments',
		notes: [
			'No one likes debt but the fact is that most people have it.',
			"It's neither good or bad, it's just life",
			'Use the form to input the amount that goes towards your debt repayment monthly.',
		],
	},
	{
		categories: [
			{
				id: 3,
				name: 'Savings',
				helpText: '',
			},
		],
		title: 'Savings',
		description: 'Your monthly savings contributions',
		notes: [
			'If some of your money is going towards savings each month, use the form to specify the amount.',
			'Most of these savings categories are unfamiliar to you?',
			'We can help you understand them and how to best make use of your savings in the Planner tool.',
		],
	},
	{
		categories: [],
		title: 'Results',
		description: "Here's the breakdown of your income vs. your spending",
		notes: [],
	},
];
