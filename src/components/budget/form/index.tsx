import { type Payment, Prisma } from '@prisma/client';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';
import SubCategorySelect from './SubCategorySelect';
import AmountInput from './AmountInput';
import NameInput from './NameInput';

type FormProps = {
	categoryId?: number;
};

const BudgetPaymentForm = ({ categoryId }: FormProps) => {
	const methods = useForm<Payment>();
	const mutation = api.payment.add.useMutation();
	const submitPayment: SubmitHandler<Payment> = (data: Payment) => {
		mutation.mutate({
			user: {
				connect: {},
			},
			subCategory: {
				connect: {
					id: Number(data.subCategoryId),
				},
			},
			name: data.name,
			amount: new Prisma.Decimal(data.amount).toNumber(),
			isNet: true,
			repeats: false,
		});
		methods.reset();
	};

	return (
		<FormProvider {...methods}>
			<form
				className='grid grid-cols-none grid-rows-4 gap-2'
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onSubmit={methods.handleSubmit(submitPayment)}>
				{/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
				<SubCategorySelect categoryId={categoryId!} />
				<AmountInput label={'Amount'} />
				<NameInput label='Give it a name' />
				<div>
					<button
						type='submit'
						className='rounded-lg bg-td-grn-4 px-4 py-2 text-center text-sm font-medium text-white'>
						Add
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default BudgetPaymentForm;
