const BudgetResultResetButton = () => {
	return (
		<div className='flex w-full justify-end p-4'>
			<button
				type='button'
				className='inline-flex items-center rounded-lg bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white'>
				Reset all data
			</button>
		</div>
	);
};

export default BudgetResultResetButton;
