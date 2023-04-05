import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type Props = {
	someProp?: string;
};

const IncomeChart = ({}: Props) => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const categories = [
		{
			title: 'Salary',
			amount: 4569,
		},
		{
			title: 'RSUs',
			amount: 3458,
		},
		{
			title: 'Interest',
			amount: 10,
		},
		{
			title: 'Investments',
			amount: 200,
		},
	];

	const labels = categories?.map((category) => category.title);
	const amount = labels?.map(
		(label) => categories?.find((category) => category.title === label)?.amount,
	);

	const options = {
		rotation: -90,
		circumference: 180,
		responsive: true,
		plugins: {
			legend: {
				// display: false,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: 'Income',
				data: amount,
				backgroundColor: [
					'#f75a68',
					'#359EE5',
					'#FF9F40',
					'#4BC0C0',
					'#7F60F3',
				],
			},
		],
	};

	return (
		<div className='flex w-full flex-col items-center'>
			<h1 className='mb-4 text-xl text-white'> Your income </h1>
			<div className='relative h-[400px] w-[600px]'>
				<Doughnut options={options} data={data} className='absolute' />
				<p className='absolute bottom-0 -translate-y-full text-lg text-white'>
					8023£
				</p>
			</div>
		</div>
	);
};

// -50% to the right
// 0 from current
// transform: translate(-50%, 0);

export default IncomeChart;
