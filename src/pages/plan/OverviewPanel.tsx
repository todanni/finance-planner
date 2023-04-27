import { Heading, Icon, type IconObject } from '@todanni/ui';
import { type DateTime } from 'luxon';
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
				{totalsLoading && <div>Loading...</div>}
			</div>
		);
	}

	if (!totals?.hasResults) {
		return (
			<div className='mt-2'>
				<Heading size='medium' className='w-1/2'>
					No payments found for this month. Do you want to add them or import
					them from a different month?
				</Heading>
			</div>
		);
	}

	return (
		<div className='mt-2 flex w-1/2 flex-col gap-2'>
			<Heading size='large'>Payments summary</Heading>
			<PaymentsHeading
				iconObject='money'
				colour='income'
				title='Income'
				total={totals.INCOME}
			/>
			<PaymentsSubheading title='Tax' total={totals.TAX} />
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
			<div className='mt-4 flex justify-between'>
				<Heading size='large'>Balance overview</Heading>
				<Heading size='medium'>Coming soon!</Heading>
			</div>
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
				<Heading size='medium'>{title}</Heading>
			</div>
			<Heading size='medium' className='text-right'>
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
