import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import DebtForm from './DebtSection';
import IncomeForm from './IncomeSection';
import SpendingForm from './SpendingSection';

const Demo: NextPage = () => {
	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<IncomeForm />
				</div>
			</div>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<SpendingForm />
				</div>
			</div>
			<div className='mt-4 rounded-xl border-2 border-gray-700 p-6 text-white'>
				<div className='grid grid-cols-2'>
					<DebtForm />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Demo;
