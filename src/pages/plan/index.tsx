import { Heading, Icon, Title } from '@todanni/ui';
import { type NextPage } from 'next';
import { useState } from 'react';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { DateTime } from 'luxon';
import { OverviewPanel } from './OverviewPanel';

// const panels = ['Overview', 'Income', 'Spending', 'Debt', 'Savings'] as const;

const Plan: NextPage = () => {
	const [currentPanel, setCurrentPanel] = useState('Overview');

	const [range, setRange] = useState(DateTime.now());

	const onDateChange = (op: 'prev' | 'next') => {
		if (op === 'prev') {
			setRange(range.minus({ month: 1 }));
		} else {
			setRange(range.plus({ month: 1 }));
		}
	};

	return (
		<DefaultLayout>
			<div className='mt-4 rounded-xl shadow-inner'>
				<Title>Your plan</Title>
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
				<OverviewPanel dateRange={range} />
			</div>
		</DefaultLayout>
	);
};

export default Plan;
