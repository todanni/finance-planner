import { type NextPage } from 'next';
// import IncomeChart from '~/components/charts/IncomeChart';
import Layout from '~/components/layout';
import PlanSection from '~/components/plan';

const Plan: NextPage = () => {
	return (
		<>
			<Layout title='Plan | ToDanni Finance Planner'>
				<div className={`flex justify-between`}>
					<div className='w-full  xl:max-w-[1280px]'>
						<PlanSection />
						{/* <IncomeChart /> */}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Plan;
