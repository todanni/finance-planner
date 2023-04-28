import { Category } from '@prisma/client';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';
import { Panel } from './Panel';

type PanelProps = {
	dateRange: DateTime;
};

const DebtPanel = ({ dateRange }: PanelProps) => {
	const { data: payments, isLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.DEBT,
		});

	const { data: balances } = api.balance.listByCategory.useQuery({
		category: Category.DEBT,
	});

	return (
		<Panel
			title='Debt'
			isLoading={isLoading}
			categories={[
				{
					title: 'Debt repayments',
					category: Category.DEBT,
					payments: payments,
				},
			]}
			balance={{
				title: 'Debt balance',
				category: Category.DEBT,
				balances: balances,
			}}
		/>
	);
};

export { DebtPanel };
