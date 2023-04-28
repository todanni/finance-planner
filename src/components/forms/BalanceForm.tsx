import { type Category } from '@prisma/client';
import { Button, Heading } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';

type BalanceFormInputs = {
	name: string;
	subCategoryId: number;
	interestRate: number;
	startDate?: Date;
	endDate?: Date;
	amount?: number;
};

type BalanceFormProps = {
	category: Category;
};

const BalanceForm = ({ category }: BalanceFormProps) => {
	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: category,
	});

	const ctx = api.useContext();

	const { register, handleSubmit, reset } = useForm<BalanceFormInputs>({
		defaultValues: {},
	});

	const balance = api.balance.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.balance.list.invalidate();
		},
	});

	const onSubmit: SubmitHandler<BalanceFormInputs> = (data) => {
		balance.mutate({
			balance: {
				name: data.name,
				subCategoryId: data.subCategoryId,
				interestRate: data.interestRate,
				startDate: data.startDate,
				endDate: data.endDate,
			},
			amount: data.amount,
		});
	};

	return (
		<form
			className='mx-8 flex flex-col gap-2 justify-self-end'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<Heading>Add missing balance</Heading>
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

			<label className='text-white'>Balance name</label>
			<input
				{...register('name')}
				type='text'
				placeholder='(Optional)'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>Starting balance</label>
			<input
				{...register('amount', { valueAsNumber: true })}
				type='number'
				placeholder='£1000'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>Interest rate % (AER)</label>
			<input
				{...register('interestRate', { valueAsNumber: true })}
				type='number'
				placeholder='2.00%'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>Start date</label>
			<input
				{...register('startDate', { valueAsDate: true })}
				type='date'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>

			<label className='text-white'>End date</label>
			<input
				{...register('endDate', { valueAsDate: true })}
				type='date'
				className='rounded-lg p-2 text-sm text-gray-800'
			/>
			<div className='mt-2 grid grid-cols-2 gap-2'>
				<Button>Cancel</Button>
				<Button type='submit'>Submit</Button>
			</div>
		</form>
	);
};

export default BalanceForm;
