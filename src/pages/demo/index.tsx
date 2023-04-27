import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { IncomeForm, IncomeList } from './IncomeSection';
import { SpendingForm, SpendingList } from './SpendingSection';
import { DebtForm, DebtList } from './DebtSection';

const Demo: NextPage = () => {
	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<IncomeForm />
					<IncomeList />
				</div>
			</div>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<SpendingForm />
					<SpendingList />
				</div>
			</div>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<DebtForm />
					<DebtList />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Demo;
