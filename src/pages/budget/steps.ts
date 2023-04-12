export type Step = {
	title: string;
	subTitle: string;
	sections: StepSection[];
	nextButtonText: string;
	categoryId: number;
	hasForm: boolean;
};

export type StepSection = {
	heading: string;
	subHeading: string;
	paragraph: string;
	hasForm?: boolean;
};

export const steps: Step[] = [
	{
		title: 'Intro',
		subTitle: 'Getting started',
		nextButtonText: "Let's do this",
		hasForm: false,
		categoryId: 0,
		sections: [
			{
				heading: 'How does this work?',
				subHeading: 'We are going to start simple',
				paragraph:
					'Take a previous month as an example of your income and spending. ' +
					'Input the amount you have spent on each category. ' +
					'The chart will update so you can see the amount spent on each.',
				hasForm: false,
			},
			{
				heading: 'Who is this tool for?',
				subHeading: 'When to use the budget tool instead of the planner',
				paragraph:
					'If you just quickly want to visualise your spending, use this tool. ' +
					'You can come back every month and add more data and compare with previous months. ' +
					'If you want to better plan for the future, estimate income, savings or debt balances, use the Planner instead.',
				hasForm: false,
			},
			{
				heading: 'Will this data be shared with anyone?',
				subHeading: 'What we do with your data',
				paragraph:
					'Your data will not be shared with anyone. ' +
					'Any data you submit is stored in your private account record and only accessible through your login credentials. ' +
					'At any point in time you can request all data records asscociated with your account to be deleted.',
				hasForm: false,
			},
		],
	},
	{
		title: 'Income',
		categoryId: 1,
		subTitle: 'Your total monthly income',
		nextButtonText: 'Next',
		hasForm: true,
		sections: [
			{
				heading: 'Your income sources',
				subHeading:
					'Specify the amount you receive monthly and choose a category',
				paragraph:
					'Please input the post-tax amount. For pre-tax amounts and tax calculation, use the planner.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Necesseties',
		categoryId: 5,
		subTitle: 'Your needs',
		nextButtonText: 'Next',
		hasForm: true,
		sections: [
			{
				heading: 'Living costs',
				subHeading: 'Your necessities',
				paragraph:
					'Input the amount you pay for groceries, fuel, transportation, medication etc.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Bills',
		categoryId: 4,
		subTitle: 'Your monthly bill payments',
		nextButtonText: "That's all my bills",
		hasForm: true,
		sections: [
			{
				heading: 'Bills',
				subHeading: 'Add the amount you pay for each of your bills',
				paragraph:
					'Examples of bills - water, electricity, car insurance, rent. ' +
					'If you have a mortgage, please specify that in the Debt section which is next.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Wants',
		categoryId: 6,
		subTitle: 'Your monthly discretionary spending',
		nextButtonText: "That's all my spending",
		hasForm: true,
		sections: [
			{
				heading: 'Discretionary',
				subHeading: 'See how much you spend on wants',
				paragraph:
					'This category is for your discretionary spending, the things that make your life more enjoyable.' +
					'Because of this, there are no set categories - just give them your own names.' +
					'Some examples may include eating out, traveling, beauty procedures as well as any hobbies.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Debt',
		categoryId: 2,
		subTitle: 'Your monthly debt repayment',
		nextButtonText: "That's all my debt",
		hasForm: true,
		sections: [
			{
				heading: 'No one likes debt but most people have it',
				subHeading: "Let's see how to optimise it",
				paragraph:
					'Include your monthly payments that go towards debt repayment.' +
					'This may include mortgage, car payment, personal loans, etc.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Savings',
		categoryId: 3,
		subTitle: 'Your monthly savings contributions',
		nextButtonText: 'Next',
		hasForm: true,
		sections: [
			{
				heading: 'The money you put away...',
				subHeading: '... for rainy days',
				paragraph:
					'If some of your income is going into savings each month, use the form to specify the amount.',
				hasForm: true,
			},
		],
	},
	{
		title: 'Results',
		subTitle: "You're all done!",
		nextButtonText: 'I want more free stuff!',
		hasForm: false,
		categoryId: 0,
		sections: [
			{
				heading: 'Income',
				subHeading: 'Could you receive more?',
				paragraph:
					'If your income is taxed, the planner can help you see if your tax is correct.',
				hasForm: false,
			},
			{
				heading: 'Spending',
				subHeading: 'Are there areas you could improve?',
				paragraph:
					'Using the planner, we can help you create a plan to optimise your spending using a strategy that fits your goals.',
				hasForm: false,
			},
			{
				heading: 'Savings',
				subHeading: 'Are your savings working hard enough for you?',
				paragraph:
					'The planner can help you choose the best place to put your money away for the highest returns.',
				hasForm: false,
			},
			{
				heading: 'Debt',
				subHeading: 'Could you save money on your debt repayment?',
				paragraph:
					"It's possible to reduce your debt faster or for less money and the planner can help you understand how to do that.",
				hasForm: false,
			},
		],
	},
];
