import {
	Heading,
	Icon,
	type IconObject,
	Paragraph,
	SummaryCard,
} from '@todanni/ui';

export type BalanceCardProps = {
	title: string;
	totalLabel: string;
	totalAmount: number;
	balances: BalanceProps[];
};

export type BalanceProps = {
	icon: IconObject;
	name: string;
	amount: number;
	fill: 'green' | 'yellow' | 'red' | 'blue' | 'default';
	totalPayments?: number;
	totalInterest?: number;
};

const BalancesCard = ({
	title,
	totalLabel,
	totalAmount,
	balances,
}: BalanceCardProps) => {
	return (
		<SummaryCard
			className='flex flex-col'
			withHeader={<BalancesCardHeader title={title} />}
			withFooter={
				<BalancesCardFooter totalLabel={totalLabel} totalAmount={totalAmount} />
			}>
			<div className='my-4 flex flex-1 flex-col gap-2'>
				{balances.map((balance) => (
					<div key={balance.name} className='flex items-center gap-2 pr-2'>
						<Icon object={balance.icon} size='xs' colour={balance.fill} />
						<Heading size='sm'>{balance.name}</Heading>
						<Heading size='sm' className='ml-auto'>
							£
							{balance.amount.toLocaleString('en-UK', {
								maximumFractionDigits: 2,
								minimumFractionDigits: 2,
							})}
						</Heading>
					</div>
				))}
			</div>
		</SummaryCard>
	);
};

type BalanceCardHeaderProps = {
	title: string;
};

const BalancesCardHeader = ({ title }: BalanceCardHeaderProps) => {
	return (
		<div className='flex items-center gap-2 pr-1'>
			<Icon object='percentReceipt' size='xs' />
			<Heading colour='white' className='text-lg font-semibold' size='md'>
				{title}
			</Heading>
			<Icon object='help' size='xs' className='ml-auto' />
		</div>
	);
};

type BalanceCardFooterProps = {
	totalLabel: string;
	totalAmount: number;
};

const BalancesCardFooter = ({
	totalLabel,
	totalAmount,
}: BalanceCardFooterProps) => {
	return (
		<div className='flex items-center justify-between gap-2 pr-1'>
			<Heading colour='white' className='text-lg font-semibold'>
				{totalLabel}
			</Heading>
			<div className='flex gap-2'>
				<Heading colour='white' className='text-lg font-semibold'>
					£
					{totalAmount.toLocaleString('en-GB', {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</Heading>
			</div>
		</div>
	);
};

export { BalancesCard };
