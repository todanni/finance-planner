/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form';
import { Button } from '@todanni/ui';
import { type Category } from '@prisma/client';
import { api } from '~/utils/api';

type PaymentFormInputs = {
	name: string;
	amount: number;
	createdAt: Date;
	subCategoryId: number;
};

type PaymentFormProps = {
	category: Category;
};

const PaymentForm = ({ category }: PaymentFormProps) => {
	const ctx = api.useContext();

	const { data: subCategories } = api.subcategories.listByCategory.useQuery({
		category: category,
	});

	const createPayment = api.transactions.create.useMutation({
		onSuccess: () => {
			reset();
			void ctx.transactions.listByCategory.invalidate();
		},
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<PaymentFormInputs>();

	const onSubmit = (data: PaymentFormInputs) => {
		console.log(data);
		createPayment.mutate({
			name: data.name,
			amount: data.amount,
			subCategoryId: data.subCategoryId,
		});
	};

	return (
		<div className='pt-4'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 grid-rows-2 gap-2'>
				<select
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-stone-700'
					{...register('subCategoryId', { valueAsNumber: true })}>
					{subCategories?.map((option) => (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					))}
				</select>
				<input
					placeholder='Name of payment'
					type='text'
					className='border-grey-4 block w-full rounded-lg border p-2.5 text-sm text-stone-700'
					{...register('name')}
				/>
				{errors.name?.message && <p>{errors.root?.message}</p>}
				<input
					placeholder='£100.00'
					type='number'
					className='border-grey-4 block w-full rounded-lg border p-2.5 text-sm text-stone-700'
					{...register('amount', { valueAsNumber: true })}
				/>

				<Button type='submit' size='small'>
					Submit
				</Button>
			</form>
		</div>
	);
};

export { PaymentForm };
