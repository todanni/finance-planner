import { Card } from '@todanni/ui';
import { api } from '~/utils/api';
import { formatCurrency } from '~/utils/currency';

export const Balances = () => {
	return (
		<Card className='my-4 flex flex-col gap-2 p-4 text-white'>
			<UserBalances />
			<p>Total Savings Balance:</p>
			<p>Total Debt Balance:</p>
		</Card>
	);
};

const UserBalances = () => {
	const { data: balances } = api.balance.list.useQuery();

	const { data: sum } = api.balance.sumForCategory.useQuery({
		category: 'SAVINGS',
	});

	console.log(sum);

	return (
		<div className='flex flex-col gap-1 text-white'>
			<p className='font-bold'>Balance list:</p>
			{balances?.length === 0 && (
				<p className='text-green-600'>No balances found</p>
			)}
			{balances?.map((balance) => (
				<>
					<p className='ml-2 text-sm font-bold text-white'>
						{balance.balance.name}
					</p>
					<p className='ml-2 text-sm text-white/80'>
						Category: {balance.balance.category}
					</p>
					<p className='ml-2 text-sm text-white/80'>
						Last known balance: {formatCurrency(balance.amount)}
					</p>
				</>
			))}
		</div>
	);
};
