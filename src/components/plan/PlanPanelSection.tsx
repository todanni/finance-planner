import { type IconObject, Icon, Heading, ProgressBar } from '@todanni/ui';
import { formatCurrency } from '~/utils/currency';

export type PlanPanelSectionProps = {
	title: string;
	icon: IconObject;
	fill: 'green' | 'red' | 'blue' | 'yellow';
	percentage: number;
	amounts: {
		icon: IconObject;
		title: string;
		amount: number;
	}[];
};

const PlanPanelSection = ({
	title,
	icon,
	fill,
	amounts,
	percentage,
}: PlanPanelSectionProps) => {
	return (
		<>
			<div className='mt-4 flex gap-3'>
				<Icon object={icon} size='xs' colour={fill} />
				<Heading size='sm'>{title}</Heading>
				<Heading size='sm' className='ml-auto'>
					{percentage}%
				</Heading>
			</div>
			<ProgressBar progress={percentage} fill={fill} />
			<div className='grid grid-cols-3 py-2'>
				<div className='flex gap-2'>
					{amounts[0]?.icon && <Icon object={amounts[0]?.icon} size='xs' />}
					<Heading size='sm'>{amounts[0]?.title}:</Heading>
					<Heading size='sm'>{formatCurrency(amounts[0]?.amount)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-center'>
					{amounts[1]?.icon && <Icon object={amounts[1]?.icon} size='xs' />}
					<Heading size='sm'>{amounts[1]?.title}:</Heading>
					<Heading size='sm'>{formatCurrency(amounts[1]?.amount)}</Heading>
				</div>
				<div className='flex gap-2 justify-self-end'>
					{amounts[2]?.icon && <Icon object={amounts[2]?.icon} size='xs' />}
					<Heading size='sm'>{amounts[2]?.title}:</Heading>
					<Heading size='sm'>{formatCurrency(amounts[2]?.amount)}</Heading>
				</div>
			</div>
		</>
	);
};

export { PlanPanelSection };
