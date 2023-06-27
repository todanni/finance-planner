import { Card, Icon, Button } from '@todanni/ui';
import _ from 'lodash';
import { type BudgetSchema } from '~/types/schemas';
import { formatCurrency } from '~/utils/currency';

type BudgetOutputProps = {
	budgetItems: BudgetSchema[];
	refresh: () => void;
};

export const BudgetInputs = ({ budgetItems, refresh }: BudgetOutputProps) => {
	const onReset = () => {
		localStorage.setItem('budget', JSON.stringify([]));
		refresh();
	};

	return (
		<Card className='flex flex-col p-4'>
			<div className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<Icon object='arrowLeft' size='xs' />
					<p className='text-sm '>{`${budgetItems.length}/${budgetItems.length}`}</p>
					<Icon object='arrowRight' size='xs' />
				</div>
			</div>

			{budgetItems.length === 0 && (
				<p className='mt-4 text-center font-light italic'>
					You will see a list of your inputs here...
				</p>
			)}
			<div className='my-2 grid grid-cols-3 gap-1'>
				{budgetItems?.map((item) => (
					<>
						<p className=''>{_.capitalize(item.category)}</p>
						<p className=''>{_.capitalize(item.name)}</p>
						<p className='text-right '>{formatCurrency(item.amount)}</p>
					</>
				))}
			</div>
			{budgetItems.length > 0 && (
				<div className='mt-auto grid grid-cols-2 gap-4'>
					<Button
						text='Reset all data'
						colour='red'
						size='small'
						onClick={() => onReset()}
					/>
					<Button text='Save my data' colour='green' size='small' />
				</div>
			)}
		</Card>
	);
};
