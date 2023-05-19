import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Plan: NextPage = () => {
	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl'></div>
		</DefaultLayout>
	);
};

const getSelectedPanel = (tab: string, dateRange: DateTime) => {
	const startDate = dateRange.startOf('month').toJSDate();
	const endDate = dateRange.endOf('month').toJSDate();

	switch (tab) {
		case 'Overview':
			return <OverviewPanel startDate={startDate} endDate={endDate} />;
		case 'Income':
			return <IncomePanel />;
		case 'Spending':
			return <SpendingPanel />;
		case 'Savings':
			return <SavingsPanel />;
		case 'Debt':
			return <DebtPanel />;
		default:
			return <OverviewPanel startDate={startDate} endDate={endDate} />;
	}
};

export default Plan;
