import { Category } from '@prisma/client';
import { Card, IconButton } from '@todanni/ui';
import { api } from '~/utils/api';
import { formatCurrency } from '~/utils/currency';
import { getTaxYearRange } from '~/utils/daterange';

const Payments = () => {
	const { data: income } = getSum(Category.INCOME);
	const { data: tax } = getSum(Category.TAX);
	const { data: bills } = getSum(Category.BILL);
	const { data: livingCosts } = getSum(Category.LIVING_COSTS);
	const { data: discr } = getSum(Category.DISCRETIONARY);
	const { data: savings } = getSum(Category.SAVINGS);
	const { data: debt } = getSum(Category.DEBT);

	const { data: taxYearIncome } = api.tx.sumForCategory.useQuery({
		category: Category.INCOME,
		startDate: getTaxYearRange().startDate,
		endDate: getTaxYearRange().endDate,
	});

	const { data: taxYearTax } = api.tx.sumForCategory.useQuery({
		category: Category.TAX,
		startDate: getTaxYearRange().startDate,
		endDate: getTaxYearRange().endDate,
	});

	console.error(taxYearTax);

	const calculateIncomeAfterTax = () => {
		if (income && tax) {
			return income - tax;
		} else return 0;
	};

	return (
		<Card className='my-4 flex flex-col gap-2 p-4 text-white'>
			<PaymentRow label='Income before tax' amount={income} />
			<PaymentRow label='Tax deductions' amount={tax} />
			<PaymentRow label='Income after tax' amount={calculateIncomeAfterTax()} />
			<PaymentRow label='Monthly Bills' amount={bills} />
			<PaymentRow label='Living costs' amount={livingCosts} />
			<PaymentRow label='Discretionary spending' amount={discr} />
			<PaymentRow label='Savings contributions' amount={savings} />
			<PaymentRow label='Debt Repayment' amount={debt} />
			<PaymentRow
				label='Total income for this tax year'
				amount={taxYearIncome}
			/>
			<PaymentRow
				label='Total tax deductions for this tax year'
				amount={taxYearTax}
			/>
		</Card>
	);
};

type PaymentRowProps = {
	label: string;
	amount: number | undefined | null;
};

const PaymentRow = ({ label, amount }: PaymentRowProps) => {
	return (
		<p className='inline-flex'>
			{label}:<span className='ml-auto'>{formatCurrency(amount)}</span>
		</p>
	);
};

const getSum = (category: Category) => {
	return api.tx.sumForCategory.useQuery({ category: category });
};

const PaymentsTable = () => {
	const { data: payments } = api.tx.list.useQuery({});
	const ctx = api.useContext();

	const resetPayments = api.tx.delete.useMutation({
		onSuccess: () => {
			void ctx.tx.sumForCategory.invalidate();
			void ctx.tx.list.invalidate();
		},
	});

	const deletePayment = api.tx.deleteOne.useMutation({
		onSuccess: () => {
			void ctx.tx.sumForCategory.invalidate();
			void ctx.tx.list.invalidate();
		},
	});

	return (
		<Card className='my-4 flex flex-col gap-2 p-4'>
			<table className='w-full'>
				<thead className='text-white'>
					<tr className=''>
						<th className='text-left'>Date</th>
						<th className='text-left'>Category</th>
						<th className='text-left'>Subcategory</th>
						<th className='text-left'>Name</th>
						<th className='text-right'>Amount</th>
					</tr>
				</thead>
				<tbody className='text-white/80'>
					{payments?.map((payment) => (
						<tr key={payment.id}>
							<td>{payment.createdAt.toLocaleDateString('en-UK')}</td>
							<td>{payment.category.toLowerCase()}</td>
							<td>{payment.subCategory.name}</td>
							<td>{payment.name}</td>
							<td className='text-right'>{formatCurrency(payment.amount)}</td>
							<td className='text-right'>
								<IconButton
									text={''}
									size='xs'
									iconEnd='delete'
									onClick={() => deletePayment.mutate({ id: payment.id })}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<IconButton
				text='Delete all'
				iconStart='delete'
				size='sm'
				fill='red'
				className='ml-auto mt-4'
				onClick={() => resetPayments.mutate({})}
			/>
		</Card>
	);
};

export { Payments, PaymentsTable };
