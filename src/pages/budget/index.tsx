import { type NextPage } from 'next';
import Layout from '~/components/layout';
import Stepper from './Stepper';

const Budget: NextPage = () => {
	return (
		<>
			<Layout title='Budget | ToDanni Finance Planner'>
				<div className='flex flex-col items-center justify-center px-20'>
					<Stepper />
				</div>
			</Layout>
		</>
	);
};

export default Budget;
