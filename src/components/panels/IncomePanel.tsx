import { Category } from '@prisma/client';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';
import { Panel } from './Panel';

type PanelProps = {
	dateRange: DateTime;
};

const IncomePanel = ({ dateRange }: PanelProps) => {
	const { data: incomePayments, isLoading: incomeLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.INCOME,
		});

	const { data: taxPayments, isLoading: taxLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.TAX,
		});

	return (
		<div className='mt-2 flex gap-8'>
			<Panel
				title='Income'
				isLoading={incomeLoading && taxLoading}
				categories={[
					{
						title: 'Income',
						category: Category.INCOME,
						payments: incomePayments,
					},
					{
						title: 'Income deductions',
						category: Category.TAX,
						payments: taxPayments,
					},
				]}
			/>
		</div>
	);
};

export { IncomePanel };
