import { TextInput, NumberInput, Button } from '@todanni/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { type BudgetSchema } from '~/types/schemas';

type BudgetFormProps = {
	category: string;
	placeholder: string;
	label: string;
	helpText?: string;
	refresh: () => void;
};

export const BudgetForm = ({
	category,
	label,
	placeholder,
	helpText,
	refresh,
}: BudgetFormProps) => {
	const { register, handleSubmit, reset } = useForm<BudgetSchema>({});

	const onSubmit: SubmitHandler<BudgetSchema> = (data) => {
		data.category = category;

		const currentBudget = localStorage.getItem('budget');
		if (!currentBudget) {
			localStorage.setItem('budget', JSON.stringify([data]));
			reset();
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const currentValue: BudgetSchema[] = JSON.parse(currentBudget);
		currentValue.push(data);
		localStorage.setItem('budget', JSON.stringify(currentValue));
		reset();
		refresh();
	};

	return (
		<form
			className='grid grid-cols-3 gap-x-4 gap-y-1'
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor={category + '-name'} className='text-gray-700'>
				{label}
			</label>
			<label htmlFor={category + '-amount'} className='text-gray-700'></label>
			<div />
			<TextInput
				id={category + '-name'}
				placeholder={placeholder}
				{...register('name')}
			/>
			<NumberInput
				id={category + '-amount'}
				placeholder='£100.00'
				{...register('amount', { valueAsNumber: true })}
			/>
			<Button
				size='small'
				text='Add'
				colour='green'
				className='col-start-3 row-start-2'
				type='submit'
			/>
			<p className='col-span-3 mt-1 text-sm italic text-gray-500'>{helpText}</p>
		</form>
	);
};
