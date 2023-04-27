import { Button, Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';

type PanelProps = {
	dateRange: DateTime;
};

const SpendingPanel = ({ dateRange }: PanelProps) => {
	const { data: payments, isLoading } =
		api.transactions.listForSpending.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
		});

	if (isLoading) {
		return <Heading>Loading...</Heading>;
	}

	return (
		<div className='mt-2 flex gap-8'>
			<div className='w-1/2'>
				<Heading size='large'>Spending</Heading>
				<Heading size='medium' className='mt-2'>
					Bills
				</Heading>
				{payments?.bills.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No bill payments</Heading>
						<Button size='small'>Add bill payment</Button>
					</div>
				)}
				{payments?.bills.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='small'>{tx.subCategory.name}</Heading>
						<Heading size='small'>{tx.name}</Heading>
						<Heading size='small' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}

				<Heading size='medium' className='mt-2'>
					Living costs
				</Heading>
				{payments?.lc.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No living costs payments</Heading>
						<Button size='small'>Add living costs payment</Button>
					</div>
				)}
				{payments?.lc.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='small'>{tx.subCategory.name}</Heading>
						<Heading size='small'>{tx.name}</Heading>
						<Heading size='small' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}
				<Heading size='medium' className='mt-2'>
					Discretionary
				</Heading>
				{payments?.discr.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No discretionary payments</Heading>
						<Button size='small'>Add discretionary payment</Button>
					</div>
				)}
				{payments?.discr.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='small'>{tx.subCategory.name}</Heading>
						<Heading size='small'>{tx.name}</Heading>
						<Heading size='small' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}
			</div>
		</div>
	);
};

export { SpendingPanel };
