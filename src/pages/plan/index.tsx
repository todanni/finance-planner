import { Heading, Icon, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { useState } from 'react';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { DateTime } from 'luxon';
import { OverviewPanel } from './OverviewPanel';
import { IncomePanel } from './IncomePanel';
import { SpendingPanel } from './SpendingPanel';
import { DebtPanel } from './DebtPanel';
import { SavingsPanel } from './SavingsPanel';

const Plan: NextPage = () => {
	const panels = ['Overview', 'Income', 'Spending', 'Debt', 'Savings'] as const;
	const [currentPanel, setCurrentPanel] = useState('Overview');

	const [range, setRange] = useState(DateTime.now());

	const onDateChange = (op: 'prev' | 'next') => {
		if (op === 'prev') {
			setRange(range.minus({ month: 1 }));
		} else {
			setRange(range.plus({ month: 1 }));
		}
	};

	const handlePanelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentPanel(event.target.value);
	};

	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl shadow-inner'>
				<div className='flex justify-between pb-2'>
					<Title>Your plan</Title>
					<select
						className='rounded-lg bg-green-600 px-2 py-1 font-semibold text-white'
						onChange={(e) => handlePanelSelect(e)}>
						{panels.map((panel) => (
							<option key={panel} value={panel}>
								{panel}
							</option>
						))}
					</select>
				</div>

				<div className='flex justify-between border-b pb-2'>
					<Heading size='large'>
						Details of your payments, balances and goals
					</Heading>
					<div className='flex gap-2'>
						<Icon
							object='arrowLeft'
							colour='white'
							size='xs'
							onClick={() => onDateChange('prev')}
						/>
						<Heading size='small'>{range.toFormat('LLLL yyyy')}</Heading>
						<Icon
							object='arrowRight'
							colour='white'
							size='xs'
							onClick={() => onDateChange('next')}
						/>
					</div>
				</div>
				{currentPanel === 'Overview' && <OverviewPanel dateRange={range} />}
				{currentPanel === 'Income' && <IncomePanel dateRange={range} />}
				{currentPanel === 'Spending' && <SpendingPanel dateRange={range} />}
				{currentPanel === 'Debt' && <DebtPanel dateRange={range} />}
				{currentPanel === 'Savings' && <SavingsPanel dateRange={range} />}
			</div>
		</DefaultLayout>
	);
};

export default Plan;
