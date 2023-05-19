import { Card, IconButton } from '@todanni/ui';

export type PlanActionsBarProps = {
	onClick: (view: string) => void;
};

const PlanActionsBar = ({ onClick }: PlanActionsBarProps) => {
	return (
		<Card className='flex items-center justify-around p-2'>
			<IconButton
				text='View as table'
				iconStart='table'
				size='sm'
				onClick={() => onClick('table')}
			/>
			<IconButton
				text='View as chart'
				iconStart='breakdown'
				size='sm'
				onClick={() => onClick('chart')}
			/>
			<IconButton
				text='Add payments'
				iconStart='import'
				size='sm'
				onClick={() => onClick('form')}
			/>
		</Card>
	);
};

export { PlanActionsBar };
