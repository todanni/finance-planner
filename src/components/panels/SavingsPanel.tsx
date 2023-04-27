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

	return (
		<div className='mt-2 flex gap-8'>
			<Panel
				title='Debt'
				isLoading={isLoading}
				categories={[
					{
						title: 'Savings contributions',
						category: Category.SAVINGS,
						payments: payments,
					},
				]}
			/>
		</div>
	);
};

export { SavingsPanel };
