import { type Payment, type Category, Prisma } from '@prisma/client';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import SubCategorySelect from './SubCategorySelect';
import AmountInput from './AmountInput';
import PaymentNameInput from './PaymentNameInput';
import { api } from '~/utils/api';

type Props = {
	category: Category;
};

const PaymentForm = ({ category }: Props) => {
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
				<SubCategorySelect category={category} />
				<AmountInput label={'Amount'} />
				<PaymentNameInput label='Give it a name' />
				<div>
					<button
						type='submit'
						className='rounded-lg bg-td-grn-4 px-4 py-2 text-center text-white'>
						Add
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default PaymentForm;
