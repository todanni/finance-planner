import { DonutChart } from '@todanni/ui';

const BudgetExample = () => {
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
		<div className='grid grid-cols-3 rounded-xl border-2 border-white/5'>
			<div className='col-span-1'>
				<DonutChart chartInputs={chartInputs} />
			</div>
			<div className='col-span-2 flex flex-col self-center p-4'>
				<p className='text-md mb-2 text-end font-bold text-white'>
					Your budget
				</p>
				{chartInputs.map((input) => (
					<div key={input.label} className='flex justify-between gap-2'>
						<div className='flex items-center gap-2 '>
							<div
								className='h-4 w-4 border border-white bg-chart-0'
								style={{ backgroundColor: `${input.colour}` }}
							/>
							<p className='text-base text-white'>{input.label}</p>
						</div>
						<p className='text-base text-white'>{`£${input.amount}`}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BudgetExample;
