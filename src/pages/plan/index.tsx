import { type NextPage } from 'next';
import PayForm from '~/components/payments/PayForm';
import { PaymentsTable } from '~/components/payments/Payments';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Plan: NextPage = () => {
	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl'></div>
		</DefaultLayout>
	);
};
const showSelectedView = (view: string) => {
	switch (view) {
		case 'table':
			return <PaymentsTable />;
		case 'form':
			return <PayForm />;
		// case 'chart':
		default:
			return null;
	}
};

export default Plan;
