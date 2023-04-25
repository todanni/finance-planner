import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';
import { currentMonth } from '~/server/api/routers/transactions';

const SpendingCard = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: sources } = api.transactions.listByCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'BILL',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
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
