import { Heading, Icon, SummaryCard } from '@todanni/ui';

export type TaxCardProps = {
	hasButton: boolean;
	payments: TaxProps[];
};

export type TaxProps = {
	name: string;
	amount: number;
};

const TaxCard = ({ hasButton }: TaxCardProps) => {
	return (
		<SummaryCard
			className='flex flex-col gap-4'
			withHeader={<TaxCardHeader hasButton={hasButton} />}
			withFooter={<TaxCardFooter />}>
			<div className='flex flex-1 flex-col gap-2'>
				{/* {payments.length === 0 && (
					<Paragraph>
						Start keeping track of your taxes by adding the deductions from your
						income.
					</Paragraph>
				)} */}
				{/* {payments.map((goal, index) => (
					<div key={index} className='flex justify-between'>
						<Heading size='sm'>{goal.name}</Heading>
						<Heading size='sm'>{goal.amount}</Heading>
					</div>
				))} */}
				<div className='flex flex-col gap-1'>
					<div className='flex gap-3'>
						<Heading size='sm'>Income Tax</Heading>
						<Heading size='sm' className='ml-auto'>
							£123.45
						</Heading>
					</div>
					<div className='flex gap-3'>
						<Heading size='sm'>National Insurance</Heading>
						<Heading size='sm' className='ml-auto'>
							£123.45
						</Heading>
					</div>
					<div className='flex gap-3'>
						<Heading size='sm'>Pension Contributions</Heading>
						<Heading size='sm' className='ml-auto'>
							£123.45
						</Heading>
					</div>
					<div className='flex gap-3'>
						<Heading size='sm'>Student Loan Repayments</Heading>
						<Heading size='sm' className='ml-auto'>
							£123.45
						</Heading>
					</div>
				</div>
			</div>
		</SummaryCard>
	);
};

export type TaxCardHeaderProps = {
	hasButton: boolean;
};

const TaxCardHeader = ({ hasButton }: TaxCardHeaderProps) => {
	return (
		<div className='flex items-center gap-2'>
			<Icon object='calendar' size='xs' />
			<Heading colour='white' className='font-bold' size='md'>
				Current tax year
			</Heading>
			{hasButton && <Icon object='plus' size='xs' className='ml-auto' />}
		</div>
	);
};

const TaxCardFooter = () => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<Heading size='md' colour='white' className='font-semibold'>
				Total net income
			</Heading>
			<div className='flex gap-2'>
				<Heading size='md' colour='white' className='font-semibold'>
					£12,345.67
				</Heading>
			</div>
		</div>
	);
};

export { TaxCard };
