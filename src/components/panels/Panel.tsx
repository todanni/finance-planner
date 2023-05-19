import {
	type Balance,
	type Category,
	type SubCategory,
	type Transaction,
} from '@prisma/client';
import { ContainedIcon, Heading } from '@todanni/ui';
import { useState } from 'react';
import PaymentForm from '../forms/PaymentForm';
import BalanceForm from '../forms/BalanceForm';

type PanelCategoryProps = {
	title: 'Income' | 'Spending' | 'Debt' | 'Savings' | 'Overview';
	isLoading: boolean;
	categories: {
		title: string;
		category: Category;
		payments?: (Transaction & {
			subCategory: SubCategory;
		})[];
	}[];
	balance?: {
		title: string;
		category: Category;
		balances?:
			| (Balance & {
					subCategory: SubCategory;
			  })[];
	};
};

const Panel = ({ isLoading, categories, balance }: PanelCategoryProps) => {
	const [form, setShowForm] = useState<Category | undefined>();
	const [balanceForm, setShowBalanceForm] = useState<Category | undefined>();

	if (isLoading) {
		return (
			<div className='mt-2'>
				<Heading size='large'>Loading...</Heading>
			</div>
		);
	}

	return (
		<div className='my-4 grid grid-cols-3'>
			<div className='col-span-2'>
				{categories.map((category) => (
					<>
						<div
							key={category.category + '-heading'}
							className='flex items-center justify-between'>
							<Heading size='large' colour='savings'>
								{category.title}
							</Heading>
							<ContainedIcon
								object='plus'
								size='xs'
								onClick={() => setShowForm(category.category)}
								className='hover:cursor-pointer hover:bg-green-500'
							/>
						</div>
						{category.payments?.length === 0 && (
							<div
								key={category.category + '-no-payments'}
								className='flex justify-between'>
								<Heading size='small'>
									No {category.category.toLowerCase()} payments
								</Heading>
							</div>
						)}
						{category.payments?.map((payment) => (
							<div key={payment.id} className='grid grid-cols-3'>
								<Heading size='small'>{payment.subCategory.name}</Heading>
								<Heading size='small'>{payment.name}</Heading>
								<Heading size='medium' className='text-right'>
									£{payment.amount.toLocaleString('en-UK')}
								</Heading>
							</div>
						))}
					</>
				))}
			</div>
			<div className='flex flex-col'>
				{form && <PaymentForm category={form} />}
			</div>
			{balance && (
				<div className='col-span-2 mt-4'>
					<div className='flex items-center justify-between'>
						<Heading>{balance.title}</Heading>
						<ContainedIcon
							object='plus'
							size='xs'
							onClick={() => setShowBalanceForm(balance.category)}
							className='hover:cursor-pointer hover:bg-green-500'
						/>
					</div>
					{balance?.balances?.length === 0 && (
						<Heading size='small' colour='white'>
							No {balance.category.toLowerCase()} balances
						</Heading>
					)}
					{balance?.balances?.map((balance) => (
						<div key={balance.id} className='grid grid-cols-4'>
							<Heading size='small'>{balance.subCategory.name}</Heading>
							<Heading size='small'>{balance.name}</Heading>
							<Heading size='small'>{balance.minPayment}</Heading>
							<Heading size='small' className='text-right'>
								{balance.interestRate.toLocaleString('en-UK')}%
							</Heading>
						</div>
					))}
				</div>
			)}
			<div className='flex flex-col'>
				{balanceForm && <BalanceForm category={balanceForm} />}
			</div>
		</div>
	);
};

export { Panel };
