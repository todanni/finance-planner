import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';
import { currentMonth } from '~/server/api/routers/transactions';

const SavingsCard = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: sources } = api.transactions.listByCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'SAVINGS',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'SAVINGS',
	});

	return (
		<PlanCard
			section='savings'
			contents={{
				title: 'Savings contributions',
				totalPayments: total?._sum.amount || 0,
				sources: sources,
				// totalBalance: balance || 0,
				// totalBalanceText: 'Total savings balance',
			}}
		/>
	);
};

export default SavingsCard;
