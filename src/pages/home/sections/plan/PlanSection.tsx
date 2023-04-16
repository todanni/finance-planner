import { Title } from '@todanni/ui';

const PlanSection = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title size='large' intent='primary'>
				Advance by making a plan
			</Title>
			<h2 className='text-lg text-white'>
				Set clear goals of what you want to achieve
			</h2>
			<h3 className='text-md text-white/50'>
				Once you have a clear view of your spending, you can create a plan to
				outline your goals. The Finance Planner provides you with the option to
				break down your spending even further, set targets for where you want to
				be and how fast you want to get there.
			</h3>
		</div>
	);
};

export default PlanSection;
