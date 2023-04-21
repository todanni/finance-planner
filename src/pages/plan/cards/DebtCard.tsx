import { PlanCard } from '@todanni/ui';
import { currentMonth } from '~/server/api/routers/transactions';
import { api } from '~/utils/api';

const DebtCard = () => {
	const { startDate, endDate } = currentMonth();

	const { data: sources } = api.transactions.list.useQuery({
		startDate: startDate,
		endDate: endDate,
		category: 'DEBT',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: startDate,
		endDate: endDate,
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
