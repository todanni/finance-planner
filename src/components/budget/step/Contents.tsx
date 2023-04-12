import { type Step } from '~/pages/budget/steps';
import StepInstructions from './Instructions';
import BudgetPaymentForm from '../form';

type ContentsProps = {
	step: Step | undefined;
};

const BudgetStepContents = ({ step }: ContentsProps) => {
	// const { data: sessionData } = useSession();

	return (
		<div className={`m-4 grid gap-4 text-white`}>
			<div className=''>
				<h1 className='text-xl font-bold'>{step?.subTitle}</h1>
			</div>
			<div className='flex flex-col gap-y-6'>
				{step?.sections.map((section, index) => (
					<StepInstructions section={section} key={index} />
				))}
			</div>
			<div className=''>
				<div>
					{step?.hasForm && <BudgetPaymentForm categoryId={step?.categoryId} />}
				</div>
			</div>
		</div>
	);
};

export default BudgetStepContents;
