import { Category } from '@prisma/client';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';
import { Panel } from './Panel';

type PanelProps = {
	dateRange: DateTime;
};

const SavingsPanel = ({ dateRange }: PanelProps) => {
	const { data: payments, isLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.SAVINGS,
		});

	const { data: balances } = api.balance.listByCategory.useQuery({
		category: Category.SAVINGS,
	});

	return (
		<Panel
			title='Savings'
			isLoading={isLoading}
			categories={[
				{
					title: 'Savings contributions',
					category: Category.SAVINGS,
					payments: payments,
				},
			]}
			balance={{
				title: 'Savings balance',
				category: Category.SAVINGS,
				balances: balances,
			}}
		/>
	);
};

export { SavingsPanel };
