import React from 'react';
import BudgetStepper from './Stepper';
import { steps } from '~/constants/steps';
import BudgetStepContents from './Contents';
import NextStepButton from './NextButton';

const BudgetStep = () => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const handleClick = (stepIndex: number) => setCurrentStep(stepIndex);

	return (
		<div className='flex h-full flex-col justify-between p-4'>
			<BudgetStepper
				setCurrentStep={handleClick}
				title={steps[currentStep]?.title}
			/>
			<BudgetStepContents step={steps[currentStep]} />
			<div className={`mt-4 self-end justify-self-end`}>
				<NextStepButton buttonText={steps[currentStep]?.nextButtonText} />
			</div>
		</div>
	);
};

export default BudgetStep;
