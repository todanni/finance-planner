import Table from '~/components/table';
import { api } from '~/utils/api';

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
							amount: payment.amount,
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
