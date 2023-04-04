type TableRow = {
	amount: number;
	name: string;
	date: string;
	category: string;
};

type Props = {
	headers: string[];
	rows?: TableRow[];
};

const Table = ({ headers, rows }: Props) => {
	return (
		<table className='w-full text-right text-sm text-gry-300'>
			<thead className='bg-white text-xs  uppercase text-gry-400'>
				<tr>
					{headers?.map((h, i) => (
						<th key={i} scope='col' className='px-4 py-2'>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows?.map((h, i) => (
					<tr key={i} className='border-b bg-white'>
						<th
							scope='row'
							className='whitespace-nowrap px-4 py-3 font-medium text-gry-300 '>
							{h.date}
						</th>
						<td className='px-6 py-4'>{h.category}</td>
						<td className='px-6 py-4'>{h.name}</td>
						<td className='px-6 py-4'>{h.amount}£</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
