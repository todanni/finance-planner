import { Title } from '@todanni/ui';

const TrackSection = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title size='large' intent='primary'>
				Track your spending
			</Title>
			<h2 className='text-lg text-white'>
				Find all of your spending, debt and savings information in one place
			</h2>
			<h3 className='text-md text-white/50'>
				The Finance Planner includes a dashboard where you can see track real
				time how much you have spent for the month, how your savings are
				performing.
			</h3>
		</div>
	);
};

export default TrackSection;
