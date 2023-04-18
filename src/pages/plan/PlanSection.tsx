import { type SubCategory, type Payment, Prisma } from '@prisma/client';
import { Icon, PlanCard } from '@todanni/ui';

type IncomeSectionProps = {
	payments:
		| (Payment & {
				subCategory: SubCategory;
		  })[]
		| undefined;
};

const IncomeSection = ({ payments }: IncomeSectionProps) => {
	const calculateTotal = () => {
		return payments?.reduce(
			(acc, payment) => acc + new Prisma.Decimal(payment.amount).toNumber(),
			0,
		);
	};

	return (
		<PlanCard section='income'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center'>
					<Icon object='money' colour='white' />
					<h2 className='text-lg text-white'>Monthly income</h2>
				</div>
				<p className='text-lg text-white'>
					£{calculateTotal()?.toLocaleString('en-UK')}
				</p>
			</div>
			<div>
				{payments?.map((payment) => (
					<div key={payment.id} className='flex justify-between'>
						<p className='text-white/80'>{payment.subCategory.name}</p>
						<p className='text-white/80'>£{payment.amount.toString()}</p>
					</div>
				))}
			</div>
		</PlanCard>
	);
};

export default IncomeSection;
