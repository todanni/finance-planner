import { Card, DonutChart, Heading } from '@todanni/ui';

const BudgetShowcase = () => {
	const chartInputs = [
		{
			label: 'Debt',
			amount: 250,
			colour: '#4DABF7',
		},
		{
			label: 'Savings',
			amount: 300,
			colour: '#208CE3',
		},
		{
			label: 'Bills',
			amount: 750,
			colour: '#236FAC',
		},
		{
			label: 'Living costs',
			amount: 250,
			colour: '#245882',
		},
		{
			label: 'Discretionary',
			amount: 350,
			colour: '#234662',
		},
	];

	return (
		<Card className='grid grid-cols-3'>
			<Heading
				size='lg'
				className='col-span-3 mt-2 text-center text-lg font-bold'>
				Your budget
			</Heading>
			<div className='col-span-1'>
				<DonutChart chartInputs={chartInputs} />
			</div>
			<div className='col-span-2 flex flex-col justify-center gap-1 p-4'>
				{chartInputs.map((input) => (
					<div key={input.label} className='flex justify-between gap-2'>
						<div className='flex items-center gap-2 '>
							<div
								className='bg-chart-0 h-4 w-4 border border-white'
								style={{ backgroundColor: `${input.colour}` }}
							/>
							<p className='text-base text-gray-600 dark:text-white'>
								{input.label}
							</p>
						</div>
						<p className='text-base text-gray-600 dark:text-white'>{`£${input.amount}`}</p>
					</div>
				))}
			</div>
		</Card>
	);
};

export default BudgetShowcase;
