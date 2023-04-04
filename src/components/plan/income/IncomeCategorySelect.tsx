import React from 'react';
import { Select } from '~/components/forms/Select';
import { api } from '~/utils/api';

const IncomeCategorySelect = () => {
	const { data } = api.subCategory.getAll.useQuery();

	const selectOptions = data?.map((cat) => ({
		id: cat.id,
		value: cat.id,
		name: cat.name,
	}));

	return (
		<div>
			<Select
				options={selectOptions}
				label='Select income type'
				name='subCategoryId'
				defaultValue={1}
			/>
		</div>
	);
};

export default IncomeCategorySelect;
