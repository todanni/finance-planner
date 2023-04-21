import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';
import { currentMonth } from '~/server/api/routers/transactions';

const SpendingCard = () => {
	const { startDate, endDate } = currentMonth();

	const { data: sources } = api.transactions.list.useQuery({
		startDate: startDate,
		endDate: endDate,
		category: 'BILL',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: startDate,
		endDate: endDate,
		category: 'BILL',
	});

	return (
		<PlanCard
			section='spending'
			contents={{
				title: 'Spending',
				totalPayments: total?._sum.amount || 0,
				sources: sources,
			}}
		/>
	);
};

export default SpendingCard;
