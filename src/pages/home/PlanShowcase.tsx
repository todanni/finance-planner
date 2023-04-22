import { PlanCard } from '@todanni/ui';

const PlanShowcase = () => {
	return (
		<PlanCard
			section='savings'
			contents={{
				title: 'Monthly savings contributions',
				totalPayments: 817.85,
				sources: [
					{
						name: 'Help to buy ISA',
						amount: 600.37,
					},
					{
						name: 'Pension',
						amount: 217.48,
					},
				],
				totalBalance: 21081.49,
				totalBalanceText: 'Total savings balance',
				goals: [
					{
						name: 'Help to buy ISA',
						amount: 4000.01,
						timeLeft: '6 months left',
						onTrack: true,
					},
				],
			}}
		/>
	);
};

export default PlanShowcase;
