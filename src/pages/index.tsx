import { type NextPage } from 'next';
import { LineChart, Section } from '@todanni/ui';
import { HomePageLayout } from '~/layouts/HomePageLayout';
import Hero from './home/Hero';
import BudgetShowcase from './home/BudgetShowcase';
import PlanShowcase from './home/PlanShowcase';

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
	};

	return (
		<HomePageLayout title='Finance Planner | ToDanni'>
			<Hero />
			<div className='mt-20 grid grid-cols-1 gap-x-8  gap-y-16 sm:grid-cols-2'>
				<Section
					title={sections.budgetSection.title}
					subtitle={sections.budgetSection.subTitle}
					description={sections.budgetSection.description}
				/>
				<BudgetShowcase />
				<PlanShowcase />
				<Section
					title={sections.planSection.title}
					subtitle={sections.planSection.subTitle}
					description={sections.planSection.description}
				/>
				<Section
					title={sections.trackSection.title}
					subtitle={sections.trackSection.subTitle}
					description={sections.trackSection.description}
				/>
				<LineChart />
			</div>
		</HomePageLayout>
	);
};

export default Home;
