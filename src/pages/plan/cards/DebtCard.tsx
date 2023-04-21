import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

const DebtCard = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: sources } = api.transactions.list.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'DEBT',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'DEBT',
	});

	return (
		<PlanCard
			section='debt'
			contents={{
				title: 'Debt repayments',
				totalPayments: total?._sum.amount || 0,
				sources: sources,
				// totalBalance: balance || 0,
				// totalBalanceText: 'Total debt balance',
			}}
		/>
	);
};

export default DebtCard;
