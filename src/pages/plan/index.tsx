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

// const getSelectedPanel = (tab: string, dateRange: DateTime) => {
// 	const startDate = dateRange.startOf('month').toJSDate();
// 	const endDate = dateRange.startOf('month').toJSDate();

// 	switch (tab) {
// 		case 'Overview':
// 			// return <OverviewPanel startDate={startDate} endDate={endDate} />;
// 			return <PlanPanelOverview startDate={startDate} endDate={endDate} />;
// 		case 'Income':
// 			return <PlanPanelIncome startDate={startDate} endDate={endDate} />;
// 		case 'Spending':
// 			return <SpendingPanel />;
// 		case 'Savings':
// 			return <SavingsPanel />;
// 		case 'Debt':
// 			return <DebtPanel />;
// 		default:
// 			return <OverviewPanel startDate={startDate} endDate={endDate} />;
// 	}
// };

export default Plan;
