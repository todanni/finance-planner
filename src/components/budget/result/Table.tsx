import { api } from '~/utils/api';
import BudgetResultRow from './Row';
import { Prisma } from '@prisma/client';

const BudgetResultTable = () => {
	const { data: payments } = api.payment.listForCurrentMonth.useQuery();

	return (
		<div className='w-11/12 rounded-lg border border-td-gry-4'>
			{payments && (
				<table className='w-full text-sm'>
					<thead>
						<tr>
							<th scope='col' className='px-2 py-2 text-left'>
								Type
							</th>
							<th scope='col' className='px-2 py-2 text-left'>
								Name
							</th>
							<th scope='col' className='px-2 py-2 text-right'>
								Amount
							</th>
						</tr>
					</thead>
					<tbody>
						{payments?.map((payment) => (
							<BudgetResultRow
								key={payment.id}
								category={payment.subCategory.name}
								subCategory={payment.subCategory.name}
								name={payment.name}
								amount={new Prisma.Decimal(payment.amount).toNumber()}
							/>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default BudgetResultTable;
