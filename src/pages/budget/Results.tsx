import { api } from '~/utils/api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { type SVGAttributes } from 'react';
import React from 'react';
import PaymentsTable from '../spending/PaymentsTable';

const Results = () => {
	const { data: categories } = api.category.getAll.useQuery();
	const [showTable, setShowTable] = React.useState(true);

	const handleClick = () => {
		setShowTable(!showTable);
	};

	return (
		<div className='flex flex-col items-center text-sm text-white'>
			<ViewButtons changeView={handleClick} />
			{showTable && <IncomeChart />}
			{!showTable && <PaymentsTable />}
			<div className='flex w-full flex-col items-end gap-2 p-4 text-sm text-white'>
				{categories?.map((category, index) => (
					<div key={index} className='flex w-full justify-between gap-2'>
						<div className='flex gap-2 '>
							<div className='h-4 w-4 border border-white bg-td-grn-2' />
							<h1>{category.name}</h1>
						</div>
						<h1>1234.67£</h1>
					</div>
				))}
			</div>
			<div className='flex w-full justify-end p-4'>
				<button
					type='button'
					className='inline-flex items-center rounded-lg bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white'>
					Reset all data
				</button>
			</div>
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

	return <Doughnut options={options} data={data} />;
};

type ButtonProps = {
	changeView: () => void;
};

const ViewButtons = (props: ButtonProps) => {
	return (
		<div className='m-4 flex w-11/12 items-center justify-around rounded-lg border border-td-gry-4 p-3 text-white'>
			<ArrowLongLeftIcon
				className='h-6 hover:text-td-grn-4'
				onClick={props.changeView}
			/>
			<label className='text-md'>Table</label>
			<ArrowLongRightIcon
				className='h-6 hover:text-td-grn-4'
				onClick={props.changeView}
			/>
		</div>
	);
};

const ArrowLongLeftIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z'
			/>
		</svg>
	);
};

const ArrowLongRightIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
			/>
		</svg>
	);
};

export default Results;
