import { Card, Heading, DonutChart, Title } from '@todanni/ui';
import { type BudgetSchema } from '~/types/schemas';
import { formatCurrency } from '~/utils/currency';

type BudgetOutputProps = {
	budgetItems: BudgetSchema[];
	refresh: () => void;
};

export const BudgetChart = ({ budgetItems }: BudgetOutputProps) => {
	const getColour = (index: number) => {
		const colours = [
			'#fca5a5',
			'#f87171',
			'#ef4444',
			'#fed7aa',
			'#fdba74',
			'#fb923c',
			'#fde68a',
			'#fcd34d',
			'#86efac',
			'#4ade80',
			'#34d399',
			'#67e8f9',
			'#22d3ee',
			'#a5b4fc',
			'#818cf8',
			'#f9a8d4',
			'#f472b6',
		];
		return colours[index] || '#4ADE80';
	};

	const parseBudgetData = () => {
		return budgetItems
			.filter((item) => item.category !== 'income')
			.map((item, index) => {
				return {
					label: item.name,
					amount: item.amount,
					colour: getColour(index),
				};
			});
	};
	const minSpending = () => {
		let remaining = 0;
		if (budgetItems) {
			remaining = budgetItems.reduce((acc, item) => {
				if (item.category !== 'income') {
					acc += item.amount;
				}
				return acc;
			}, 0);
		}

		return formatCurrency(remaining);
	};

	const remainingIncome = () => {
		let remaining = 0;
		if (budgetItems) {
			remaining = budgetItems.reduce((acc, item) => {
				if (item.category === 'income') {
					acc += item.amount;
				} else {
					acc -= item.amount;
				}
				return acc;
			}, 0);
		}

		return formatCurrency(remaining);
	};

	return (
		<Card className='p-4'>
			{budgetItems.length === 0 && (
				<div className='flex flex-col text-center text-lg font-semibold'>
					<Title size='small'>How to create your budget</Title>
					<Heading size='lg' colour='white' className='mt-2'>
						Income
					</Heading>
					<p className=' text-base font-light text-white/80'>
						Start by inputting your monthly income after tax.
					</p>
					<Heading size='lg' colour='white' className='mt-2'>
						Needs
					</Heading>
					<p className='text-base font-light text-white/80'>
						Your needs are going to be calculated from your bills, groceries and
						transport total costs.
					</p>
					<p className='font-semibolds mt-2 text-base text-white'>
						Be as specific as you want
					</p>
					<p className='mt-2 text-base font-light text-white/80'>
						You can either input the total amount or enter each bill, grocery
						shop and transport cost individually.
					</p>
					<Heading size='lg' colour='white' className='mt-2'>
						Wants
					</Heading>
					<p className=' text-base font-light text-white/80'>
						Your wants are the things you spend money on that are non-essential.
					</p>
					<p className=' text-base font-light text-white/80'>
						Examples of wants are eating out, entertainment, shopping, beauty
						procedures, etc.
					</p>
					<Heading size='lg' colour='white' className='mt-2'>
						Debt
					</Heading>
					<p className=' text-base font-light text-white/80'>
						If you have any debt (mortgage, credit cards, loans, etc.), input
						the minimum monthly amount you need to pay in order to avoid
						interest charges.
					</p>
				</div>
			)}
			{budgetItems.length > 0 && (
				<div className='flex h-full flex-col justify-between gap-4'>
					<DonutChart chartInputs={parseBudgetData()} />
					<div className='flex flex-col gap-2'>
						<p className='inline-flex font-bold text-white'>
							Minium monthly spending:
							<span className='ml-auto'>{minSpending()}</span>
						</p>
						<p className='inline-flex font-bold text-white'>
							Income left to spend:
							<span className='ml-auto'>{remainingIncome()}</span>
						</p>
					</div>
				</div>
			)}
		</Card>
	);
};
