import { type Payment } from '@prisma/client';
import { useFormContext } from 'react-hook-form';

type InputProps = {
	label: string;
};

const AmountInput = ({ label }: InputProps) => {
	const { register } = useFormContext<Payment>();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{label}
			</label>
			<input
				type='text'
				id={'amount-input'}
				className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-td-gry-5'
				data-type='currency'
				required
				placeholder='£1000'
				{...register('amount')}
			/>
		</div>
	);
};

export default AmountInput;
