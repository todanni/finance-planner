import { useFormContext } from 'react-hook-form';

type Props = {
	label: string;
	defaultOption: string;
	secondaryOption: string;
	name: string;
};

const ToggleSelect = ({
	defaultOption,
	secondaryOption,
	label,
	name,
}: Props) => {
	const { register } = useFormContext();

	return (
		<div>
			<label className='block text-sm font-medium text-white'>{label}</label>
			<label className='inline-flex w-full cursor-pointer items-center rounded-lg p-2.5 text-sm text-white'>
				<input
					id='toggle-select'
					type='checkbox'
					className='peer hidden'
					{...register(name)}
				/>
				<span className='rounded-l-lg bg-grn-700 px-4 py-2 peer-checked:bg-td-gry-7'>
					{defaultOption}
				</span>
				<span className='rounded-r-lg bg-td-gry-7 px-4 py-2 text-sm peer-checked:bg-grn-700'>
					{secondaryOption}
				</span>
			</label>
		</div>
	);
};

export default ToggleSelect;
