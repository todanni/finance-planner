import PaymentForm from './PaymentForm';
import PaymentsTable from './PaymentsTable';
import { type StepProps } from './steps';

const CategoryStep = ({ categories, description, notes }: StepProps) => {
	return (
		<div className='mt-4 grid grid-cols-3 gap-6'>
			<div className='ml-4'>
				<h2 className='mb-2 text-center text-lg font-bold text-td-grn-4'>
					{description}
				</h2>
				{notes?.map((note, index) => (
					<h3 key={index} className='text-md mb-2 font-light text-td-gry-0'>
						{note}
					</h3>
				))}
			</div>
			<div>
				{categories?.map((category, index) => (
					<PaymentForm categoryId={category.id} key={index} />
				))}
			</div>
			<div className='text-white'>
				{categories?.map((category, index) => (
					<PaymentsTable key={index} category={category} />
				))}
			</div>
		</div>
	);
};

const GetStartedStep = () => {
	return (
		<div className='mt-4 grid grid-cols-3 gap-6'>
			<div className='ml-4'>
				<h2 className='mb-2 text-center text-lg font-bold text-td-grn-4'>
					Getting started
				</h2>

				<h3 className='text-md mb-2 font-light text-td-gry-0'>
					Who should use the tool?
				</h3>
			</div>
			<div></div>
			<div className='text-white'></div>
		</div>
	);
};

export default CategoryStep;
