import { Button, Heading, Paragraph, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { useSession } from 'next-auth/react';
import { PaymentForm } from './forms/PaymentForm';
import { Category } from '@prisma/client';
import DebtCard from './cards/DebtCard';
import IncomeCard from './cards/IncomeCard';
import SavingsCard from './cards/SavingsCard';
import SpendingCard from './cards/SpendingCard';
import React from 'react';

const Plan: NextPage = () => {
	const { data: session } = useSession();

	return (
		<DefaultLayout title='Plan | Finance Planner'>
			<div className='mt-8 flex items-end justify-between border-b border-stone-500 pb-2'>
				<div>
					<Title size='large'>Your plan</Title>
					<Heading size='medium' colour='white' className=''>
						View the details for your payments and balances
					</Heading>
				</div>
				<div className='flex justify-end gap-2'>
					<Paragraph>April 2023</Paragraph>
				</div>
			</div>
			{session && (
				<div className='my-10 grid grid-cols-2 gap-5'>
					<IncomeCard />
					<PaymentForm category={Category.INCOME} />
					<SpendingCard />
					<PaymentForm category={Category.BILL} />
					<DebtCard />
					<PaymentForm category={Category.DEBT} />
					<SavingsCard />
					<PaymentForm category={Category.SAVINGS} />
				</div>
			)}
		</DefaultLayout>
	);
};

const categoryOptions = [
	{ name: 'Income', value: Category.INCOME },
	{ name: 'Bills', value: Category.BILL },
	{ name: 'Living costs', value: Category.LIVING_COSTS },
	{ name: 'Discretionary', value: Category.DISCRETIONARY },
	{ name: 'Debt', value: Category.DEBT },
	{ name: 'Savings', value: Category.SAVINGS },
];

export default Plan;
