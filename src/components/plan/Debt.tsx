import { Heading, PaymentsSummary, PlanCard } from '@todanni/ui';
import { type DebtPayments } from '~/types/Totals';
import { api } from '~/utils/api';

type PanelProps = {
	startDate: Date;
	endDate: Date;
};

export const Debt = ({ startDate, endDate }: PanelProps) => {
	const { data: payments, isLoading: loading } =
		api.transactions.totalForDebt.useQuery({
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
	payments: DebtPayments | undefined;
	loading: boolean;
};

const Summary = ({ payments }: SummaryProps) => {
	return (
		<PlanCard icon='debt' title={'Debt repayments and balances'}>
			{payments && <PaymentsSummary categories={payments.categories} />}
		</PlanCard>
	);
};

const Balances = ({}: PanelProps) => {
	const { data: savingsBalance } = api.savings.estimateTotalBalance.useQuery();

	console.log(savingsBalance);
	return (
		<PlanCard icon='percentReceipt' title='Debt balance'>
			<div className='p-2'>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Virgin Money</Heading>
					<Heading size='small'>1.99%</Heading>
					<Heading size='small'>266,734.56£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Audi</Heading>
					<Heading size='small'>10.5%</Heading>
					<Heading size='small'>28,028.47£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Student Loans</Heading>
					<Heading size='small'>6.90%</Heading>
					<Heading size='small'>19,106.49£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Novuna</Heading>
					<Heading size='small'>0.00%</Heading>
					<Heading size='small'>2,560.49£</Heading>
				</div>
				<div className='flex items-center justify-between gap-2'>
					<Heading size='small'>Monzo Loan</Heading>
					<Heading size='small'>16.5%</Heading>
					<Heading size='small'>1,701.02£</Heading>
				</div>
				<div className='mt-2 flex items-center justify-between gap-2'>
					<Heading size='medium'>Total</Heading>
					<Heading size='medium'>290,102.57£</Heading>
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
