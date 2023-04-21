import { PlanCard } from '@todanni/ui';
import { currentMonth } from '~/server/api/routers/transactions';
import { api } from '~/utils/api';

// type IncomeCardProps = {
// 	range: string;
// };

const IncomeCard = () => {
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
