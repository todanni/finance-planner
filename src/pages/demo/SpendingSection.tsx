import { Category } from '@prisma/client';
import { Button } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';

type SpendingFormInputs = {
	subCategoryId: number;
	amount: number;
	paidOn: Date;
};

const SpendingForm = () => {
	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: Category.BILL,
	});

	const ctx = api.useContext();

	const { register, handleSubmit, reset } = useForm<SpendingFormInputs>({
		defaultValues: {
			subCategoryId: 1,
			amount: 1000,
		},
	});

	const transaction = api.transactions.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.transactions.listForSpending.invalidate();
		},
	});

	const onSubmit: SubmitHandler<SpendingFormInputs> = (data) => {
		transaction.mutate({
			subCategoryId: data.subCategoryId,
			amount: data.amount,
			createdAt: data.paidOn,
			name: 'Bill',
		});
	};

	return (
		<form
			className='flex w-1/2 flex-col gap-2'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<label>Select category</label>
			<select
				{...register('subCategoryId', { valueAsNumber: true })}
				className='rounded-lg p-2 text-sm text-gray-800'>
				{categories?.map((category) => (
					<option key={category.id} value={category.id}>
						{category.name}
					</option>
				))}
			</select>

			<label>Input amount</label>
			<input
				{...register('amount', { valueAsNumber: true })}
				type='number'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label>Paid on:</label>
			<input
				{...register('paidOn', { valueAsDate: true })}
				type='date'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>
			<Button type='submit' className='mt-2'>
				Submit
			</Button>
		</form>
	);
};

const SpendingList = () => {
	return (
		<div>
			<h1 className='font-bold text-green-600'>Bills</h1>
		</div>
	);
};

export { SpendingForm, SpendingList };
