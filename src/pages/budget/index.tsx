import {
	Button,
	Card,
	DonutChart,
	Heading,
	NumberInput,
	TextInput,
	Title,
	Icon,
} from '@todanni/ui';
import { type NextPage } from 'next';
import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type z } from 'zod';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { type budgetSchema } from '~/types/schemas';
import { formatCurrency } from '~/utils/currency';
import _ from 'lodash';

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
				{/* <BudgetInfo /> */}
				<Card className='flex flex-col gap-2 p-4'>
					<Title size='small'>Income and Spending</Title>
					<div className='flex flex-col gap-4 text-white'>
						<BudgetForm
							refresh={() => setRefresh(!refresh)}
							category='income'
							label='Income'
							placeholder='Salary'
							helpText='Your monthly income source and amount after tax'
						/>
						<BudgetForm
							refresh={() => setRefresh(!refresh)}
							category={'bills'}
							label={'Household bills'}
							placeholder={'Gas & electric'}
							helpText='Rent, gas, electric, water, council tax, internet, phone'
						/>

						<BudgetForm
							refresh={() => setRefresh(!refresh)}
							category='groceries'
							label='Groceries'
							placeholder='Food shop'
							helpText='Monthly food shop, toiletries, cleaning products'
						/>

						<BudgetForm
							refresh={() => setRefresh(!refresh)}
							category='transport'
							label='Transport'
							placeholder='Fuel'
							helpText='Fuel, car insurance, car tax, service plan'
						/>

						<BudgetForm
							refresh={() => setRefresh(!refresh)}
							category={'debt'}
							label={'Debt repayment'}
							placeholder={'Mortgage'}
							helpText='Min monthly payment for mortgage, credit card, loan repayment etc.'
						/>
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

type BudgetFormProps = {
	category: string;
	placeholder: string;
	label: string;
	helpText?: string;
	refresh: () => void;
};

type BudgetSchema = z.infer<typeof budgetSchema>;

const BudgetForm = ({
	category,
	label,
	placeholder,
	helpText,
	refresh,
}: BudgetFormProps) => {
	const { register, handleSubmit, reset } = useForm<BudgetSchema>({});

	const onSubmit: SubmitHandler<BudgetSchema> = (data) => {
		data.category = category;

		const currentBudget = localStorage.getItem('budget');
		if (!currentBudget) {
			localStorage.setItem('budget', JSON.stringify([data]));
			reset();
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const currentValue: BudgetSchema[] = JSON.parse(currentBudget);
		currentValue.push(data);
		localStorage.setItem('budget', JSON.stringify(currentValue));
		reset();
		refresh();
	};

	return (
		<form
			className='grid grid-cols-3 gap-x-4 gap-y-1'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor={category + '-name'} className='text-white'>
				{label}
			</label>
			<label htmlFor={category + '-amount'} className='text-white'></label>
			<div />
			<TextInput
				id={category + '-name'}
				placeholder={placeholder}
				{...register('name')}
			/>
			<NumberInput
				id={category + '-amount'}
				placeholder='£100.00'
				{...register('amount', { valueAsNumber: true })}
			/>
			<Button
				size='small'
				text='Add'
				colour='green'
				className='col-start-3 row-start-2'
				type='submit'
			/>
			<p className='mt-1 text-sm italic text-white/60 sm:col-span-3'>
				{helpText}
			</p>
		</form>
	);
};

const BudgetChart = ({ budgetItems }: BudgetOutputProps) => {
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
		<Card className='flex flex-col justify-between gap-4 p-4'>
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
		</Card>
	);
};

type BudgetOutputProps = {
	budgetItems: BudgetSchema[];
	refresh: () => void;
};

const BudgetInputs = ({ budgetItems, refresh }: BudgetOutputProps) => {
	const onReset = () => {
		localStorage.setItem('budget', JSON.stringify([]));
		refresh();
	};

	return (
		<Card className='flex flex-col p-4'>
			<div className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<Icon object='arrowLeft' size='xs' />
					<p className='text-sm text-white/60'>{`${budgetItems.length}/${budgetItems.length}`}</p>
					<Icon object='arrowRight' size='xs' />
				</div>
			</div>

			<div className='my-2 grid grid-cols-3 gap-1'>
				{budgetItems?.map((item) => (
					<>
						<p className='text-white'>{_.capitalize(item.category)}</p>
						<p className='text-white'>{_.capitalize(item.name)}</p>
						<p className='text-right text-white'>
							{formatCurrency(item.amount)}
						</p>
					</>
				))}
			</div>
			<div className='mt-auto grid grid-cols-2 gap-4'>
				<Button
					text='Reset all data'
					colour='red'
					size='small'
					onClick={() => onReset()}
				/>
				<Button text='Save my data' colour='green' size='small' />
			</div>
		</Card>
	);
};

export default Budget;
