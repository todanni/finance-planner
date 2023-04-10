import PaymentForm from './PaymentForm';
import { type StepProps } from './steps';

const CategoryStep = ({ categories, title, description, notes }: StepProps) => {
	return (
		<div className='mt-4 grid grid-cols-2'>
			<div>
				{categories?.map((category, index) => (
					<PaymentForm category={category} key={index} />
				))}
			</div>
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
		</div>
	);
};

export default CategoryStep;
