import { DonutChart, Heading, Icon, Paragraph, SummaryCard } from '@todanni/ui';

export type BreakdownCardProps = {
	title: string;
	totalLabel: string;
	totalAmount: number;
};

const BreakdownCard = () => {
	return (
		<SummaryCard
			withHeader={<BreakdownCardHeader />}
			withFooter={<BreakdownCardFooter />}
			className='flex flex-col'>
			<div className='flex w-1/2'>
				<DonutChart
					chartInputs={[
						{
							label: 'Debt',
							amount: 50,
							colour: '#dc2626',
						},
						{
							label: 'Spending',
							amount: 20,
							colour: '#16a34a',
						},
						{
							label: 'Savings',
							amount: 30,
							colour: '#fde047',
						},
					]}
				/>
				<div></div>
			</div>
		</SummaryCard>
	);
};

const BreakdownCardHeader = () => {
	return (
		<div className='flex items-center gap-2 pr-1'>
			<Icon object='breakdown' size='xs' />
			<Heading colour='white' className='text-lg font-semibold' size='md'>
				Payments Breakdown
			</Heading>
		</div>
	);
};

const BreakdownCardFooter = () => {
	return (
		<div className='flex items-center justify-between gap-2 pr-1'>
			<Heading colour='white' className='text-lg font-semibold'>
				Wants / Needs / Savings
			</Heading>
			<div className='flex gap-2'>
				<Heading colour='white' className='text-lg font-semibold'>
					20 / 30 / 50
				</Heading>
			</div>
		</div>
	);
};

export { BreakdownCard };
