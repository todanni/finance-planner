import { type StepSection } from '~/pages/budget/steps';

type InstructionsProps = {
	section: StepSection;
};

const StepInstructions = ({ section }: InstructionsProps) => {
	return (
		<div className='flex flex-col'>
			<h2 className='text-lg font-medium text-td-grn-4'>{section.heading}</h2>
			<h3 className='text-md font-normal'>{section.subHeading}</h3>
			<p className='text-sm font-light text-td-gry-0'>{section.paragraph}</p>
		</div>
	);
};

export default StepInstructions;
