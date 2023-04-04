type Props = {
	someProp: string;
};

const IncomeTable = ({}: Props) => {
	return (
		<div className='relative m-10 overflow-x-auto bg-white shadow-md sm:rounded-lg'>
			<div className='flex items-center justify-between p-2'>
				<div>
					<button
						id='dropdownRadioButton'
						data-dropdown-toggle='dropdownRadio'
						className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium '
						type='button'>
						<svg
							className='mr-2 h-4 w-4 text-gray-400'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
								clipRule='evenodd'
							/>
						</svg>
						Last 30 days
						<svg
							className='ml-2 h-3 w-3'
							aria-hidden='true'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 9l-7 7-7-7'
							/>
						</svg>
					</button>
					{/* Dropdown menu */}
					<div
						id='dropdownRadio'
						className='z-10 hidden w-48 divide-y divide-gray-100 rounded-lg bg-white shadow  '
						data-popper-reference-hidden
						data-popper-escaped
						data-popper-placement='top'
						style={{
							position: 'absolute',
							inset: 'auto auto 0px 0px',
							margin: '0px',
							transform: 'translate3d(522.5px, 3847.5px, 0px)',
						}}>
						<ul
							className='space-y-1 p-3 text-sm text-gray-700 '
							aria-labelledby='dropdownRadioButton'>
							<li>
								<div className='flex items-center rounded p-2 '>
									<input
										id='filter-radio-example-1'
										type='radio'
										name='filter-radio'
										className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
									/>
									<label
										htmlFor='filter-radio-example-1'
										className='ml-2 w-full rounded text-sm font-medium text-gray-900 '>
										Last day
									</label>
								</div>
							</li>
							<li>
								<div className='flex items-center rounded p-2 '>
									<input
										defaultChecked
										id='filter-radio-example-2'
										type='radio'
										name='filter-radio'
										className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
									/>
									<label
										htmlFor='filter-radio-example-2'
										className='ml-2 w-full rounded text-sm font-medium text-gray-900 '>
										Last 7 days
									</label>
								</div>
							</li>
							<li>
								<div className='flex items-center rounded p-2 '>
									<input
										id='filter-radio-example-3'
										type='radio'
										name='filter-radio'
										className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
									/>
									<label
										htmlFor='filter-radio-example-3'
										className='ml-2 w-full rounded text-sm font-medium text-gray-900 '>
										Last 30 days
									</label>
								</div>
							</li>
							<li>
								<div className='flex items-center rounded p-2 '>
									<input
										id='filter-radio-example-4'
										type='radio'
										name='filter-radio'
										className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
									/>
									<label
										htmlFor='filter-radio-example-4'
										className='ml-2 w-full rounded text-sm font-medium text-gray-900 '>
										Last month
									</label>
								</div>
							</li>
							<li>
								<div className='flex items-center rounded p-2 '>
									<input
										id='filter-radio-example-5'
										type='radio'
										name='filter-radio'
										className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
									/>
									<label
										htmlFor='filter-radio-example-5'
										className='ml-2 w-full rounded text-sm font-medium text-gray-900 '>
										Last year
									</label>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<label htmlFor='table-search' className='sr-only'>
					Search
				</label>
				<div className='relative'>
					<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
						<svg
							className='h-5 w-5  '
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<input
						type='text'
						id='table-search'
						className='block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
						placeholder='Search for items'
					/>
				</div>
			</div>
			<table className='w-full text-left text-sm  '>
				<thead className='bg-gray-50 text-xs uppercase text-gray-700  '>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-all-search'
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
								/>
								<label htmlFor='checkbox-all-search' className='sr-only'>
									checkbox
								</label>
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Product name
						</th>
						<th scope='col' className='px-6 py-3'>
							Color
						</th>
						<th scope='col' className='px-6 py-3'>
							Category
						</th>
						<th scope='col' className='px-6 py-3'>
							Price
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b bg-white hover:bg-gray-50 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
								/>
								<label htmlFor='checkbox-table-search-1' className='sr-only'>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 '>
							Apple MacBook Pro 17
						</th>
						<td className='px-6 py-4'>Silver</td>
						<td className='px-6 py-4'>Laptop</td>
						<td className='px-6 py-4'>$2999</td>
						<td className='px-6 py-4'>
							<a
								href='#'
								className='font-medium text-blue-600 hover:underline '>
								Edit
							</a>
						</td>
					</tr>
					<tr className='border-b bg-white hover:bg-gray-50 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-2'
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
								/>
								<label htmlFor='checkbox-table-search-2' className='sr-only'>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 '>
							Microsoft Surface Pro
						</th>
						<td className='px-6 py-4'>White</td>
						<td className='px-6 py-4'>Laptop PC</td>
						<td className='px-6 py-4'>$1999</td>
						<td className='px-6 py-4'>
							<a
								href='#'
								className='font-medium text-blue-600 hover:underline '>
								Edit
							</a>
						</td>
					</tr>
					<tr className='border-b bg-white hover:bg-gray-50 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-3'
									type='checkbox'
									className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
								/>
								<label htmlFor='checkbox-table-search-3' className='sr-only'>
									checkbox
								</label>
							</div>
						</td>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 '>
							Magic Mouse 2
						</th>
						<td className='px-6 py-4'>Black</td>
						<td className='px-6 py-4'>Accessories</td>
						<td className='px-6 py-4'>$99</td>
						<td className='px-6 py-4'>
							<a
								href='#'
								className='font-medium text-blue-600 hover:underline '>
								Edit
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default IncomeTable;
