import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

const SavingsCard = () => {
	const { data: sources } = api.savings.listForCurrentMonth.useQuery();
	const { data: total } = api.savings.totalForCurrentMonth.useQuery();
	const { data: balance } = api.savings.getTotalBalance.useQuery();

	return (
		<PlanCard
			section='savings'
			contents={{
				title: 'Savings contributions',
				totalPayments: total || 0,
				sources: sources,
				totalBalance: balance || 0,
				totalBalanceText: 'Total savings balance',
			}}
		/>
	);
};

export { SavingsCard };
