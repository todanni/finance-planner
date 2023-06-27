import { type IconObject, TabSelectBar, DateNavbar } from '@todanni/ui';
import { type NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { PlanGettingStarted } from '~/components/plan/PlanGettingStarted';
import { PlanOverviewPanel } from '~/components/plan/PlanOverviewPanel';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { api } from '~/utils/api';

type Tab = {
	title: string;
	icon: IconObject;
	fill: 'default' | 'green' | 'yellow' | 'red' | 'blue';
};

const tabs: Tab[] = [
	{ title: 'Overview', icon: 'plan', fill: 'default' },
	{ title: 'Income', icon: 'money', fill: 'green' },
	{ title: 'Spending', icon: 'wallet', fill: 'blue' },
	{ title: 'Savings', icon: 'piggy', fill: 'yellow' },
	{ title: 'Debt', icon: 'percentReceipt', fill: 'red' },
];

const Plan: NextPage = () => {
	const [selectedTab, setSelectedTab] = useState('Overview');
	const { data: sessionData } = useSession();
	const { data: userData } = api.tx.count.useQuery();

	return (
		<DefaultLayout currentLocation='plan'>
			<div className='my-4 flex flex-col gap-4'>
				<TabSelectBar
					onClick={(s) => setSelectedTab(s)}
					selected={selectedTab}
					tabs={tabs}
				/>
				<DateNavbar
					title={'Your plan'}
					subtitle={'May 2023'}
					previous={'April 2023'}
					next={'June 2023'}
					onClick={(a) => console.log(a)}
				/>
				{!sessionData && <PlanGettingStarted signedIn={false} />}
				{!userData && sessionData && (
					<PlanGettingStarted
						signedIn={true}
						onClick={() => setSelectedTab('Income')}
					/>
				)}
				{userData && sessionData && getPlanPanel(selectedTab)}
			</div>
		</DefaultLayout>
	);
};

const getPlanPanel = (tab: string) => {
	switch (tab) {
		default:
			return <PlanOverviewPanel />;
	}
};

export default Plan;
