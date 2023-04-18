import { Button, Icon, PlanCard } from '@todanni/ui';
import { type NextPage } from 'next';
import { MinimalLayout } from '~/layouts/MinimalLayout';
import { api } from '~/utils/api';
import IncomeSection from './PlanSection';

const Plan: NextPage = () => {
	const { data: balances } = api.balance.listAll.useQuery();
	const { data: payments } = api.payment.listForCurrentMonth.useQuery();

	const incomePayments = payments?.filter(
		(payment) => payment.subCategory.categoryId === 1,
	);

	const debtPayments = payments?.filter(
		(payment) => payment.subCategory.categoryId === 2,
	);

	const savingsPayments = payments?.filter(
		(payment) => payment.subCategory.categoryId === 3,
	);

	const spendingPayments = payments?.filter(
		(payment) => payment.subCategory.categoryId === 4 || 5 || 6,
	);

	console.log(payments);

	return (
		<MinimalLayout title='Plan | Finance Planner'>
			<div className='my-10 grid grid-cols-2 gap-10'>
				<IncomeSection payments={incomePayments} />

				<div></div>

				{/* Spending will have 3 categories:
				total living costs, total discretionary and total bills 
				*/}
				<PlanCard section='spending'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Icon object='money' colour='white' />
							<h2 className='text-lg text-white'>Monthly spending</h2>
						</div>
						<p className='text-lg text-white'>£1,081.45</p>
					</div>
					<div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Bills</p>
							<p className=' text-white/80'>£1,539.43</p>
						</div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Living costs</p>
							<p className=' text-white/80'>£340.43</p>
						</div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Discretionary</p>
							<p className=' text-white/80'>£767.43</p>
						</div>
					</div>
				</PlanCard>
				<div></div>

				{/* Debt and savings will be different - include balances */}
				<PlanCard section='debt'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Icon object='money' colour='white' />
							<h2 className='text-lg text-white'>Monthly debt repayments</h2>
						</div>
						<p className='text-lg text-white'>£1,081.45</p>
					</div>
					<div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Monzo loan</p>
							<p className=' text-white/80'>£342.79</p>
						</div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Student loan</p>
							<p className=' text-white/80'>£545.43</p>
						</div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Credit card</p>
							<p className=' text-white/80'>£239.43</p>
						</div>
					</div>
				</PlanCard>
				<div></div>

				<PlanCard section='savings'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Icon object='money' colour='white' />
							<h2 className='text-lg text-white'>Monthly savings</h2>
						</div>
						<p className='text-lg text-white'>£677.00</p>
					</div>
					<div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Pension</p>
							<p className=' text-white/80'>£277.00</p>
						</div>
						<div className='flex justify-between'>
							<p className=' text-white/80'>Cash ISA</p>
							<p className=' text-white/80'>£400.00</p>
						</div>
					</div>
				</PlanCard>
				<div></div>

				<PlanCard section='default'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<h2 className='text-lg text-white'>Your payments and balances</h2>
						</div>
						<Button> Add data </Button>
					</div>
				</PlanCard>
				<div></div>
			</div>
		</MinimalLayout>
	);
};

export default Plan;
