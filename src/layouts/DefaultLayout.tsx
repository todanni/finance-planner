import { Navbar, SimpleFooter } from '@todanni/ui';
import { type ReactNode } from 'react';

type Props = {
	children: ReactNode;
	title?: string;
};

const DefaultLayout = ({ children }: Props) => (
	<div className='h-screen w-full'>
		<div className='flex h-full flex-col items-center justify-between'>
			<div className='m-4 w-11/12 max-w-screen-2xl'>
				<Navbar
					links={[]}
					currentLocation='plan'
					variant='title'
					firstWord='Finance'
					secondWord='Planner'
				/>
				<main>{children}</main>
			</div>
			<div className='flex w-full justify-center bg-[#1f2023] py-4'>
				<div className='m-4 w-11/12 max-w-screen-2xl'>
					<SimpleFooter />
				</div>
			</div>
		</div>
	</div>
);

export { DefaultLayout };
