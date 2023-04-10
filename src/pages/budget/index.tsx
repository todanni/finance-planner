import { type NextPage } from 'next';
import Layout from '~/components/layout';
import { steps } from './steps';
import CategoryStep from './CategoryStep';
import Stepper from './Stepper';

const Budget: NextPage = () => {
	return (
		<>
			<Layout title='Budget | ToDanni Finance Planner'>
				<div className='flex flex-col items-center justify-center px-20'>
					{/* <Steps /> */}
					<Stepper></Stepper>
				</div>
			</Layout>
		</>
	);
};

const Steps = () => {
	return (
		<ol className='relative border-l border-gray-200 text-white  '>
			{steps?.map((step, index) => (
				<CategoryStep
					key={index}
					categories={step.categories}
					title={step.title}
					description={step.description}
					note={step.note}
				/>
			))}
		</ol>
	);
};

export default Budget;
