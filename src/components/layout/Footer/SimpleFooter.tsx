import React from 'react';
import FooterBottom from './FooterBottom';
import Container from '~/components/layout/Containers';
import Image from 'next/image';
import { logo } from '~/assets';

const SimpleFooter: React.FC = () => {
	return (
		<Container bgColour={'bg-[#1F2023]'}>
			<footer className='flex flex-col items-center justify-center py-6'>
				<div className='mb-6 flex w-full flex-col items-start justify-center md:flex-row'>
					<div className='flex w-full flex-col items-start justify-center md:flex-row'>
						<div className='mr-10 flex flex-[1] flex-col justify-start'>
							<Image
								src={logo}
								className='h-8 w-fit object-scale-down'
								alt='ToDanni Logo'
							/>
							<p
								className={`text-md  mt-4 max-w-[312px] font-light leading-[30.8px] text-td-gry-0`}>
								This planner is brought to you by the creators of the ToDanni
								Tool Suite
							</p>
						</div>
					</div>
				</div>
				<FooterBottom />
			</footer>
		</Container>
	);
};

export default SimpleFooter;
