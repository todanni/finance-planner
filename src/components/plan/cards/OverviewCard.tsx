import { Heading, Icon, ProgressBar, SummaryCard } from '@todanni/ui';

export type CategoryTotals = {
	start?: number | null;
	middle?: number | null;
	end?: number | null;
	hasData: boolean;
	isLoading: boolean;
};

export type OverviewCardProps = {
	income: CategoryTotals;
	spending: CategoryTotals;
	savings: CategoryTotals;
	debt: CategoryTotals;
	remaining: number;
};

const formatCurrency = (value: number | undefined | null) => {
	if (!value) {
		return '£0.00';
	}

	return (
		'£' +
		value.toLocaleString('en-GB', {
			maximumFractionDigits: 2,
			minimumFractionDigits: 2,
		})
	);
};

const OverviewCard = (props: OverviewCardProps) => {
	return (
		<SummaryCard
			className='col-span-2 flex flex-col gap-4'
			withHeader={<OverviewCardHeader />}
			withFooter={<OverviewCardFooter />}>
			<div className='flex flex-1 flex-col gap-2'>
				<IncomeOverview {...props.income} />
				<SpendingOverview {...props.spending} />
				<SavingsOverview {...props.savings} />
				<DebtOverview {...props.debt} />
			</div>
		</SummaryCard>
	);
};

const SavingsOverview = ({ start, middle, end }: CategoryTotals) => {
	return (
		<>
			<div className='mt-4 flex gap-3'>
				<Icon object='piggy' size='xs' colour='yellow' />
				<Heading size='sm'>Savings</Heading>
				<Heading size='sm' className='ml-auto'>
					20%
				</Heading>
			</div>
			<ProgressBar progress={20} fill={'yellow'} />

			<div className='grid grid-cols-3 py-2'>
				<div className='flex gap-2'>
					<Icon object='money' size='xs' />
					<Heading size='sm'>Contributions:</Heading>
					<Heading size='sm'>{formatCurrency(start)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-center'>
					<Icon object='percentReceipt' size='xs' />
					<Heading size='sm'>Interest added:</Heading>
					<Heading size='sm'>{formatCurrency(middle)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-end'>
					<Icon object='scales' size='xs' />
					<Heading size='sm'>Balance:</Heading>
					<Heading size='sm'>{formatCurrency(end)}</Heading>
				</div>
			</div>
		</>
	);
};

const IncomeOverview = ({ start, middle, end }: CategoryTotals) => {
	return (
		<>
			<div className='flex gap-3'>
				<Icon object='money' size='xs' colour='green' />
				<Heading size='sm'>Net income</Heading>
				<Heading size='sm' className='ml-auto'>
					£123.45
				</Heading>
			</div>
			<ProgressBar progress={100} fill={'green'} />
			<div className='grid grid-cols-3 py-2'>
				<div className='flex gap-2'>
					<Icon object='plan' size='xs' />
					<Heading size='sm'>Income payments:</Heading>
					<Heading size='sm'>{formatCurrency(start)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-center'>
					<Icon object='bill' size='xs' />
					<Heading size='sm'>Taxable benefits:</Heading>
					<Heading size='sm'>{formatCurrency(middle)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-end'>
					<Icon object='tax' size='xs' />
					<Heading size='sm'>Deductions:</Heading>
					<Heading size='sm'>{formatCurrency(end)}</Heading>
				</div>
			</div>
		</>
	);
};

const SpendingOverview = ({ start, middle, end }: CategoryTotals) => {
	return (
		<>
			<div className='mt-4 flex gap-3'>
				<Icon object='wallet' size='xs' colour='blue' />
				<Heading size='sm'>Spending</Heading>
				<Heading size='sm' className='ml-auto'>
					30%
				</Heading>
			</div>
			<ProgressBar progress={30} fill={'blue'} />
			<div className='grid grid-cols-3 py-2'>
				<div className='flex gap-2'>
					<Icon object='plan' size='xs' />
					<Heading size='sm'>Living costs:</Heading>
					<Heading size='sm'>{formatCurrency(start)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-center'>
					<Icon object='bill' size='xs' />
					<Heading size='sm'>Bills:</Heading>
					<Heading size='sm'>{formatCurrency(middle)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-end'>
					<Icon object='plan' size='xs' />
					<Heading size='sm'>Discretionary:</Heading>
					<Heading size='sm'>{formatCurrency(end)}</Heading>
				</div>
			</div>
		</>
	);
};

const DebtOverview = ({ start, middle, end }: CategoryTotals) => {
	return (
		<>
			<div className='mt-4 flex gap-3'>
				<Icon object='card' size='xs' colour='red' />
				<Heading size='sm'>Debt</Heading>
				<Heading size='sm' className='ml-auto'>
					30%
				</Heading>
			</div>
			<ProgressBar progress={30} fill={'red'} />
			<div className='grid grid-cols-3 py-2'>
				<div className='flex gap-2'>
					<Icon object='money' size='xs' />
					<Heading size='sm'>Repayments:</Heading>
					<Heading size='sm'>{formatCurrency(start)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-center'>
					<Icon object='percentReceipt' size='xs' />
					<Heading size='sm'>Interest added:</Heading>
					<Heading size='sm'>{formatCurrency(middle)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-end'>
					<Icon object='scales' size='xs' />
					<Heading size='sm'>Balance:</Heading>
					<Heading size='sm'>{formatCurrency(end)}</Heading>
				</div>
			</div>
		</>
	);
};

export type OverviewCardHeaderProps = {
	hasButton: boolean;
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

export { OverviewCard };
