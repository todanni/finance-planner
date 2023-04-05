import { type NextPage } from 'next';
import PlannerLayout from '~/components/layout/PlannerLayout';
import PlanSection from '~/components/plan';

const Plan: NextPage = () => {
	return (
		<PlannerLayout title='Plan | ToDanni Finance Planner'>
			<PlanSection />
		</PlannerLayout>
	);
};

export default Plan;
