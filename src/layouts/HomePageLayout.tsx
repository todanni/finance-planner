import { Footer, Navbar } from '@todanni/ui';
import { type ReactNode } from 'react';
import { navlinks } from './navlinks';

type Props = {
	children: ReactNode;
	title?: string;
};

const HomePageLayout = ({ children }: Props) => (
	<div className='h-screen w-full'>
		<div className='flex h-full flex-col items-center justify-between'>
			<div className='m-4 w-11/12 max-w-screen-2xl'>
				<Navbar
					links={navlinks}
					currentLocation='home'
					variant='logo'
					colour='dark'
				/>
				<main>{children}</main>
			</div>
			<div className='flex w-full justify-center py-4'>
				<div className='m-4 w-11/12 max-w-screen-2xl'>
					<Footer />
				</div>
			</div>
		</div>
	</div>
);

export { HomePageLayout };
