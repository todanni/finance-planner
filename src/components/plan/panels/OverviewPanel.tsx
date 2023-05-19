/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResponsiveGrid } from '@todanni/ui';
import { OverviewCard } from '../cards/OverviewCard';
import { api } from '~/utils/api';

export type OverviewPanelProps = {
	startDate: Date;
	endDate: Date;
};

const OverviewPanel = ({ startDate, endDate }: OverviewPanelProps) => {
	// const {data:spendingPayments, isLoading:spendingIsLoading, isError:spendingIsError} =
	const { data: spendingTotals, isLoading: spendingLoading } =
		api.transactions.totalForSpending.useQuery({
			startDate: startDate,
			endDate: endDate,
		});

	const { data: incomeTotals, isLoading: incomeLoading } =
		api.totals.income.useQuery({ startDate: startDate, endDate: endDate });

	const { data: savingsContributions, isLoading: savingsLoading } =
		api.totals.savings.useQuery({ startDate: startDate, endDate: endDate });

	return (
		<div className='my-4'>
			<ResponsiveGrid>
				<OverviewCard
					income={{
						start: incomeTotals?.income,
						middle: incomeTotals?.benefits,
						end: incomeTotals?.deductions,
						hasData: true,
						isLoading: incomeLoading,
					}}
					spending={{
						start: spendingTotals?.categories[0].total, // living costs
						middle: spendingTotals?.categories[1].total, // bills
						end: spendingTotals?.categories[2].total, // discretionary
						hasData: false,
						isLoading: spendingLoading,
					}}
					savings={{
						start: savingsContributions, // contributions
						middle: 0, // interest
						end: 0, // balance
						hasData: false,
						isLoading: savingsLoading,
					}}
					debt={{
						start: 0, //contributions
						middle: 0, // interest
						end: 0, // balance
						hasData: false,
						isLoading: false,
					}}
					remaining={0}
				/>
			</ResponsiveGrid>
		</div>
	);
};

export default OverviewPanel;
