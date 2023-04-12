import React from 'react';
import ViewChangeButtons from './ViewChangeButton';
import Table from './Table';
import BudgetResultChart from './Chart';
import BudgetResultTotals from './Totals';
import BudgetResultResetButton from './ResetButton';

const BudgetResult = () => {
	const [showTable, setShowTable] = React.useState(true);

	const handleClick = () => {
		setShowTable(!showTable);
	};

	return (
		<div className='flex flex-col items-center text-sm text-white'>
			<ViewChangeButtons changeView={handleClick} />
			{showTable && <Table />}
			{!showTable && <BudgetResultChart />}
			<BudgetResultTotals />
			<BudgetResultResetButton />
		</div>
	);
};

export default BudgetResult;
