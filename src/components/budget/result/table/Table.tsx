import { api } from '~/utils/api';
import BudgetResultRow from './Row';

const BudgetResultTable = () => {
	const { data: payments } = api.payment.listForCurrentMonth.useQuery();

	console.log(payments);

	const sortPayments = () => {
		return payments?.sort((a, b) => {
			return b.amount - a.amount;
		});
	};

	return (
		<div className='w-11/12 rounded-lg '>
			{payments && (
				<table className='w-full text-xs'>
					<thead className='uppercase'>
						<tr className='border-b'>
							<th scope='col' className='px-2 py-2 text-left'>
								Category
							</th>
							<th scope='col' className='px-2 py-2 text-left'>
								Name
							</th>
							<th scope='col' className='px-2 py-2 text-right'>
								Amount
							</th>
						</tr>
					</thead>
					<tbody className='text-td-gry-0'>
						{sortPayments()?.map((payment) => (
							<BudgetResultRow
								key={payment.id}
								category={payment.subCategory.name}
								subCategory={payment.subCategory.name}
								name={payment.name}
								amount={payment.amount}
							/>
						))}
					</tbody>
					<tfoot className='border-t-2'>
						<tr className='font-bold'>
							<td className='px-2 py-2 text-left'></td>
							<td className='px-2 py-2 text-left'>Remaining</td>
							<td className='px-2 py-2 text-right'>980.90</td>
						</tr>
					</tfoot>
				</table>
			)}
		</div>
	);
};

export default BudgetResultTable;
