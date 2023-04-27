import { Category } from '@prisma/client';
import { Button, Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';
import { IncomeForm } from '../demo/IncomeSection';

type PanelProps = {
	dateRange: DateTime;
};

const IncomePanel = ({ dateRange }: PanelProps) => {
	const { data: incomePayments, isLoading: incomeLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.INCOME,
		});

	const { data: taxPayments, isLoading: taxLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.TAX,
		});

	if (taxLoading && incomeLoading) {
		return (
			<div className='mt-2'>
				<Heading size='large'>Loading...</Heading>
			</div>
		);
	}

	return (
		<div className='mt-2 flex gap-8'>
			<div className='w-1/2'>
				<Heading size='large'>Income</Heading>
				{incomePayments?.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No data about income</Heading>
						<Button size='small'>Add income data</Button>
					</div>
				)}
				{incomePayments?.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='medium'>{tx.subCategory.name}</Heading>
						<Heading size='medium'>{tx.name}</Heading>
						<Heading size='medium' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}
				<Heading size='large' className='mt-2'>
					Income deductions
				</Heading>
				{taxPayments?.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No data about deductions</Heading>
						<Button size='small'>Add income deduction</Button>
					</div>
				)}
				{taxPayments?.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='medium'>{tx.subCategory.name}</Heading>
						<Heading size='medium'>{tx.name}</Heading>
						<Heading size='medium' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}
			</div>
			<div className='flex w-1/2 flex-col text-white'>
				<Heading size='large'>Add income payment</Heading>
				<IncomeForm />
			</div>
		</div>
	);
};

export { IncomePanel };
