import { Card, DualToneCard, Heading } from '@todanni/ui';

const PlanShowcase = () => {
	return (
		<Card fill='green' className='flex flex-col gap-1 p-4'>
			<Heading
				size='lg'
				className='inline-flex text-xl font-semibold'
				colour='white'>
				Monthly savings contributions <span className='ml-auto'>£817.85</span>
			</Heading>
			<Heading
				size='md'
				className='ml-2 mt-2 inline-flex text-lg'
				colour='white'>
				Pension contributions <span className='ml-auto'>£250.00</span>
			</Heading>
			<Heading size='md' className='ml-2 inline-flex text-lg' colour='white'>
				Help to buy ISA <span className='ml-auto'>£600.37</span>
			</Heading>
			<Heading size='md' className='ml-2 inline-flex text-lg' colour='white'>
				Stocks and Shares ISA <span className='ml-auto'>£310.95</span>
			</Heading>
			<Heading size='md' className='mt-auto inline-flex text-lg' colour='white'>
				Total savings balance <span className='ml-auto'>£21,081.49</span>
			</Heading>
		</Card>
	);
};

export default PlanShowcase;
