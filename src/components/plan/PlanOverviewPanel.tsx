import { Card, ProgressBar, Title } from '@todanni/ui';
import { api } from '~/utils/api';
import { formatCurrency } from '~/utils/currency';

export const PlanOverviewPanel = () => {
	const { data: total, isLoading } = api.tx.total.useQuery({});

	console.log(total);

	return (
		<Card className='flex flex-col gap-6 px-6 py-4'>
			<Title className='text-center' size='small'>
				Monthly overview
			</Title>
			{isLoading && <PlanOverviewLoading />}
			{total && !isLoading && (
				<>
					<PlanOverviewCategory
						title='Total income after tax'
						total={total.INCOME?.total || 0}
						percentage={75}
						fill='green'
						leftText='Income before tax: £1,234.56'
						rightText='Total deductions: £1,234.56'
					/>
					<PlanOverviewCategory
						title='Total monthly spending'
						total={1234.56}
						percentage={50}
						fill='blue'
						leftText='Needs: £1,234.56'
						rightText='Wants: £1,234.56'
					/>
					<PlanOverviewCategory
						title='Total savings contributions'
						total={total.SAVINGS?.total || 0}
						percentage={25}
						fill='yellow'
						// leftText='Interest earned: £1,234.56'
					/>
					<PlanOverviewCategory
						title='Total debt repayments'
						total={1234.56}
						percentage={10}
						fill='red'
						leftText='Interest charged: £1,234.56'
					/>
					<p className='text-md ml-auto font-bold text-gray-600'>
						Remaing balance: £1,234.56
					</p>
				</>
			)}
		</Card>
	);
};

type PlanOverviewCategoryProps = {
	title: string;
	total: number;
	percentage: number;
	fill: 'green' | 'blue' | 'yellow' | 'red';
	leftText?: string;
	rightText?: string;
};

const PlanOverviewCategory = ({
	title,
	total,
	percentage,
	fill,
	leftText,
	rightText,
}: PlanOverviewCategoryProps) => {
	return (
		<div className='flex flex-col gap-1'>
			<p className='inline-flex w-full justify-between text-sm font-semibold text-gray-600'>
				{title} <span className='ml-auto'>{formatCurrency(total)}</span>
			</p>
			<ProgressBar progress={percentage} fill={fill} withPercentage={true} />
			<p className='inline-flex w-full justify-between text-sm font-light text-gray-600/80'>
				{leftText}
				<span className='ml-auto'>{rightText}</span>
			</p>
		</div>
	);
};

const PlanOverviewLoading = () => {
	return (
		<div className='flex flex-col gap-1'>
			<p className='inline-flex w-full justify-between text-sm font-semibold text-gray-600'>
				Loading...
			</p>
			<ProgressBar progress={100} fill={'blue'} withPercentage={false} />
			<p className='inline-flex w-full justify-between text-sm font-light text-gray-600/80'>
				Loading...
			</p>
		</div>
	);
};
