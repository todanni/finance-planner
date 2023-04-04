import Table from '~/components/table';
import { api } from '~/utils/api';
import { Prisma } from '@prisma/client';

const headers = ['Date', 'Category', 'Name', 'Amount'];

const IncomePayments = () => {
	const { data: payments, isLoading } = api.payment.listAll.useQuery();

	return (
		<div className='relative overflow-x-auto p-2'>
			{!isLoading && (
				<Table
					headers={headers}
					rows={payments?.map((payment) => {
						return {
							amount: new Prisma.Decimal(payment.amount).toNumber(),
							name: payment.name,
							category: payment.subCategoryId.toString(),
							date: payment.createdAt.toDateString(),
						};
					})}
				/>
			)}
		</div>
	);
};

export default IncomePayments;
