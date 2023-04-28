import { type DateTime } from 'luxon';
import { api } from '~/utils/api';
import { Panel } from './Panel';
import { Category } from '@prisma/client';

type PanelProps = {
	dateRange: DateTime;
};

const SpendingPanel = ({ dateRange }: PanelProps) => {
	const { data: payments, isLoading } =
		api.transactions.listForSpending.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
		});

	return (
		<Panel
			title='Income'
			isLoading={isLoading}
			categories={[
				{
					title: 'Living costs',
					category: Category.LIVING_COSTS,
					payments: payments?.lc,
				},
				{
					title: 'Bills',
					category: Category.BILL,
					payments: payments?.bills,
				},
				{
					title: 'Discretionary',
					category: Category.DISCRETIONARY,
					payments: payments?.discr,
				},
			]}
		/>
	);
};

export { SpendingPanel };
