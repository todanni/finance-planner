import { steps } from '~/pages/spending/steps';

type StepperProps = {
	title: string | undefined;
	setCurrentStep: (index: number) => void;
};

const BudgetStepper = ({ title, setCurrentStep }: StepperProps) => {
	return (
		<div className='flex w-full items-center justify-around rounded-lg border border-td-gry-3 p-3 font-light text-white'>
			{steps?.map((step, index) => (
				<div
					onClick={() => setCurrentStep(index)}
					key={index}
					className={`flex justify-between ${
						step.title === title ? 'text-td-grn-4' : 'text-white'
					}`}>
					<span className='ml-1'>{step.title}</span>
					{index + 1 !== steps.length && <Separator />}
				</div>
			))}
		</div>
	);
};

const Separator = () => (
	<svg
		aria-hidden='true'
		className='h-6 w-6'
		fill='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
			clipRule='evenodd'
		/>
	</svg>
);

export default BudgetStepper;
