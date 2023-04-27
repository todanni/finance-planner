import {
	type Balance,
	type Category,
	type SubCategory,
	type Transaction,
} from '@prisma/client';
import { Button, Heading } from '@todanni/ui';

type PanelCategoryProps = {
	title: 'Income' | 'Spending' | 'Debt' | 'Savings' | 'Overview';
	isLoading: boolean;
	categories: {
		title: string;
		category: Category;
		payments?: (Transaction & {
			subCategory: SubCategory;
		})[];
		balances?: Balance[];
	}[];
};

const Panel = ({ isLoading, categories }: PanelCategoryProps) => {
	if (isLoading) {
		return (
			<div className='mt-2'>
				<Heading size='large'>Loading...</Heading>
			</div>
		);
	}

	return (
		<div className='w-1/2'>
			{categories.map((category) => (
				<>
					<Heading size='large'>{category.title}</Heading>
					{category.payments?.length === 0 && (
						<div className='flex justify-between'>
							<Heading size='medium'>
								No {category.category.toLowerCase()} payments
							</Heading>
							<Button size='small'>
								Add {category.category.toLowerCase()} payment
							</Button>
						</div>
					)}
					{category.payments?.map((payment) => (
						<div key={payment.id} className='grid grid-cols-3'>
							<Heading size='medium'>{payment.subCategory.name}</Heading>
							<Heading size='medium'>{payment.name}</Heading>
							<Heading size='medium' className='text-right'>
								£{payment.amount.toLocaleString('en-UK')}
							</Heading>
						</div>
					))}
				</>
			))}
		</div>
	);
};

export { Panel };
