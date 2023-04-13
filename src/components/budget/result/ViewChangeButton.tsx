import { type SVGAttributes } from 'react';

type ButtonProps = {
	changeView: () => void;
};

const ViewChangeButtons = (props: ButtonProps) => {
	return (
		<div className='m-4 flex w-11/12 items-center justify-around rounded-lg border border-td-gry-4 p-3 text-white'>
			<ArrowLongLeftIcon
				className='h-6 hover:text-td-grn-4'
				onClick={props.changeView}
			/>
			<label className='text-md'>Table</label>
			<ArrowLongRightIcon
				className='h-6 hover:text-td-grn-4'
				onClick={props.changeView}
			/>
		</div>
	);
};

const ArrowLongLeftIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z'
			/>
		</svg>
	);
};

const ArrowLongRightIcon = (props: SVGAttributes<SVGElement>) => {
	return (
		<svg
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}>
			<path
				clipRule='evenodd'
				fillRule='evenodd'
				d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
			/>
		</svg>
	);
};

export default ViewChangeButtons;
