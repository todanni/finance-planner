import { type Payment, type Category } from '@prisma/client';
import { useFormContext } from 'react-hook-form';
import { api } from '~/utils/api';

type CategorySelectProps = {
	category: Category;
};

const SubCategorySelect = ({ category }: CategorySelectProps) => {
	const { data: subCategories } = api.subCategory.getAllForCategory.useQuery({
		categoryId: category.id,
	});

	const { register } = useFormContext<Payment>();

	return (
		<div>
			<label className='mb-2 block text-sm font-medium text-white'>
				{`${category.name} category`}
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
