import React from 'react';
import { Select } from '~/components/forms/Select';
import { api } from '~/utils/api';

const IncomeCategorySelect = () => {
	const { data } = api.subcategory.findManySubCategory.useQuery({
		where: {
			categoryId: 1,
		},
	});

	const selectOptions = data?.map((cat) => ({
		id: cat.id,
		value: cat.name,
		name: cat.name,
	}));

	return (
		<div>
			<Select
				options={selectOptions}
				label='Select income type'
				name='category'
				defaultValue='Salary'
			/>
		</div>
	);
};

export default IncomeCategorySelect;
