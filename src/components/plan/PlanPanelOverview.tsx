import { SummaryCard, Icon, Heading } from '@todanni/ui';
import { PlanPanelSection } from './PlanPanelSection';
import { api } from '~/utils/api';

export type PanelProps = {
	startDate: Date;
	endDate: Date;
};

const PlanPanelOverview = ({}: PanelProps) => {
	return (
		<SummaryCard
			className='col-span-2 my-4 flex flex-col gap-4'
			withHeader={<OverviewCardHeader />}
			withFooter={<OverviewCardFooter />}>
			<div className='flex flex-1 flex-col gap-2'>
				<PlanPanelSection
					title='Income'
					icon='money'
					fill='green'
					percentage={100}
					amounts={[
						{
							icon: 'money',
							title: 'Net income',
							amount: 1000,
						},
						{
							icon: 'money',
							title: 'Benefits',
							amount: 1000,
						},
						{
							icon: 'money',
							title: 'Deductions',
							amount: 1000,
						},
					]}
				/>
			</div>
		</SummaryCard>
	);
};

const IncomeSection = ({ startDate, endDate }: PanelProps) => {
	const { data: allTotals, isLoading } = api.totals.all.useQuery({
		startDate: startDate,
		endDate: endDate,
	});

	if (isLoading) return <div>Loading...</div>;

	return (
		<PlanPanelSection
			title='Income'
			icon='money'
			fill='green'
			percentage={100}
			amounts={[
				{
					icon: 'money',
					title: 'Net income',
					amount: 1000,
				},
				{
					icon: 'money',
					title: 'Benefits',
					amount: 1000,
				},
				{
					icon: 'money',
					title: 'Deductions',
					amount: 1000,
				},
			]}
		/>
	);
};

const OverviewCardHeader = () => {
	return (
		<div className='flex items-center justify-center gap-2'>
			<Icon object='calendar' size='xs' />
			<Heading colour='white' className='text-lg font-bold' size='md'>
				Total monthly overview
			</Heading>
		</div>
	);
};

const OverviewCardFooter = () => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<Heading size='md' colour='white' className='font-semibold'>
				Remaining balance
			</Heading>
			<div className='flex gap-2'>
				<Heading size='md' colour='white' className='font-semibold'>
					£345.67
				</Heading>
			</div>
		</div>
	);
};

export { PlanPanelOverview };
