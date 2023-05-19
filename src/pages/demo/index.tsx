import { Icon, IconObject } from '@todanni/ui';
import { type NextPage } from 'next';
import { title } from 'process';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Demo: NextPage = () => {
	return (
		<DefaultLayout>
			<Header />
			<Contents />
		</DefaultLayout>
	);
};

const Header = () => {
	return (
		<div className='mt-8 flex items-center justify-between rounded-xl bg-white/5 p-2 shadow-xl'>
			<div className='flex items-center gap-2 p-2'>
				<Icon object='arrowLeft' colour='white' size='small' />
				<h3 className='text-sm text-white'>March 2023</h3>
			</div>
			<div className='flex flex-col items-center gap-1'>
				<h1 className='text-3xl font-bold text-white'>Your plan</h1>
				<h3 className='text-md font-extralight text-green-600'>
					Current month
				</h3>
			</div>
			<div className='flex items-center gap-2 p-2'>
				<h3 className='text-sm text-white'>May 2023</h3>
				<Icon object='arrowRight' colour='white' size='small' />
			</div>
		</div>
	);
};

const panels = [
	{
		title: 'Overview',
		icon: 'presentChart',
		colour: 'white',
	},
	{
		title: 'Income',
		icon: 'money',
		colour: 'income',
	},
	{
		title: 'Spending',
		icon: 'wallet',
		colour: 'spending',
	},
	{
		title: 'Debt',
		icon: 'bank',
		colour: 'debt',
	},
	{
		title: 'Savings',
		icon: 'piggy',
		colour: 'savings',
	},
];

const Contents = () => {
	return (
		<div className='mt-4 rounded-xl bg-white/5 p-2 shadow-xl'>
			<div className='text-md grid grid-cols-5 font-medium text-gray-400'>
				{/* {panels.map((panel) => (
					<PanelNav
						key={panel.title}
						title={panel.title}
						selected={panel.title === 'Income'}
						icon={panel.icon as IconObject}
						colour={panel.colour}
					/>
				))} */}
			</div>
			<div className='grid grid-cols-2 grid-rows-2'></div>
		</div>
	);
};

// type PanelNavProps = {
// 	title: string;
// 	selected: boolean;
// 	icon: IconObject;
// 	colour: string;
// };

// const PanelNav = ({ title, selected, icon, colour }: PanelNavProps) => {
// 	if (selected) {
// 		return (
// 			<div className='flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-2'>
// 				<Icon object={icon} size='xs' colour='white' />
// 				<p className='rounded-xl font-bold text-white'>{title}</p>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className='flex items-center justify-center gap-2 py-2'>
// 			<Icon object={icon} size='xs' colour={colour} />
// 			<p className='rounded-xl font-bold text-white'>{title}</p>
// 		</div>
// 	);
// };

export default Demo;
