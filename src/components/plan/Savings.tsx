import { PlanCard, PaymentsSummary, Heading } from '@todanni/ui';
import { type SavingsPayments } from '~/types/Totals';
import { api } from '~/utils/api';

type PanelProps = {
	startDate: Date;
	endDate: Date;
};

export const Savings = ({ startDate, endDate }: PanelProps) => {
	const { data: payments, isLoading: loading } =
		api.transactions.totalForSavings.useQuery({
			startDate: startDate,
			endDate: endDate,
		});

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
			<Summary payments={payments} loading={loading} />
			<Balances startDate={startDate} endDate={endDate} />
			<Goals startDate={startDate} endDate={endDate} />
		</div>
	);
};
type SummaryProps = {
	payments: SavingsPayments | undefined;
	loading: boolean;
};

const Summary = ({ payments }: SummaryProps) => {
	return (
		<PlanCard icon='debt' title={'Savings'}>
			{payments && <PaymentsSummary categories={payments.categories} />}
		</PlanCard>
	);
};

const Balances = ({}: PanelProps) => {
	const { data: savingsBalance } = api.savings.estimateTotalBalance.useQuery();

	console.log(savingsBalance);
	return (
		<PlanCard icon='percentReceipt' title='Savings balance'>
			<div className='p-2'>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Cash ISA</Heading>
					<Heading size='small'>3.00%</Heading>
					<Heading size='small'>800.47£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Stocks ISA</Heading>
					<Heading size='small'></Heading>
					<Heading size='small'>307.47£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Pension HL</Heading>
					<Heading size='small'></Heading>
					<Heading size='small'>4307.47£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Pension RL</Heading>
					<Heading size='small'></Heading>
					<Heading size='small'>4107.47£</Heading>
				</div>
			</div>
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
