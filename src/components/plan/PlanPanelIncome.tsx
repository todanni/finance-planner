import { Card, Heading, Icon, ProgressBar, Title } from '@todanni/ui';
import { formatCurrency } from '~/utils/currency';

export type PanelProps = {
	startDate: Date;
	endDate: Date;
};

const PlanPanelIncome = ({ startDate, endDate }: PanelProps) => {
	return (
		<Card className='my-4 flex w-1/2 flex-col px-8 py-4'>
			<Title size='small' className=''>
				Income Overview
			</Title>
			<div className='my-4 flex gap-3'>
				<Heading size='md' className='text-lg'>
					Income before tax
				</Heading>
				<Heading size='md' className='ml-auto text-lg'>
					{formatCurrency(8333.33)}
				</Heading>
			</div>
			<IncomeCategory total={8333.33} part={4567.89} title='Salary' />
			<IncomeCategory total={8333.33} part={2074.46} title='Income tax' />
			<IncomeCategory
				total={8333.33}
				part={449.81}
				title='National insurance'
			/>
			<IncomeCategory total={8333.33} part={500} title='Pension' />
			<IncomeCategory total={8333.33} part={500} title='Student loan' />
			<div className='mt-4 flex gap-3'>
				<Heading size='md' className='text-lg'>
					Income after tax
				</Heading>
				<Heading size='md' className='ml-auto text-lg'>
					{formatCurrency(4567.89)}
				</Heading>
			</div>
		</Card>
	);
};

type IncomeCategoryProps = {
	total: number;
	part: number;
	title: string;
};

const IncomeCategory = ({ total, part, title }: IncomeCategoryProps) => {
	return (
		<div className='flex flex-col gap-1 py-2'>
			<Heading size='sm'>{title}</Heading>
			<ProgressBar progress={calculatePercentage(part, total)} fill='green' />
			<div className='flex gap-2'>
				<Heading size='sm'>
					{calculatePercentage(part, total).toFixed(0)}%
				</Heading>

				<Heading size='sm' className='ml-auto'>
					{formatCurrency(part)}
				</Heading>
			</div>
		</div>
	);
};

const calculatePercentage = (part: number, whole: number) => {
	const percentage = (part / whole) * 100;
	if (percentage > 100) {
		return 100;
	}
	return percentage;
};

export { PlanPanelIncome };
