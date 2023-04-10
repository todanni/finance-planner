import { useFormContext } from 'react-hook-form';

type InputProps = {
	label: string;
};

const PaymentNameInput = ({ label }: InputProps) => {
	const { register } = useFormContext();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{label}
			</label>
			<input
				type='text'
				id={'name-input'}
				className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-td-gry-5'
				required
				placeholder='Name of payment'
				{...register('name')}
			/>
		</div>
	);
};

export default PaymentNameInput;
