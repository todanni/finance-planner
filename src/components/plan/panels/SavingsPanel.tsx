/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResponsiveGrid } from '@todanni/ui';
import { PaymentsCard } from '../cards/PaymentsCard';
import { BalancesCard } from '../cards/BalancesCard';
import { planContents } from '~/pages/plan/plan';
import { GoalsCard } from '../cards/GoalsCard';
import { InsightsCard } from '../cards/InsightsCard';

const SavingsPanel = () => {
	return (
		<div className='my-4'>
			<ResponsiveGrid>
				<PaymentsCard
					title={'Savings contributions'}
					totalLabel={'Total'}
					totalAmount={1234.56}
				/>
				<BalancesCard {...planContents.panels[4]?.balanceCard!} />
				<GoalsCard {...planContents.panels[4]?.goalsCard!} />
				<InsightsCard
					insights={[
						'Your disposable income is very low',
						'Your pension contibutions might not be enough',
					]}
				/>
			</ResponsiveGrid>
		</div>
	);
};

export default SavingsPanel;
