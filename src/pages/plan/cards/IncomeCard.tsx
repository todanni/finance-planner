import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

type IncomeCardProps = {
	range: string;
};

const IncomeCard = () => {
	const { data: sources } = api.income.listForCurrentMonth.useQuery();
	const { data: total } = api.income.totalForCurrentMonth.useQuery();

	return (
		<PlanCard
			section='income'
			contents={{
				title: 'Income',
				totalPayments: total || 0,
				sources: sources,
			}}
		/>
	);
};

export { IncomeCard };
