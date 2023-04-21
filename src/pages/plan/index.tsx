import { Heading, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import DebtCard from './cards/DebtCard';
import IncomeCard from './cards/IncomeCard';
import SavingsCard from './cards/SavingsCard';
import SpendingCard from './cards/SpendingCard';
import { useSession } from 'next-auth/react';

const Plan: NextPage = () => {
	const { data: session } = useSession();

	if (!session) {
		return (
			<DefaultLayout title='Plan | Finance Planner'>
				<Title size='large' className='mt-4 text-center'>
					Your plan
				</Title>
				<Heading size='medium' colour='white' className='text-center'>
					Log in to view your payments and balances
				</Heading>
			</DefaultLayout>
		);
	}

	return (
		<DefaultLayout title='Plan | Finance Planner'>
			<Title size='large' className='mt-4 text-center'>
				Your plan
			</Title>
			<Heading size='medium' colour='white' className='text-center'>
				View the details for your payments and balances
			</Heading>

			<div className='my-10 grid grid-cols-2 gap-5'>
				<IncomeCard />
				<SpendingCard />
				<DebtCard />
				<SavingsCard />
			</div>
		</DefaultLayout>
	);
};

export default Plan;
