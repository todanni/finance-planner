import { Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';

type PanelProps = {
	dateRange: DateTime;
};

const SpendingPanel = ({ dateRange }: PanelProps) => {
	return (
		<div className='mt-2'>
			<Heading size='large'>Spending</Heading>
		</div>
	);
};

export { SpendingPanel };
