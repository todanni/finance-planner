import { Category } from '@prisma/client';
import { Button, Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';
import { api } from '~/utils/api';

type PanelProps = {
	dateRange: DateTime;
};

const SavingsPanel = ({ dateRange }: PanelProps) => {
	const { data: payments, isLoading: paymentsLoading } =
		api.transactions.listByCategory.useQuery({
			startDate: dateRange.startOf('month').toJSDate(),
			endDate: dateRange.endOf('month').toJSDate(),
			category: Category.SAVINGS,
		});

	if (paymentsLoading) {
		return (
			<div className='mt-2'>
				<Heading size='large'>Loading...</Heading>
			</div>
		);
	}

	return (
		<div className='mt-2 flex gap-8'>
			<div className='w-1/2'>
				<Heading size='large'>Savings contributions</Heading>
				{payments?.length === 0 && (
					<div className='flex justify-between'>
						<Heading size='medium'>No savings contributions</Heading>
						<Button size='small'>Add savings contribution</Button>
					</div>
				)}
				{payments?.map((tx) => (
					<div key={tx.id} className='grid grid-cols-3'>
						<Heading size='medium'>{tx.subCategory.name}</Heading>
						<Heading size='medium'>{tx.name}</Heading>
						<Heading size='medium' className='text-right'>
							£{tx.amount.toLocaleString('en-UK')}
						</Heading>
					</div>
				))}
				<Heading size='large' className='mt-2'>
					Savings balances
				</Heading>
				<Heading size='medium' className='mt-2'>
					Coming soon!
				</Heading>
			</div>
		</div>
	);
};

export { SavingsPanel };
