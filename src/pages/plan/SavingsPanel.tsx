import { Heading } from '@todanni/ui';
import { type DateTime } from 'luxon';

type PanelProps = {
	dateRange: DateTime;
};

const SavingsPanel = ({ dateRange }: PanelProps) => {
	return (
		<div className='mt-2'>
			<Heading size='large'>Savings</Heading>
		</div>
	);
};

export { SavingsPanel };
