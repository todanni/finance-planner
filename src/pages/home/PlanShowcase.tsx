import { Icon } from '@todanni/ui';

const sections: Section[] = [
	{
		title: 'Your total savings',
		icon: <Icon object='money' />,
		total: '£1,081.49',
		sources: [
			{ name: 'Cash ISA', amount: '£613.59' },
			{ name: 'Stocks ISA', amount: '£467.90' },
		],
	},
	{
		title: 'Your goals',
		icon: <Icon object='goal' />,
		sources: [
			{
				name: 'Cash ISA',
				amount: '£5,000.00',
				deadline: '6 months left',
				onTrack: true,
			},
		],
	},
];

type Section = {
	title: string;
	icon: React.ReactNode;
	total?: string;
	sources?: Source[];
};

type Source = {
	name: string;
	amount: string;
	deadline?: string;
	onTrack?: boolean;
};

const PlanShowcase = () => {
	return (
		<div className='mx-2 flex flex-col justify-between rounded-xl border-2 border-green-300/60 bg-[#2B8F5A]/50 p-4'>
			{sections?.map((section) => (
				<div key={section.title} className='flex flex-col'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							{section.icon}
							<h2 className='text-xl text-white'>{section.title}</h2>
						</div>
						<p className='text-xl text-white'>{section.total}</p>
					</div>
					{section.sources?.map((source) => (
						<>
							<div key={source.name} className='flex justify-between'>
								<p className=' text-white/60'>{source.name}</p>
								<p className=' text-white/60'>{source.amount}</p>
							</div>
							{source.deadline && (
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-1'>
										<Icon object='trendinUp' />
										<p className='text-white/60'>You are on track!</p>
									</div>
									<p className='text-white/60'>6 months left</p>
								</div>
							)}
						</>
					))}
				</div>
			))}
		</div>
	);
};

export default PlanShowcase;
