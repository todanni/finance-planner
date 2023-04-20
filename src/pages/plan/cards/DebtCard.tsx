import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

const DebtCard = () => {
	const { data: sources } = api.debt.listForCurrentMonth.useQuery();
	const { data: total } = api.debt.totalForCurrentMonth.useQuery();
	const { data: balance } = api.debt.getTotalBalance.useQuery();

	return (
		<PlanCard
			section='debt'
			contents={{
				title: 'Debt repayments',
				totalPayments: total || 0,
				sources: sources,
				totalBalance: balance || 0,
				totalBalanceText: 'Total debt balance',
			}}
		/>
	);
};

export { DebtCard };
