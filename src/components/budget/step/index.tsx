import React from 'react';
import BudgetStepper from './Stepper';
import { steps } from '~/pages/spending/steps';
import BudgetStepContents from './Contents';

const StepComponent = () => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const handleClick = (stepIndex: number) => setCurrentStep(stepIndex);

	return (
		<div className='rounded-lg border border-td-gry-4 p-4 shadow-sm md:col-span-6'>
			<BudgetStepper
				setCurrentStep={handleClick}
				title={steps[currentStep]?.title}
			/>
			<BudgetStepContents step={steps[currentStep]} />
		</div>
	);
};

export default StepComponent;
