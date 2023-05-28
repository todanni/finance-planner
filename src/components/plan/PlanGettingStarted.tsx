import { Card, Heading, IconButton, ProgressBar, Title } from '@todanni/ui';
import { signIn } from 'next-auth/react';

type PlanGettingStartedProps = {
	signedIn: boolean;
	onClick?: (tab: string) => void;
};

export const PlanGettingStarted = ({
	signedIn,
	onClick,
}: PlanGettingStartedProps) => {
	return (
		<Card className='flex flex-col p-4'>
			<Title className='text-center'>Getting started with the Planner</Title>
			<p className='text-center text-lg font-light text-white/80'>
				What are the first steps
			</p>
			<div className='my-8 grid grid-cols-2 gap-4 px-2 text-white'>
				<div className='flex flex-col gap-1'>
					<Heading size='lg' colour='white' className='text-lg font-semibold'>
						The Planner is going to take you through the stages of setting up
						your plan
					</Heading>
					<Heading size='md' className='text-md mb-4 w-5/6'>
						Once you have completed these steps, you will be able to see your
						plan like in the example showed here.
					</Heading>
					<Heading size='lg' colour='white' className='text-lg font-semibold'>
						See how much you spend on each category
					</Heading>
					<Heading size='md' className='text-md mb-4 w-5/6'>
						The Planner will show you a breakdown of your spending with
						percentages against your income and changes from previous months.
					</Heading>
					<Heading size='lg' colour='white' className='text-lg font-semibold'>
						Compare your numbers against your goals
					</Heading>
					<Heading size='md' className='text-md mb-4 w-5/6'>
						You can set goals for each category and see how you are doing each
						month, so you can make adjustments to your plan and spending.
					</Heading>
				</div>
				<div className='flex flex-col gap-2'>
					<Heading
						size='lg'
						colour='white'
						className='mb-6 text-right text-lg font-semibold text-white'>
						Example view of your plan
					</Heading>

					<p className='inline-flex w-full justify-between text-sm font-semibold text-white'>
						Total income after tax <span className='ml-auto'>£1,234.56</span>
					</p>
					<ProgressBar progress={75} fill='green' />
					<p className='inline-flex w-full justify-between text-sm font-light text-white/80'>
						Income before tax: £1,234.56
						<span className='ml-auto'>Total deductions: £1,234.56</span>
					</p>

					<p className='mt-4 inline-flex w-full justify-between text-sm font-semibold text-white'>
						Total monthly spending <span className='ml-auto'>£1,234.56</span>
					</p>
					<ProgressBar progress={50} fill='blue' />
					<p className='inline-flex w-full justify-between text-sm font-light text-white/80'>
						Needs: £617.28
						<span className='ml-auto'>Wants: £617.28</span>
					</p>

					<p className='mt-4 inline-flex w-full justify-between text-sm font-semibold text-white'>
						Total savings contributions
						<span className='ml-auto'>£1,234.56</span>
					</p>
					<ProgressBar progress={20} fill='yellow' />
					<p className='ml-auto text-sm font-light text-white/80'>
						Interest earned: £123.56
					</p>

					<p className='mt-4 inline-flex w-full justify-between text-sm font-semibold text-white'>
						Total debt repayments
						<span className='ml-auto'>£1,234.56</span>
					</p>
					<ProgressBar progress={15} fill='red' />
					<p className='ml-auto text-sm font-light text-white/80'>
						Interest charged: £123.56
					</p>
				</div>
			</div>
			{signedIn && (
				<IconButton
					text='Enter your income for the month'
					iconEnd='arrowRight'
					fill='green'
					size='md'
					className='ml-auto w-min'
					onClick={() => onClick && onClick('income')}
				/>
			)}
			{!signedIn && (
				<IconButton
					text='Sign in or create a free account'
					iconEnd='arrowRight'
					fill='blue'
					size='md'
					className='ml-auto w-min'
					onClick={() => void signIn()}
				/>
			)}
		</Card>
	);
};
