import { useFormContext } from 'react-hook-form';

type SelectOption = {
	id: number;
	value: string | number;
	name: string;
};

type Props = {
	options: SelectOption[] | undefined;
	label: string;
	name: string;
	defaultValue: string | number;
};

const Select = ({ options, name, label }: Props) => {
	const { register } = useFormContext();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{label}
			</label>
			<select
				{...register(name)}
				id={name}
				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900'>
				<option disabled selected>
					Select option
				</option>

				{options?.map((opt, index) => (
					<option key={index} value={opt.value}>
						{opt.name}
					</option>
				))}
			</select>
		</div>
	);
};

export { Select };
