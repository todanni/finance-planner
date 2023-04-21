import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';
import { currentMonth } from '~/server/api/routers/transactions';

const SavingsCard = () => {
	const { startDate, endDate } = currentMonth();

	const { data: sources } = api.transactions.list.useQuery({
		startDate: startDate,
		endDate: endDate,
		category: 'INCOME',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: startDate,
		endDate: endDate,
		category: 'INCOME',
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
