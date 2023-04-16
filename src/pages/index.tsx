import { type NextPage } from 'next';
import DefaultLayout from '~/layouts/DefaultLayout';
import Hero from './home/Hero';
import BudgetSection from './home/sections/budget/BudgetSection';
import PlanSection from './home/sections/plan/PlanSection';
import TrackExample from './home/sections/track/TrackExample';
import TrackSection from './home/sections/track/TrackSection';
import PlanExample from './home/sections/plan/PlanExample';
import BudgetExample from './home/sections/budget/BudgetExample';

const Home: NextPage = () => {
	return (
		<DefaultLayout title='Finance Planner | ToDanni'>
			<Hero />
			<div className='mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
				<BudgetSection />
				<BudgetExample />
				<PlanExample />
				<PlanSection />
				<TrackSection />
				<TrackExample />
			</div>
		</DefaultLayout>
	);
};

export default Home;
