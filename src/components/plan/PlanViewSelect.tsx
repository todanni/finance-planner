import { Icon, IconObject } from '@todanni/ui';

const PlanViewSelect = () => {
	return (
		<div className='mt-4 rounded-xl bg-white/5 p-2 shadow-xl'>
			<div className='text-md grid grid-cols-5 font-medium'></div>
		</div>
	);
};

type PlanSelectProps = {
	selected: boolean;
	icon: IconObject;
};

const OverviewSelect = ({ selected, icon }: PlanSelectProps) => {
	return (
		<>
			<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
				{selected && <Icon object={icon} size='xs' colour='white' />}
				{!selected && <Icon object={icon} size='xs' colour='white' />}
				<p className='rounded-xl font-bold text-white'>Overview</p>
			</div>
		</>
	);
};

const IncomeSelect = () => {
	return (
		<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
			<Icon object='money' size='xs' colour='white' />
			<p className='rounded-xl font-bold text-white'>Overview</p>
		</div>
	);
};

const SpendSelect = () => {
	return (
		<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
			<Icon object='money' size='xs' colour='white' />
			<p className='rounded-xl font-bold text-white'>Overview</p>
		</div>
	);
};

const DebtSelect = () => {
	return (
		<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
			<Icon object='money' size='xs' colour='white' />
			<p className='rounded-xl font-bold text-white'>Overview</p>
		</div>
	);
};

const SaveSelect = () => {
	return (
		<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
			<Icon object='money' size='xs' colour='white' />
			<p className='rounded-xl font-bold text-white'>Overview</p>
		</div>
	);
};

export { PlanViewSelect };
