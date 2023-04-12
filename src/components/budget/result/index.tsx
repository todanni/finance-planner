import React from 'react';
import ViewChangeButtons from './ViewChangeButton';
import Table from './table/Table';
import BudgetResultChart from './chart/Chart';
import BudgetResultResetButton from './ResetButton';

const BudgetResult = () => {
	const [showTable, setShowTable] = React.useState(false);

	const handleClick = () => {
		setShowTable(!showTable);
	};

	return (
		<div className='flex h-full flex-col items-center justify-between text-sm text-white'>
			<ViewChangeButtons changeView={handleClick} />
			{showTable && <Table />}
			{!showTable && <BudgetResultChart />}
			<BudgetResultResetButton />
		</div>
	);
};

export default BudgetResult;
