import React from 'react';
import IncomeCategorySelect from './IncomeCategorySelect';
import DatePick from '../../forms/DatePicker';
import LabeledInput from '../../forms/LabeledInput';
import ToggleSelect from '../../forms/ToggleSelect';
import RepeatSelect from './RepeatSelect';
import { type SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { type Payment } from '@prisma/client';
import { api } from '~/utils/api';
import { Prisma } from '@prisma/client';

const IncomePaymentForm = () => {
	const methods = useForm<Payment>();
	const mutation = api.payment.add.useMutation();
	const submitPayment: SubmitHandler<Payment> = (data: Payment) => {
		console.log(Number(data.subCategoryId));

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
			isNet: data.isNet,
			repeats: data.repeats,
			startDate: data.startDate,
			repeatsIn: data.repeatsIn,
		});
	};

	const watchRepeats = methods.watch('repeats', false);
	const watchCustomRepeat = methods.watch('repeatsIn', 0);

	return (
		<>
			<FormProvider {...methods}>
				<form
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onSubmit={methods.handleSubmit(submitPayment)}
					className='mb-6 grid gap-6 md:grid-cols-2'>
					<IncomeCategorySelect />
					<LabeledInput label='Give it a name' name={'name'} />
					<LabeledInput label='Amount' name={'amount'} />
					<ToggleSelect
						name='isNet'
						label='Is the amount taxed?'
						defaultOption='Post-tax'
						secondaryOption='Pre-tax'
					/>
					<DatePick name='startDate' label='When did you receive this?' />
					<ToggleSelect
						name='repeats'
						label='Does this payment repeat?'
						defaultOption='Single'
						secondaryOption='Reoccurring'
					/>
					{watchRepeats && <RepeatSelect />}
					<div>
						<label className='mb-2 block text-sm font-medium text-transparent'>
							Some text
						</label>
						<button
							type='submit'
							className='w-3/4 rounded-lg bg-grn-700 px-5 py-2.5 text-center text-sm font-medium text-white'>
							Submit
						</button>
					</div>
				</form>
			</FormProvider>
		</>
	);
};

export default IncomePaymentForm;

// repeats: boolean
// repeatsIn: Number

// paidOn = new Date(startDate.getTime() + (1000 * 60 * 60 * 24))
// one day ->                              sec * min * hour * day
