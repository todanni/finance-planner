import { type NextPage } from 'next';
import Layout from '~/components/layout';
import Results from '../budget/Results';
import Container from '~/components/layout/Containers';
import { type Step, steps, type StepSection } from './steps';
import React from 'react';
import PaymentForm from '../budget/PaymentForm';
import { useSession } from 'next-auth/react';

const Spending: NextPage = () => {
	const [currentStep, setCurrentStep] = React.useState(0);
	const handleClick = (stepIndex: number) => setCurrentStep(stepIndex);

	return (
		<>
			<Layout title='Spending | ToDanni Finance Planner'>
				<Container>
					<div className='my-4 grid grid-cols-2 gap-8 md:grid-cols-10'>
						{/* Current step and navigation stepper */}
						<div className='rounded-lg border border-td-gry-4 p-4 shadow-sm md:col-span-6'>
							<Stepper
								setCurrentStep={handleClick}
								title={steps[currentStep]?.title}
							/>
							<StepContents step={steps[currentStep]} />
						</div>
						{/* Results - pie chart and numbers */}
						<div className='rounded-lg border border-td-gry-4 md:col-span-4'>
							<Results />
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
};

type StepperProps = {
	title: string | undefined;
	setCurrentStep: (index: number) => void;
};

const Stepper = ({ title, setCurrentStep }: StepperProps) => {
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

type ContentsProps = {
	step: Step | undefined;
};

const StepContents = ({ step }: ContentsProps) => {
	const { data: sessionData } = useSession();

	return (
		<div className={`m-4 grid gap-4 text-white`}>
			<div className=''>
				<h1 className='text-xl font-bold'>{step?.subTitle}</h1>
			</div>
			<div className='flex flex-col gap-y-6'>
				{step?.sections.map((section, index) => (
					<StepSectionContents section={section} key={index} />
				))}
			</div>
			<div className=''>
				{step?.sections.map((section, index) => (
					<div key={index}>
						{section.hasForm && <PaymentForm categoryId={step.categoryId} />}
					</div>
				))}
			</div>
			<div className={`mt-4 self-end justify-self-end`}>
				<button
					type='button'
					className='inline-flex items-center rounded-lg bg-td-grn-4 px-5 py-2.5 text-center text-sm font-medium text-white'>
					{sessionData ? step?.nextButtonText : 'Log in to get started'}
					<svg
						aria-hidden='true'
						className='-mr-1 ml-2 h-5 w-5'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

type SectionProps = {
	section: StepSection;
};

const StepSectionContents = ({ section }: SectionProps) => {
	return (
		<div className='flex flex-col'>
			<h2 className='text-lg font-medium text-td-grn-4'>{section.heading}</h2>
			<h3 className='text-md font-normal'>{section.subHeading}</h3>
			<p className='text-sm font-light text-td-gry-0'>{section.paragraph}</p>
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

export default Spending;
