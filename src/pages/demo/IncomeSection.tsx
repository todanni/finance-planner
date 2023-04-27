import { Category } from '@prisma/client';
import { Button } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { api } from '~/utils/api';

type IncomeFormInputs = {
	subCategoryId: number;
	amount: number;
	paidOn: Date;
	// Optional
	showOptions: boolean;
	tax?: number;
	ni?: number;
	pension?: number;
	studentLoan?: number;
};

const IncomeForm = () => {
	const { data: categories } = api.subcategories.listByCategory.useQuery({
		category: Category.INCOME,
	});

	const ctx = api.useContext();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<IncomeFormInputs>({
		defaultValues: {
			subCategoryId: 1,
			amount: 1000,
		},
	});

	const transaction = api.transactions.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.transactions.listByCategory.invalidate();
		},
	});

	const onSubmit: SubmitHandler<IncomeFormInputs> = (data) => {
		transaction.mutate({
			subCategoryId: data.subCategoryId,
			amount: data.amount,
			createdAt: data.paidOn,
			name: 'Income',
		});

		if (data.tax) {
			transaction.mutate({
				subCategoryId: 43, // TODO: this should be tax -> income tax
				amount: data.tax,
				createdAt: data.paidOn,
				name: 'Income tax',
			});
		}

		if (data.pension) {
			transaction.mutate({
				subCategoryId: data.subCategoryId, // TODO: this should be savings -> pension
				amount: data.pension,
				createdAt: data.paidOn,
				name: 'Pension',
			});
		}

		if (data.studentLoan) {
			transaction.mutate({
				subCategoryId: data.subCategoryId, // TODO: this should be debt -> student loan
				amount: data.studentLoan,
				createdAt: data.paidOn,
				name: 'Student Loans',
			});
		}

		if (data.ni) {
			transaction.mutate({
				subCategoryId: 45, // TODO: this should be tax -> national insurance
				amount: data.ni,
				createdAt: data.paidOn,
				name: 'Student Loans',
			});
		}
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

			<label>Input net amount</label>
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
				<label>Specify pre-tax deductions</label>
				<input
					{...register('showOptions')}
					id='default-checkbox'
					type='checkbox'
					value=''
					className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500'
				/>
			</div>

			{watch('showOptions') && (
				<>
					<label>Income tax</label>
					<input
						{...register('tax', { valueAsNumber: true })}
						type='number'
						className='rounded-lg p-2 text-sm text-gray-800'
					/>

					<label>National Insurance</label>
					<input
						{...register('ni', { valueAsNumber: true })}
						type='number'
						className='rounded-lg p-2 text-sm text-gray-800'
					/>

					<label>Pension</label>
					<input
						{...register('pension', { valueAsNumber: true })}
						type='number'
						className='rounded-lg p-2 text-sm text-gray-800'
					/>

					<label>Student loan</label>
					<input
						{...register('studentLoan', { valueAsNumber: true })}
						type='number'
						className='rounded-lg p-2 text-sm text-gray-800'
					/>
				</>
			)}
			<Button type='submit' className='mt-2'>
				Submit
			</Button>
		</form>
	);
};

const IncomeList = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	const { data: incomeTransactions } = api.transactions.listByCategory.useQuery(
		{
			category: Category.INCOME,
			startDate: firstDay,
			endDate: lastDay,
		},
	);

	return (
		<div>
			<h1 className='font-bold text-green-600'>Income sources</h1>
			<div className='mt-2 grid grid-cols-3 gap-2'>
				{incomeTransactions?.map((tx) => (
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

export { IncomeForm, IncomeList };