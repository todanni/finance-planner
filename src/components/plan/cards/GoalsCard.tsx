import { Heading, Icon, ProgressBar, SummaryCard } from '@todanni/ui';

export type GoalsCardProps = {
	goalsAchieved?: string;
	goalExample?: string;
	hasButton: boolean;
	goals: GoalProps[];
};

export type GoalProps = {
	description: string;
	goal: number;
	amount: number;
	fill: 'green' | 'yellow' | 'red' | 'blue';
};

const GoalsCard = ({ goals, goalExample, hasButton }: GoalsCardProps) => {
	return (
		<SummaryCard
			className='flex flex-col gap-4'
			withHeader={<GoalsCardHeader hasButton={hasButton} />}
			withFooter={<GoalsCardFooter />}>
			<div className='flex flex-1 flex-col gap-2'>
				{goals.length === 0 && <GoalExample goalExample={goalExample} />}
				{goals.map((goal, index) => (
					<div key={index} className='flex flex-col gap-1'>
						<Heading size='sm'>{goal.description}</Heading>
						<ProgressBar
							progress={(goal.amount / goal.goal) * 100}
							fill={goal.fill}
						/>
					</div>
				))}
			</div>
		</SummaryCard>
	);
};

export type GoalExampleProps = {
	goalExample?: string;
};

const GoalExample = ({ goalExample }: GoalExampleProps) => {
	return (
		<>
			<div className='my-auto flex flex-col gap-2'>
				<Heading size='sm' className='italic'>
					Example: {goalExample}
				</Heading>
				<ProgressBar progress={75} fill={'green'} />
			</div>
		</>
	);
};

export type GoalsCardHeaderProps = {
	hasButton: boolean;
};

const GoalsCardHeader = ({ hasButton }: GoalsCardHeaderProps) => {
	return (
		<div className='flex items-center gap-2'>
			<Icon object='goal' size='xs' />
			<Heading colour='white' className='text-lg font-semibold' size='md'>
				Goals and targets
			</Heading>
			{hasButton && <Icon object='plus' size='xs' className='ml-auto' />}
		</div>
	);
};

const GoalsCardFooter = () => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<Heading size='md' colour='white' className='font-semibold'>
				No goals set yet
			</Heading>
			<div className='flex gap-2'>
				<Heading size='md' colour='white' className='font-semibold'>
					0 / 0
				</Heading>
			</div>
		</div>
	);
};

export { GoalsCard };
