import { Heading, Icon, type IconObject, SummaryCard } from '@todanni/ui';

export type PaymentsCardProps = {
	title: string;
	totalLabel: string;
	totalAmount: number;
	children?: React.ReactNode;
};

export type PaymentsCategory = {
	title: string;
	total: number;
	icon: IconObject;
};

const PaymentsCard = ({
	title,
	totalAmount,
	totalLabel,
	children,
}: PaymentsCardProps) => {
	return (
		<SummaryCard
			className='flex flex-col gap-4'
			withHeader={
				<PaymentsCardHeader
					title={title}
					totalLabel={totalLabel}
					totalAmount={totalAmount}
				/>
			}
			withFooter={
				<PaymentsCardFooter
					title={title}
					totalLabel={totalLabel}
					totalAmount={totalAmount}
				/>
			}>
			<div className='flex flex-1 flex-col gap-2'>{children}</div>
		</SummaryCard>
	);
};

const PaymentsCardHeader = ({ title }: PaymentsCardProps) => {
	return (
		<div className='flex items-center gap-2'>
			<Icon object='plan' size='xs' />
			<Heading size='sm' colour='white' className='font-bold'>
				{title}
			</Heading>
		</div>
	);
};

const PaymentsCardFooter = ({ totalLabel, totalAmount }: PaymentsCardProps) => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<Heading size='md' colour='white' className='font-semibold'>
				{totalLabel}
			</Heading>
			<div className='flex gap-2'>
				<Heading size='sm' colour='white' className='font-semibold'>
					£{totalAmount}
				</Heading>
			</div>
		</div>
	);
};

export { PaymentsCard };
