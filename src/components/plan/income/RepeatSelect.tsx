import React from 'react';
import { Select } from '~/components/forms/Select';
import { day } from '~/constants';

// paidOn = new Date(startDate.getTime() + (1000 * 60 * 60 * 24))
// one day ->                              sec * min * hour * day

const repeatOptions = [
	{
		id: 1,
		value: 30,
		name: 'Monthly',
	},
	{
		id: 2,
		value: 7,
		name: 'Weekly',
	},
	{
		id: 3,
		value: 365,
		name: 'Yearly',
	},
	{
		id: 4,
		value: 14,
		name: 'Every two weeks',
	},
	{
		id: 5,
		value: 30 * 6,
		name: 'Every 6 motnhs',
	},
	{
		id: 6,
		value: 30 * 6,
		name: 'Last working day of the month',
	},
];

const RepeatSelect = () => {
	return (
		<div>
			<Select
				options={repeatOptions}
				label='How often does it repeat?'
				name={'repeatsIn'}
				defaultValue={day * 30}
			/>
		</div>
	);
};

export default RepeatSelect;
