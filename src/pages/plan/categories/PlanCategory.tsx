import { type Transaction, type Category } from '@prisma/client';
import { Icon, Heading, Title } from '@todanni/ui';
import { type IconObject } from '@todanni/ui/build/components/Icon/iconMapping';

type PlanCategoryProps = {
	title: string;
	category: Category;
	transactions: Transaction[];
	icon: IconObject;
};

const PlanCategory = ({ title, category, transactions }: PlanCategoryProps) => {
	return (
		<>
			<div className='col-span-3 flex gap-2'>
				<Icon object='money' colour='income' size='small' />
				<h1 className='text-bold text-lg text-white'>{title}</h1>
			</div>
			{transactions.map((source) => (
				<>
					{/* TODO: include category in query */}
					<h2 className='text-stone-300'>{source.subCategoryId}</h2>
					<h2 className='text-stone-300'>{source.name}</h2>
					<h2 className='justify-self-end text-stone-300'>
						£{source.amount.toLocaleString('en-UK')}
					</h2>
				</>
			))}
			<div className='col-span-3 mb-2 flex justify-between gap-2'>
				<h1 className='text-bold text-lg text-white'>Total</h1>
				<h1 className='text-bold text-lg text-white'>£4,567.89</h1>
			</div>
		</>
	);
};

export { PlanCategory };
