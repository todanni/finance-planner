import { Button, NumberInput, Select, TextInput } from '@todanni/ui';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type z } from 'zod';
import { type balanceSchema } from '~/types/schemas';
import { api } from '~/utils/api';

type BalanceSchema = z.infer<typeof balanceSchema>;

const BalanceForm = () => {
	const { data: categories } = api.subcategories.listForBalances.useQuery();

	const { register, handleSubmit, reset } = useForm<BalanceSchema>({
		defaultValues: {
			subCategoryId: categories ? categories[0]?.id : 0,
		},
	});

	const balance = api.balance.add.useMutation({
		onSuccess: () => {
			reset();
		},
	});

	const onSubmit: SubmitHandler<BalanceSchema> = (data) => {
		data.category =
			categories?.find((category) => category.id === data.subCategoryId)
				?.category || 'DEBT';

		balance.mutate({
			...data,
		});
	};

	return (
		<form
			className='flex flex-col gap-2 p-4'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<p className='font-bold text-white'>Add balance</p>
			<Select
				id={'subcategory'}
				label={'What category does this fall under?'}
				options={
					categories?.map((category) => {
						return { value: category.id, label: category.name };
					}) || []
				}
				{...register('subCategoryId', { valueAsNumber: true })}
			/>
			<TextInput
				id='name'
				label='Balance name'
				{...register('name')}
				helpText='E.g. your bank, credit card, loan provider'
			/>
			<NumberInput
				placeholder='£0.00'
				id='amount'
				label='Outstanding balance'
				helpText='Last known amount of the balance'
				{...register('amount', { valueAsNumber: true })}
			/>

			<label className='text-white'>Date for last known balance</label>
			<input
				{...register('createdAt', { valueAsDate: true })}
				type='date'
				placeholder={new Date().toLocaleDateString('en-UK')}
				className='rounded-lg p-2 text-sm text-gray-800'
			/>
			<NumberInput
				placeholder='5.00%'
				id={'interestRate'}
				label={'Interest rate'}
				helpText='Annual representative rate (APR)'
				{...register('interestRate', { valueAsNumber: true })}
			/>
			<NumberInput
				placeholder='£100.00'
				id='minPayment'
				label='Minimum monthly payment'
				helpText='The amount you must pay each month to avoid late fees'
				{...register('minPayment', { valueAsNumber: true })}
			/>

			<div className='mt-2 grid grid-cols-2 gap-2'>
				<Button type='submit' text='Submit' colour='green' />
			</div>
		</form>
	);
};

export default BalanceForm;
