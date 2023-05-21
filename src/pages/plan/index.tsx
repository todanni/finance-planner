import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Plan: NextPage = () => {
	return (
		<DefaultLayout currentLocation='plan'>
			<div className='mt-4 rounded-xl'></div>
		</DefaultLayout>
	);
};

export default Plan;
