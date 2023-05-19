import { DonutChart, Heading, PaymentsSummary, PlanCard } from '@todanni/ui';
import { type SpendingPaymentTotals } from '~/types/Totals';
import { api } from '~/utils/api';

type PanelProps = {
	startDate: Date;
	endDate: Date;
};

export const Spending = ({ startDate, endDate }: PanelProps) => {
	const { data: payments, isLoading: loading } =
		api.transactions.totalForSpending.useQuery({
			startDate: startDate,
			endDate: endDate,
		});

	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
			<Summary payments={payments} loading={loading} />
			<Breakdown payments={payments} loading={loading} />
			<Goals startDate={startDate} endDate={endDate} />
		</div>
	);
};
type SummaryProps = {
	payments: SpendingPaymentTotals | undefined;
	loading: boolean;
};

const Summary = ({ payments }: SummaryProps) => {
	return (
		<PlanCard icon='spending' title={'Spending payments'}>
			{payments && <PaymentsSummary categories={payments.categories} />}
		</PlanCard>
	);
};

const Breakdown = ({ payments, loading }: SummaryProps) => {
	const getChartInputs = () => {
		const chartInputs: { label: string; amount: number; colour: string }[] = [];

		payments?.categories.map((category) => {
			category.subCategories.map((subCategory, index) => {
				chartInputs.push({
					label: subCategory.title,
					amount: subCategory.total,
					colour: newShade('#2563eb', (index + 1) * 50),
				});
			});
		});

		return chartInputs;
	};

	return (
		<PlanCard icon='chart' title='Payments breakdown'>
			{loading && <Heading>Loading...</Heading>}
			{!loading && payments && (
				<div className='flex'>
					<div className='w-1/2'>
						<DonutChart chartInputs={getChartInputs()} />
					</div>
					<div className='flex w-1/2 flex-col items-end'></div>
				</div>
			)}
		</PlanCard>
	);
};

const Goals = ({}: PanelProps) => {
	return (
		<PlanCard icon='goal' title='Goals'>
			<div className='flex items-center justify-center'>
				<Heading>Coming soon!</Heading>
			</div>
		</PlanCard>
	);
};

const newShade = (hexColor: string, magnitude: number) => {
	hexColor = hexColor.replace(`#`, ``);
	if (hexColor.length === 6) {
		const decimalColor = parseInt(hexColor, 16);
		let r = (decimalColor >> 16) + magnitude;
		r > 255 && (r = 255);
		r < 0 && (r = 0);
		let g = (decimalColor & 0x0000ff) + magnitude;
		g > 255 && (g = 255);
		g < 0 && (g = 0);
		let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
		b > 255 && (b = 255);
		b < 0 && (b = 0);
		return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
	} else {
		return hexColor;
	}
};
