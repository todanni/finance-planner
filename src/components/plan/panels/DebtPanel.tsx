/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResponsiveGrid } from '@todanni/ui';
import { PaymentsCard } from '../cards/PaymentsCard';
import { BalancesCard } from '../cards/BalancesCard';
import { planContents } from '~/pages/plan/plan';
import { GoalsCard } from '../cards/GoalsCard';
import { InsightsCard } from '../cards/InsightsCard';

const DebtPanel = () => {
	return (
		<div className='my-4'>
			<ResponsiveGrid>
				<PaymentsCard
					title={'Debt repayment'}
					totalLabel={'Total'}
					totalAmount={1234.56}
				/>
				<BalancesCard {...planContents.panels[3]?.balanceCard!} />
				<GoalsCard {...planContents.panels[3]?.goalsCard!} />
				<InsightsCard
					insights={[
						'Your have a very high interest loan',
						'You could save 560£ in interesest by making overpayments',
					]}
				/>
			</ResponsiveGrid>
		</div>
	);
};

export default DebtPanel;
