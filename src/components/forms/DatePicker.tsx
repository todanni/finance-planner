import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Datepicker from 'tailwind-datepicker-react';

const options = {
	title: '',
	autoHide: true,
	todayBtn: true,
	clearBtn: false,
	maxDate: new Date('2030-01-01'),
	minDate: new Date('1950-01-01'),
	theme: {
		background: 'bg-gray-100 dark:bg-gray-600',
		todayBtn: '',
		clearBtn: '',
		icons: '',
		text: '',
		disabledText: 'bg-gray-400',
		input: 'bg-white dark:bg-white text-white dark:text-gray-400',
		inputIcon: '',
		selected: '',
	},
	icons: {
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: 'top-12',
	defaultDate: new Date(),
	language: 'en',
};
type Props = {
	label: string;
	name: string;
};

const DatePick = ({ label, name }: Props) => {
	const [show, setShow] = useState<boolean>(false);

	const handleChange = (selectedDate: Date) => {
		setValue(name, selectedDate);
	};

	const handleClose = (state: boolean) => {
		setShow(state);
	};

	const { setValue } = useFormContext();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{label}
			</label>
			<Datepicker
				options={options}
				onChange={handleChange}
				show={show}
				setShow={handleClose}
			/>
		</div>
	);
};

export default DatePick;
