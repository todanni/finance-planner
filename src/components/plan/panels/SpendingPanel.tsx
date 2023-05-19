/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResponsiveGrid } from '@todanni/ui';
import { PaymentsCard } from '../cards/PaymentsCard';
import { GoalsCard } from '../cards/GoalsCard';
import { planContents } from '~/pages/plan/plan';
import { InsightsCard } from '../cards/InsightsCard';
import { BreakdownCard } from '../cards/BreakdownCard';

const SpendingPanel = () => {
	return (
		<div className='my-4'>
			<ResponsiveGrid>
				<BreakdownCard />
				<InsightsCard
					insights={[
						'Your discretionary spending is very high',
						'Some of your bills average higher than expected',
					]}
				/>
				<PaymentsCard
					title={'Living costs'}
					totalLabel={'Total'}
					totalAmount={1234.56}
				/>
				<GoalsCard {...planContents.panels[2]?.goalsCard!} />
				<PaymentsCard
					title={'Bills'}
					totalLabel={'Total'}
					totalAmount={1234.56}
				/>
				<GoalsCard {...planContents.panels[2]?.goalsCard!} />
				<PaymentsCard
					title={'Discretionary'}
					totalLabel={'Total'}
					totalAmount={1234.56}
				/>
				<GoalsCard {...planContents.panels[2]?.goalsCard!} />
			</ResponsiveGrid>
		</div>
	);
};

export default SpendingPanel;
