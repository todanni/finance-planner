/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Heading, Icon, ResponsiveGrid } from '@todanni/ui';
import { PaymentsCard } from '../cards/PaymentsCard';
import { GoalsCard } from '../cards/GoalsCard';
import { planContents } from '~/pages/plan/plan';
import { TaxCard } from '../cards/TaxCard';
import { InsightsCard } from '../cards/InsightsCard';

const IncomePanel = () => {
	return (
		<div className='my-4'>
			<ResponsiveGrid>
				<PaymentsCard
					title={'Income summary'}
					totalLabel={'Total'}
					totalAmount={1234.56}>
					<IncomePayments />
				</PaymentsCard>
				<TaxCard hasButton={true} payments={[]} />
				<GoalsCard {...planContents.panels[1]?.goalsCard!} />
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

const IncomePayments = () => {
	return (
		<>
			<div className='flex gap-3'>
				<Icon object='money' size='xs' colour='green' />
				<Heading size='sm'>Net income</Heading>
				<Heading size='sm' className='ml-auto'>
					£123.45
				</Heading>
			</div>
			<div className='flex gap-3'>
				<Icon object='plus' size='xs' colour='blue' />
				<Heading size='sm'>Taxable Benefits</Heading>
				<Heading size='sm' className='ml-auto'>
					£123.45
				</Heading>
			</div>
			<div className='flex gap-3'>
				<Icon object='tax' size='xs' colour='red' />
				<Heading size='sm'>Deductions</Heading>
				<Heading size='sm' className='ml-auto'>
					£123.45
				</Heading>
			</div>
		</>
	);
};

export default IncomePanel;
