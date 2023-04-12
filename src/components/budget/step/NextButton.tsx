import { useSession } from 'next-auth/react';

type NextButtonProps = {
	buttonText?: string;
};

const NextStepButton = ({ buttonText }: NextButtonProps) => {
	const { data: sessionData } = useSession();

	return (
		<button
			type='button'
			className='inline-flex items-center rounded-lg bg-td-grn-4 px-5 py-2.5 text-center text-sm font-medium text-white'>
			{sessionData ? buttonText : 'Log in to get started'}
			<svg
				aria-hidden='true'
				className='-mr-1 ml-2 h-5 w-5'
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
					clipRule='evenodd'
				/>
			</svg>
		</button>
	);
};

export default NextStepButton;
