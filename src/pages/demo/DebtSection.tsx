import { Category } from '@prisma/client';
import { Button } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';

type DebtFormInputs = {
	subCategoryId: number;
	amount: number;
	paidOn: Date;
	showOptions: boolean;
};

const DebtForm = () => {
	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: Category.DEBT,
	});

	const ctx = api.useContext();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<DebtFormInputs>({
		defaultValues: {},
	});

	const transaction = api.transactions.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.transactions.listByCategory.invalidate();
		},
	});

	const onSubmit: SubmitHandler<DebtFormInputs> = (data) => {
		transaction.mutate({
			subCategoryId: data.subCategoryId,
			amount: data.amount,
			createdAt: data.paidOn,
			name: 'Debt',
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

			<div className='my-2 flex items-center justify-between'>
				<label>Is against an existing balance?</label>
				<input
					{...register('showOptions')}
					id='default-checkbox'
					type='checkbox'
					value=''
					className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500'
				/>
			</div>

			{watch('showOptions') && <></>}
			<Button type='submit' className='mt-2'>
				Submit
			</Button>
		</form>
	);
};

const DebtBalanceForm = () => {
	return <></>;
};

const DebtList = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: debtTransactions } = api.transactions.listByCategory.useQuery({
		category: Category.DEBT,
		startDate: firstDay,
		endDate: lastDay,
	});

	return (
		<div>
			<h1 className='font-bold text-green-600'>Debt sources</h1>
			<div className='mt-2 grid grid-cols-3 gap-2'>
				{debtTransactions?.map((tx) => (
					<>
						<p>{tx.subCategory.name}</p>
						<p className='text-right'>£{tx.amount.toLocaleString('en-UK')}</p>
						<p className='text-right'>
							{tx.createdAt.toLocaleDateString('en-UK')}
						</p>
					</>
				))}
			</div>
		</div>
	);
};

export { DebtForm, DebtList };
