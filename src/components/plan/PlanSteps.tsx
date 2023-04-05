type Props = {
	someProp?: string;
};

const steps = [
	'Estimate Income',
	'Calculate Spending',
	'Track Savings',
	'Optimise Debt',
];

const PlanSteps = ({}: Props) => {
	return (
		<nav
			className='flex justify-center rounded-lg border border-td-gry-3 px-5 py-3 text-white'
			aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				{steps?.map((step, index) => (
					<li key={index} className='inline-flex items-center'>
						<div className='flex items-center'>
							{index !== 0 ? (
								<svg
									aria-hidden='true'
									className='h-6 w-6 text-td-grn-4'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							) : (
								<></>
							)}

							<a
								href='#'
								className={`ml-1 text-sm font-medium ${
									index !== 0 ? 'text-white' : 'text-td-grn-3'
								} hover:text-td-grn-3 md:ml-2`}>
								{step}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};

export default PlanSteps;
