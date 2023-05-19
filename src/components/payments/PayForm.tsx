import { Category } from '@prisma/client';
import { Button, Card, NumberInput, IconButton, TextInput } from '@todanni/ui';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type z } from 'zod';
import { type transactionSchema } from '~/types/schemas';
import { api } from '~/utils/api';
import BalanceForm from './BalanceForm';

type PaymentSchema = z.infer<typeof transactionSchema>;

const PayForm = () => {
	const [category, setCategory] = useState<Category>('INCOME');

	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: category,
	});

	const { register, handleSubmit, reset, setValue } = useForm<PaymentSchema>({
		defaultValues: {
			subCategoryId: categories ? categories[0]?.id : 0,
			name: 'Payment 1',
			category: category,
		},
	});

	const transaction = api.tx.add.useMutation({
		onSuccess: () => {
			reset();
			setValue('category', category);
		},
	});

	const onCategoryChange = (category: Category) => {
		setCategory(category);
		setValue('category', category);
	};

	const onSubmit: SubmitHandler<PaymentSchema> = (data) => {
		transaction.mutate({
			...data,
		});
	};

	return (
		<Card className='my-4 grid grid-cols-3 p-4'>
			<form
				className='flex flex-col gap-2 p-4'
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onSubmit={handleSubmit(onSubmit)}>
				<p className='font-bold text-white'>Add payment</p>
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

				<NumberInput
					placeholder='£0.00'
					id={'amount'}
					label={'Amount'}
					{...register('amount', { valueAsNumber: true })}
				/>

				<label className='text-white'>Paid on</label>
				<input
					{...register('createdAt', { valueAsDate: true })}
					type='date'
					className='rounded-lg p-2 text-sm text-gray-800'
				/>
				<TextInput id={'name'} label={'Payment name'} {...register('name')} />

				<div className='mt-2 grid grid-cols-2 gap-2'>
					<Button type='submit' text={'Submit'} colour='green' />
				</div>
			</form>
			<BalanceForm />
			<div className='flex w-1/2 flex-col justify-center gap-2 justify-self-end'>
				<IconButton
					text='Income'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.INCOME)}
				/>
				<IconButton
					text='Tax Deduction'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.TAX)}
				/>
				<IconButton
					text='Bill'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.BILL)}
				/>
				<IconButton
					text='Living cost'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.LIVING_COSTS)}
				/>
				<IconButton
					text='Discretionary'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.DISCRETIONARY)}
				/>
				<IconButton
					text='Debt'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.DEBT)}
				/>
				<IconButton
					text='Savings'
					iconStart='plus'
					fill='green'
					size='sm'
					onClick={() => onCategoryChange(Category.SAVINGS)}
				/>
			</div>
		</Card>
	);
};

export default PayForm;
