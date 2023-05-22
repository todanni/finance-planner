import { DualToneCard } from '@todanni/ui';
import { type NextPage } from 'next';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Plan: NextPage = () => {
	return (
		<DefaultLayout currentLocation='about'>
			<DualToneCard fill='yellow' className='m-8 p-10'>
				<p className='text-center text-lg font-bold text-white'>
					This page is under construction
				</p>
				<p className='text-md text-center text-white'>Please come back later</p>
			</DualToneCard>
		</DefaultLayout>
	);
};

export default Plan;
