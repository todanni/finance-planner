import {
	Heading,
	Icon,
	Paragraph,
	type IconObject,
	DonutChart,
	Button,
	BalanceCard,
} from '@todanni/ui';
import { type DateTime } from 'luxon';
import { type Totals } from '~/types/Totals';
import { api } from '~/utils/api';

type PanelProps = {
	dateRange: DateTime;
};

const OverviewPanel = ({ dateRange }: PanelProps) => {
	const { data: totals, isLoading: totalsLoading } =
		api.transactions.totalPerCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
		});

	const { data: count, isLoading } = api.transactions.count.useQuery();

	if (!isLoading && !count) {
		return (
			<div>
				<Heading size='large'>Some getting started screen</Heading>
			</div>
		);
	}

	if (totalsLoading) {
		return (
			<div className='mt-2'>
				<Heading size='large'>Overview</Heading>
				<div>Loading...</div>
			</div>
		);
	}

	if (!totals?.hasResults) {
		return (
			<div className='mt-2 flex justify-between'>
				<Heading size='medium' className='w-1/2'>
					No payments found for this month. Do you want to add them or import
					them from a different month?
				</Heading>
				<div className='grid grid-cols-2 gap-2'>
					<Button text='Input data' />
					<Button text='Import from month' />
				</div>
			</div>
		);
	}

	return (
		<div className='mt-2 grid auto-rows-fr grid-cols-2 gap-6'>
			<PaymentsSummary totals={totals} />
			<BalanceSummary />
			<PaymentsInsights totals={totals} />
			<GoalsSummary />
		</div>
	);
};

const GoalsSummary = () => {
	return (
		<div className='flex flex-col gap-4'>
			<Heading size='large' className='text-right'>
				Goals
			</Heading>
			<BalanceCard
				contents={{
					title: 'Goals',
					totalPayments: 0,
				}}
			/>
		</div>
	);
};

const BalanceSummary = () => {
	const { isLoading } = api.balance.list.useQuery();

	if (isLoading) {
		return (
			<div className=''>
				<Heading size='large'>Loading balances</Heading>
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-4'>
			<Heading size='large' className='text-right'>
				Balance summary
			</Heading>
			<BalanceCard
				section='spending'
				contents={{
					title: 'Assets balance',
					totalPayments: 375000.11,
				}}
			/>
			<BalanceCard
				section='debt'
				contents={{
					title: 'Debt balance',
					totalPayments: 292426.36,
				}}
			/>
			<BalanceCard
				section='savings'
				contents={{
					title: 'Savings balance',
					totalPayments: 9924.62,
				}}
			/>
			<BalanceCard
				section='income'
				contents={{
					title: 'Remaining balance',
					totalPayments: 627.82,
				}}
			/>
			<BalanceCard
				contents={{
					title: 'Networth estimate',
					totalPayments: 69859.25,
				}}
			/>
		</div>
	);
};

const PaymentsInsights = ({ totals }: SummaryProps) => {
	return (
		<div className='mt-2 flex flex-col'>
			<Heading size='large'>Payments insights</Heading>
			<div className='flex flex-col items-center'>
				<div className=''>
					<DonutChart
						chartInputs={[
							{ label: 'Debt', amount: totals.DEBT, colour: '#dc2626' },
							{ label: 'Savings', amount: totals.SAVINGS, colour: '#059669' },
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
				<div className='flex gap-2'>
					<Paragraph>
						Needs {Math.round((totals.BILL / totals.INCOME) * 100)}%
					</Paragraph>
					<Paragraph>
						Wants {Math.round((totals.DISCRETIONARY / totals.INCOME) * 100)}%
					</Paragraph>
					<Paragraph>
						Debt {Math.round((totals.DEBT / totals.INCOME) * 100)}%
					</Paragraph>
					<Paragraph>
						Savings {Math.round((totals.SAVINGS / totals.INCOME) * 100)}%
					</Paragraph>
				</div>
			</div>
		</div>
	);
};

type SummaryProps = {
	totals: Totals;
};

const PaymentsSummary = ({ totals }: SummaryProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<Heading size='large'>Payments summary</Heading>
			<PaymentsHeading
				iconObject='money'
				colour='income'
				title='Income'
				total={totals.INCOME}
			/>
			<PaymentsSubheading title='Pre-tax deductions' total={totals.TAX} />
			<PaymentsHeading
				iconObject='wallet'
				colour='spending'
				title='Spending'
				total={totals.SPENDING}
			/>
			<PaymentsSubheading title='Bills' total={totals.BILL} />
			<PaymentsSubheading title='Living costs' total={totals.LIVING_COSTS} />
			<PaymentsSubheading title='Discretionary' total={totals.DISCRETIONARY} />
			<PaymentsHeading
				iconObject='bank'
				colour='debt'
				title='Debt repayments'
				total={totals.DEBT}
			/>
			<PaymentsHeading
				iconObject='piggy'
				colour='savings'
				title='Savings contributions'
				total={totals.SAVINGS}
			/>
		</div>
	);
};

type PaymentsHeadingProps = {
	iconObject: IconObject;
	colour: 'income' | 'debt' | 'savings' | 'spending';
	title: string;
	total: number;
};

const PaymentsHeading = ({
	iconObject,
	colour,
	title,
	total,
}: PaymentsHeadingProps) => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<Icon object={iconObject} colour={colour} size='small' />
				<Heading size='medium' colour='white'>
					{title}
				</Heading>
			</div>
			<Heading size='medium' colour='white' className='text-right'>
				£{total.toLocaleString('en-UK')}
			</Heading>
		</div>
	);
};

type SubheadingProps = {
	title: string;
	total: number;
};

const PaymentsSubheading = ({ title, total }: SubheadingProps) => {
	return (
		<div className='ml-10 flex items-center justify-between gap-2'>
			<Heading size='small'>{title}</Heading>
			<Heading size='small'>£{total.toLocaleString('en-UK')}</Heading>
		</div>
	);
};

export { OverviewPanel };
