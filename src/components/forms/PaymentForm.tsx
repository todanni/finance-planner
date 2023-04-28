import { type Category } from '@prisma/client';
import { Button } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';

type PaymentFormInputs = {
	subCategoryId: number;
	amount: number;
	paidOn: Date;
	name: string;
};

type PaymentFormProps = {
	category: Category;
};

const PaymentForm = ({ category }: PaymentFormProps) => {
	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: category,
	});

	const ctx = api.useContext();

	const { register, handleSubmit, reset } = useForm<PaymentFormInputs>({
		defaultValues: {
			subCategoryId: 1,
		},
	});

	const transaction = api.transactions.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.transactions.listByCategory.invalidate();
			void ctx.transactions.listForSpending.invalidate();
		},
	});

	const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
		transaction.mutate({
			subCategoryId: data.subCategoryId,
			amount: data.amount,
			createdAt: data.paidOn,
			name: data.name,
		});
	};

	return (
		<form
			className='mx-8 flex flex-col gap-2'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<label className='text-white'>Select category</label>
			<select
				{...register('subCategoryId', { valueAsNumber: true })}
				className='rounded-lg p-2 text-sm text-gray-800'>
				{categories?.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</select>

			<label className='text-white'>Input net amount</label>
			<input
				{...register('amount', { valueAsNumber: true })}
				type='number'
				placeholder='£1000'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>Paid on</label>
			<input
				{...register('paidOn', { valueAsDate: true })}
				type='date'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>Payment name</label>
			<input
				{...register('name')}
				type='text'
				placeholder='(Optional)'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>
			<div className='mt-2 grid grid-cols-2 gap-2'>
				<Button>Cancel</Button>
				<Button type='submit'>Submit</Button>
			</div>
		</form>
	);
};

export default PaymentForm;
