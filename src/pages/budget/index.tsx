import { type NextPage } from 'next';
import { type ReactNode } from 'react';
import BudgetResult from '~/components/budget/result';
import BudgetStep from '~/components/budget/step';
import Layout from '~/components/layout';

const Budget: NextPage = () => {
	return (
		<>
			<Layout title='Budget | ToDanni Finance Planner'>
				<BudgetGridContainer>
					<div className='col-span-4 rounded-lg border border-td-gry-4'>
						<BudgetStep />
					</div>
					<div className='col-span-2 rounded-lg border border-td-gry-4'>
						<BudgetResult />
					</div>
				</BudgetGridContainer>
			</Layout>
		</>
	);
};

export default Budget;

// Layout of the page

type Props = {
	children: ReactNode;
};

const BudgetGridContainer = ({ children }: Props) => (
	// To center the whole container against the page
	<div className='flex justify-center'>
		{/* To create the layout for the components within */}
		<div className='grid max-w-6xl grid-cols-6 gap-6 p-8'>{children}</div>
	</div>
);
