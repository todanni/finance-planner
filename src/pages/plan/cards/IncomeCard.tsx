import { PlanCard } from '@todanni/ui';
import { api } from '~/utils/api';

const IncomeCard = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: sources } = api.transactions.listByCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'INCOME',
	});

	const { data: total } = api.transactions.totalForCategory.useQuery({
		startDate: firstDay,
		endDate: lastDay,
		category: 'INCOME',
	});

	return (
		<PlanCard
			section='income'
			contents={{
				title: 'Income',
				totalPayments: total?._sum.amount || 0,
				sources: sources,
			}}
		/>
	);
};

export default IncomeCard;
