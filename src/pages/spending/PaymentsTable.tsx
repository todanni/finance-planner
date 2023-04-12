import { type Category, Prisma } from '@prisma/client';
import { api } from '~/utils/api';

type TableProps = {
	category?: Category;
};

const PaymentsTable = ({ category }: TableProps) => {
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
							<PaymentRow
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

type PaymentProps = {
	category: string;
	subCategory: string;
	name: string;
	amount: number;
};

const PaymentRow = ({ subCategory, name, amount }: PaymentProps) => {
	return (
		<tr>
			<td className='px-2 py-2 text-left'>{subCategory}</td>
			<td className='px-2 py-2 text-left'>{name}</td>
			<td className='px-2 py-2 text-right'>{`£${amount}`}</td>
		</tr>
	);
};

export default PaymentsTable;
