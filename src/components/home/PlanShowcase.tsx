import { DualToneCard, Heading } from '@todanni/ui';

const PlanShowcase = () => {
	return (
		<DualToneCard fill='green' className='flex flex-col p-4'>
			<Heading size='lg' className='inline-flex text-xl font-semibold'>
				Monthly savings contributions <span className='ml-auto'>£817.85</span>
			</Heading>
			<Heading size='md' className='inline-flex text-lg'>
				Pension contributions <span className='ml-auto'>£250.00</span>
			</Heading>
			<Heading size='md' className='inline-flex text-lg'>
				Help to buy ISA <span className='ml-auto'>£600.37</span>
			</Heading>
			<Heading size='md' className='inline-flex text-lg'>
				Stocks and Shares ISA <span className='ml-auto'>£310.95</span>
			</Heading>
			<Heading size='md' className='mt-auto inline-flex text-lg'>
				Total savings balance <span className='ml-auto'>£21,081.49</span>
			</Heading>
		</DualToneCard>
	);
};

export default PlanShowcase;
