import { type NextPage } from 'next';
import {
	Card,
	Heading,
	IconButton,
	LineChart,
	ResponsiveGrid,
	Title,
} from '@todanni/ui';
import { HomePageLayout } from '~/layouts/HomePageLayout';
import router from 'next/router';
import BudgetShowcase from '~/components/home/BudgetShowcase';
import Hero from '~/components/home/Hero';
import PlanShowcase from '~/components/home/PlanShowcase';

const Home: NextPage = () => {
	const sections = {
		budgetSection: {
			title: 'Start by creating a budget',
			subTitle: 'Use the budget tool to visualise your obligatory spending',
			description:
				'The first step of taking control of your finances is to understand where your money is going every month. The Finance Planner lets you categorise your spending and provides you with a clear view of your monthly outgoings.',
		},
		planSection: {
			title: 'Advance by making a plan',
			subTitle: 'Set clear goals of what you want to achieve',
			description:
				'Once you have a clear view of your spending, you can create a plan to outline your goals. The Finance Planner provides you with the option to break down your spending even further, set targets for where you want to be and how fast you want to get there.',
		},
		trackSection: {
			title: 'Track your spending',
			subTitle:
				'Find all of your spending, debt and savings information in one place',
			description:
				'The Finance Planner includes a dashboard where you can see track real time how much you have spent for the month, how your savings are performing.',
		},
	} as const;

	return (
		<HomePageLayout title='Finance Planner | ToDanni'>
			<div className='flex flex-col gap-8'>
				<Hero />
				<ResponsiveGrid>
					<Section
						{...sections.budgetSection}
						button='Try out the budget feature'
					/>
					<BudgetShowcase />
					<PlanShowcase />
					<Section {...sections.planSection} />
					<Section {...sections.trackSection} />
					<Card className='px-2 pt-4'>
						<LineChart />
					</Card>
				</ResponsiveGrid>
			</div>
		</HomePageLayout>
	);
};

type SectionProps = {
	title: string;
	subTitle: string;
	description: string;
	button?: string;
};

const Section = ({ title, subTitle, description, button }: SectionProps) => {
	return (
		<div className='my-4 flex h-full flex-col gap-1 p-4'>
			<Title>{title}</Title>
			<Heading size='lg' className='text-lg font-bold'>
				{subTitle}
			</Heading>
			<Heading className='text-md' size='md'>
				{description}
			</Heading>
			{button && (
				<IconButton
					size='sm'
					fill='blue'
					iconEnd='arrowRight'
					text={button}
					className='mt-4 w-fit'
					onClick={() => void router.push('/budget')}
				/>
			)}
		</div>
	);
};

export default Home;
