import { Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';

type PanelProps = {
	dateRange: DateTime;
};

const DebtPanel = ({ dateRange }: PanelProps) => {
	return (
		<div className='mt-2'>
			<Heading size='large'>Debt</Heading>
		</div>
	);
};

export { DebtPanel };
