import { api } from '~/utils/api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import BudgetResultTotals from './Totals';

const BudgetResultChart = () => {
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
		layout: {
			padding: 20,
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
		<div>
			<Doughnut options={options} data={data} />
			<BudgetResultTotals />
		</div>
	);
};

export default BudgetResultChart;
