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
	);
};

export { IncomePanel };

{
	/* <div className='flex flex-col'>
				<div className='flex justify-end gap-2'>
					<Button className='focus:outline-none inline-flex items-center text-sm font-medium text-white '>
						Add income
						<span className='ml-2 inline-flex items-center justify-center'>
							<Icon object='money' size='xs' colour='white' />
						</span>
					</Button>
					<Button className='focus:outline-none inline-flex items-center text-sm font-medium text-white '>
						Add deduction
						<span className='ml-2 inline-flex items-center justify-center'>
							<Icon object='tax' size='xs' colour='white' />
						</span>
					</Button>
				</div>

				{form && <PaymentForm category={form} />}
			</div> */
}
