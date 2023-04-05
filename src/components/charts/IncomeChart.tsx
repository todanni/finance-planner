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
				display: false,
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
					'#5691D0',
					'#2978CC',
					'#1664B6',
					'#1B5088',
					'#1C4066',
					'#1B344D',
					'#19293B',
					'#16212D',
					'#131B23',
				],
			},
		],
	};

	return (
		<div className='flex w-full flex-col items-center'>
			<h1 className='mb-4 text-xl text-white'> Your income </h1>
			<div className='h-4/5'>
				<Doughnut options={options} data={data} className='' />
			</div>
			<p className=' bottom-0 -translate-y-1/2 text-lg text-white'>8023£</p>
		</div>
	);
};

// -50% to the right
// 0 from current
// transform: translate(-50%, 0);

export default IncomeChart;
