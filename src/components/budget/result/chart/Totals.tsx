import { api } from '~/utils/api';

const BudgetResultTotals = () => {
	const { data: categories } = api.category.getAll.useQuery();

	return (
		<div className='flex w-full flex-col items-end gap-2 p-4 text-sm text-white'>
			{categories?.map((category, index) => (
				<div key={index} className='flex w-full justify-between gap-2'>
					<div className='flex gap-2 '>
						<div className='h-4 w-4 border border-white bg-td-grn-2' />
						<h1>{category.name}</h1>
					</div>
					<h1>1234.67£</h1>
				</div>
			))}
		</div>
	);
};
export default BudgetResultTotals;
