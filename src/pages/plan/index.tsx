import { Heading, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { useSession } from 'next-auth/react';
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
			</div>
			{session && <PlanBreakdown />}
		</DefaultLayout>
	);
};

const PlanBreakdown = () => {
	return (
		<div className='my-4 rounded-xl border border-stone-600 p-4'>
			<div className='grid grid-cols-2'>
				<div className='grid grid-cols-3'>
					{/* For each category... */}
					<div className='col-span-3 mb-2 flex justify-between gap-2'>
						<h1 className='text-extrabold text-lg text-white'>Remaining</h1>
						<h1 className='text-extrabold text-lg text-white'>£567.89</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Plan;
