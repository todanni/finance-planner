import { api } from '~/utils/api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const Results = () => {
	return (
		<div className='flex text-white'>
			<IncomeChart />
		</div>
	);
};

const IncomeChart = () => {
	const { data: payments } = api.payment.listForCurrentMonth.useQuery();
	const { data: categories } = api.category.getAll.useQuery();
	const labels = categories?.map((category) => category.name);

	const amounts = categories?.map(
		(category) =>
			payments?.find(
				(payment) =>
					payment.subCategory.categoryId === category.id &&
					payment.subCategory.categoryId !== 1,
			)?.amount,
	);

	ChartJS.register(ArcElement, Tooltip, Legend);

	const options = {
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
				// label: 'Budget',
				data: amounts,
				backgroundColor: [
					'#5691D0',
					'#2978CC',
					'#1664B6',
					'#1B5088',
					'#1C4066',
				],
			},
		],
	};

	return (
		<div
			style={{
				height: '60vh',
				position: 'relative',
				marginBottom: '1%',
				padding: '1%',
			}}>
			<Doughnut options={options} data={data} />
		</div>
	);
};

export default Results;
