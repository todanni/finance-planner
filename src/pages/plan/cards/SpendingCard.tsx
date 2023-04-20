import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

const SpendingCard = () => {
	const { data: sources } = api.spending.listForCurrentMonth.useQuery();
	const { data: total } = api.spending.totalForCurrentMonth.useQuery();

	return (
		<PlanCard
			section='spending'
			contents={{
				title: 'Spending',
				totalPayments: total || 0,
				sources: sources,
			}}
		/>
	);
};

export { SpendingCard };
