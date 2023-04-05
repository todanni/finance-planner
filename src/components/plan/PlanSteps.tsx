type Props = {
	someProp?: string;
};

const PlanSteps = ({}: Props) => {
	return (
		<div className='mb-4'>
			<ol className='flex w-full items-center space-x-2 rounded-lg border border-white p-3 text-center text-sm font-medium shadow-sm    sm:space-x-4 sm:p-4 sm:text-base'>
				<li className='flex items-center text-td-grn-4'>
					<span className='mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-td-grn-4 text-xs '>
						1
					</span>
					Income <span className='hidden sm:ml-2 sm:inline-flex'>sources</span>
					<svg
						aria-hidden='true'
						className='ml-2 h-4 w-4 sm:ml-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 5l7 7-7 7M5 5l7 7-7 7'
						/>
					</svg>
				</li>
				<li className='flex items-center text-white'>
					<span className='mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white text-xs text-white '>
						2
					</span>
					Outstanding
					<span className='hidden sm:ml-2 sm:inline-flex'>debt</span>
					<svg
						aria-hidden='true'
						className='ml-2 h-4 w-4 sm:ml-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 5l7 7-7 7M5 5l7 7-7 7'
						/>
					</svg>
				</li>
				<li className='flex items-center text-white'>
					<span className='mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white text-xs text-white '>
						3
					</span>
					Spending
					<span className='hidden sm:ml-2 sm:inline-flex'></span>
					<svg
						aria-hidden='true'
						className='ml-2 h-4 w-4 sm:ml-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 5l7 7-7 7M5 5l7 7-7 7'
						/>
					</svg>
				</li>
				<li className='flex items-center text-white'>
					<span className='mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white text-xs '>
						4
					</span>
					Analysis
				</li>
			</ol>
		</div>
	);
};

export default PlanSteps;
