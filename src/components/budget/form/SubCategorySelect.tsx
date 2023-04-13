import { type Payment } from '@prisma/client';
import { useFormContext } from 'react-hook-form';
import { api } from '~/utils/api';

type CategorySelectProps = {
	categoryId: number;
};

const SubCategorySelect = ({ categoryId }: CategorySelectProps) => {
	const { data: subCategories } = api.subCategory.getAllForCategory.useQuery({
		categoryId: categoryId,
	});

	const { register } = useFormContext<Payment>();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{`Select category`}
			</label>
			<select
				{...register('subCategoryId')}
				id={'subCat-select'}
				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-td-gry-5'>
				{subCategories?.map((opt, index) => (
					<option key={index} value={opt.id}>
						{opt.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SubCategorySelect;
