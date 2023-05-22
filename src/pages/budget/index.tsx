import { Card, Heading, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { useEffect, useState } from 'react';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { type BudgetSchema } from '~/types/schemas';
import { BudgetInputs } from '~/components/budget/BudgetInputs';
import { BudgetForm } from '~/components/budget/BudgetForm';
import { BudgetChart } from '~/components/budget/BudgetChart';

const budgetFormCategories = [
	{
		category: 'income',
		label: 'Income',
		placeholder: 'Salary',
		helpText: 'Your monthly income source and amount after tax',
	},
	{
		category: 'bills',
		label: 'Household bills',
		placeholder: 'Gas & electric',
		helpText: 'Rent, gas, electric, water, council tax, internet, phone',
	},
	{
		category: 'groceries',
		label: 'Groceries',
		placeholder: 'Food shop',
		helpText: 'Monthly food shop, toiletries, cleaning products',
	},
	{
		category: 'transport',
		label: 'Transport',
		placeholder: 'Fuel',
		helpText: 'Fuel, car insurance, car tax, service plan',
	},
	{
		category: 'debt',
		label: 'Debt',
		placeholder: 'Mortgage',
		helpText:
			'Min monthly payment for mortgage, credit card, loan repayment etc.',
	},
] as const;

const Budget: NextPage = () => {
	const [budgetItems, setBudgetItems] = useState<BudgetSchema[]>([]);

	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		const currentBudget = localStorage.getItem('budget');
		if (currentBudget) {
			console.log(JSON.parse(currentBudget));
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const parsedBudget: BudgetSchema[] = JSON.parse(currentBudget);
			setBudgetItems(parsedBudget);
		}
	}, [refresh]);

	return (
		<DefaultLayout currentLocation='budget'>
			<div className='my-2 grid gap-4 sm:grid-cols-3'>
				<div className='sm:col-span-3'>
					<Title className='text-center' size='medium'>
						Create a budget
					</Title>
					<Heading size='md' className='text-center text-lg'>
						Calculate your minimum monthly spending and set your spending goals.
					</Heading>
				</div>
				<Card className='flex flex-col gap-2 p-4'>
					<Title size='small'>Income and Spending</Title>
					<div className='flex flex-col gap-4 text-white'>
						{budgetFormCategories.map((category) => (
							<BudgetForm
								key={category.category}
								refresh={() => setRefresh(!refresh)}
								category={category.category}
								label={category.label}
								placeholder={category.placeholder}
								helpText={category.helpText}
							/>
						))}
					</div>
				</Card>
				<BudgetChart
					budgetItems={budgetItems}
					refresh={() => setRefresh(!refresh)}
				/>
				<BudgetInputs
					budgetItems={budgetItems}
					refresh={() => setRefresh(!refresh)}
				/>
			</div>
		</DefaultLayout>
	);
};

export default Budget;
