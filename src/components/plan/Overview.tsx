import {
	DonutChart,
	Heading,
	PaymentsSummary,
	PlanCard,
	ShadowCard,
} from '@todanni/ui';
import { type Totals } from '~/types/Totals';
import { api } from '~/utils/api';

export type PanelProps = {
	startDate: Date;
	endDate: Date;
};

export const Overview = ({ startDate, endDate }: PanelProps) => {
	const { data: totals, isLoading: totalsLoading } =
		api.transactions.totalPerCategory.useQuery({
			startDate: startDate,
			endDate: endDate,
		});

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
			<Summary totals={totals} isLoading={totalsLoading} />
			<Breakdown totals={totals} isLoading={totalsLoading} />
			<Goals startDate={startDate} endDate={endDate} />
			<Balances startDate={startDate} endDate={endDate} />
		</div>
	);
};

type SummaryProps = {
	totals: Totals | undefined;
	isLoading: boolean;
};

const Summary = ({ totals, isLoading }: SummaryProps) => {
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!totals?.hasResults) {
		return <Heading>No results</Heading>;
	}

	return (
		<ShadowCard>
			<PaymentsSummary
				header='Payments summary'
				remaining={totals.REMAINING}
				categories={[
					{
						title: 'Income',
						total: totals.INCOME,
						subCategories: [
							{ title: 'Pre-tax deductions', total: totals.TAX },
							{ title: 'Transfers', total: totals.TRANSFERS },
						],
					},
					{
						title: 'Spending',
						total: totals.SPENDING,
						subCategories: [
							{ title: 'Bills', total: totals.BILL },
							{ title: 'Living costs', total: totals.LIVING_COSTS },
							{ title: 'Discretionary', total: totals.DISCRETIONARY },
						],
					},
					{
						title: 'Debt',
						total: totals.DEBT,
						subCategories: [],
					},
					{
						title: 'Savings',
						total: totals.SAVINGS,
						subCategories: [],
					},
				]}
			/>
		</ShadowCard>
	);
};

const Breakdown = ({ totals, isLoading }: SummaryProps) => {
	return (
		<PlanCard icon='chart' title='Payments breakdown'>
			{isLoading && <Heading>Loading...</Heading>}
			{!isLoading && totals && (
				<div className='flex'>
					<div className='w-1/2'>
						<DonutChart
							chartInputs={[
								{ label: 'Debt', amount: totals.DEBT, colour: '#dc2626' },
								{
									label: 'Savings',
									amount: totals.SAVINGS,
									colour: '#059669',
								},
								{ label: 'Bills', amount: totals.BILL, colour: '#eab308' },
								{
									label: 'Living costs',
									amount: totals.LIVING_COSTS,
									colour: '#fde047',
								},
								{
									label: 'Discretionary',
									amount: totals.DISCRETIONARY,
									colour: '#fef08a',
								},
							]}
						/>
					</div>
					<div className='flex w-1/2 flex-col items-end'>
						{/* <Heading>Needs</Heading>
						<Heading>Wants</Heading>
						<Heading>Savings</Heading>
						<Heading>Debt</Heading> */}
					</div>
				</div>
			)}
		</PlanCard>
	);
};
const Goals = ({}: PanelProps) => {
	return (
		<PlanCard icon='goal' title='Goals'>
			<div className='flex items-center justify-center'>
				<Heading>Coming soon!</Heading>
			</div>
		</PlanCard>
	);
};
const Balances = ({}: PanelProps) => {
	const { data: savingsBalance } = api.savings.estimateTotalBalance.useQuery();

	console.log(savingsBalance);
	return (
		<PlanCard icon='percentReceipt' title='Balance summary'>
			<div className='flex items-center justify-center'>
				<Heading>Coming soon!</Heading>
			</div>
		</PlanCard>
	);
};
