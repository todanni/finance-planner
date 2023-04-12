type RowProps = {
	category: string;
	subCategory: string;
	name: string;
	amount: number;
};

const BudgetResultRow = ({ subCategory, name, amount }: RowProps) => {
	return (
		<tr>
			<td className='px-2 py-2 text-left'>{subCategory}</td>
			<td className='px-2 py-2 text-left'>{name}</td>
			<td className='px-2 py-2 text-right'>{`£${amount}`}</td>
		</tr>
	);
};

export default BudgetResultRow;
