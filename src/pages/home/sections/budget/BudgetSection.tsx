import { Title } from '@todanni/ui';

const BudgetSection = () => {
	return (
		<div className='flex flex-col gap-2'>
			<Title size='large' intent='primary'>
				Start by creating a budget
			</Title>
			<h2 className='text-lg text-white'>
				Use the budget tool to visualise your obligatory spending
			</h2>
			<h3 className='text-md text-white/50'>
				The first step of taking control of your finances is to understand where
				your money is going every month.
			</h3>
			<h3 className='text-md text-white/50'>
				The Finance Planner lets you categorise your spending and provides you
				with a clear view of your monthly outgoings.
			</h3>
		</div>
	);
};

export default BudgetSection;
