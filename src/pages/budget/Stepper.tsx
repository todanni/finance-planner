/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { steps } from './steps';
import CategoryStep from './CategoryStep';
import Results from './Results';

const Stepper = () => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const handleClick = (stepIndex: number) => setCurrentStep(stepIndex);

	return (
		<div className='m-4 w-full rounded-lg border border-gray-200 bg-td-gry-6 p-4'>
			<h1 className=' text-left text-xl text-white'>Budget</h1>
			<h2 className='mb-5 text-left text-lg text-td-gry-0'>
				Visiualise your monthly budget
			</h2>
			<ol className='flex w-full items-center rounded-lg border border-gray-200 p-3 text-center text-sm font-medium text-white shadow-sm sm:space-x-4 sm:p-4 sm:text-base'>
				{steps?.map((step, index) => (
					<li
						key={index}
						className='flex items-center'
						onClick={() => handleClick(index)}>
						<span className='mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white text-xs '>
							{index + 1}
						</span>
						{step.title}
						{index + 1 === steps.length ? null : (
							<svg
								aria-hidden='true'
								className='ml-2 h-4 w-4 sm:ml-4'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={3}
									d='M13 5l7 7-7 7M5 5l7 7-7 7'
								/>
							</svg>
						)}
					</li>
				))}
			</ol>
			{steps[currentStep]?.title === 'Results' && <Results />}
			{steps[currentStep] && (
				<CategoryStep
					key={currentStep}
					categories={steps[currentStep]!.categories}
					title={steps[currentStep]!.title}
					description={steps[currentStep]!.description}
					notes={steps[currentStep]!.notes}
				/>
			)}

			{steps[currentStep]?.title !== 'Results' && (
				<div className='flex justify-end'>
					<button
						type='submit'
						className='rounded-lg bg-td-grn-4 px-4 py-2 text-center text-white'
						onClick={() => handleClick(currentStep + 1)}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Stepper;
