import {
	DualToneCard,
	Heading,
	Icon,
	Paragraph,
	SummaryCard,
} from '@todanni/ui';

export type InsightsCardProps = {
	insights: string[];
};

const InsightsCard = ({ insights }: InsightsCardProps) => {
	return (
		<SummaryCard
			className='flex flex-col gap-4'
			withHeader={<InsightsCardHeader />}
			withFooter={<InsightsCardFooter />}>
			<div className='flex flex-1 flex-col gap-2'>
				{insights.length === 0 && (
					<Paragraph>
						You are all good! You have no insights to look at.
					</Paragraph>
				)}
				{insights.map((goal, index) => (
					<DualToneCard
						fill='default'
						key={index}
						className='flex justify-between'>
						<Heading size='sm'>{goal}</Heading>
						<Icon object='idea' size='xs' />
					</DualToneCard>
				))}
			</div>
		</SummaryCard>
	);
};

const InsightsCardHeader = () => {
	return (
		<div className='flex items-center gap-2'>
			<Icon object='idea' size='xs' />
			<Heading colour='white' className='font-bold' size='md'>
				Insights
			</Heading>
		</div>
	);
};

const InsightsCardFooter = () => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<Heading colour='white' className='font-bold' size='md'>
				...and a few more (4).
			</Heading>
		</div>
	);
};

export { InsightsCard };
