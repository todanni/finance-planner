import React from 'react';
import Image from 'next/image';
import { logo } from '~/assets';
import { footerLinks } from '~/constants';

const FooterTop: React.FC = () => {
	return (
		<div className='mb-6 flex w-full flex-col items-start justify-center md:flex-row'>
			<div className='flex w-full flex-col items-start justify-center md:flex-row'>
				<div className='mr-10 flex flex-[1] flex-col justify-start'>
					<Image
						src={logo}
						alt='todanni'
						className='w-[50%] object-scale-down sm:w-[55%]'
					/>
					<p
						className={`mt-4  max-w-[312px] text-[18px] font-normal leading-[30.8px] text-td-gry-0`}>
						This planner is brought to you by the creators of the ToDanni Tool
						Suite
					</p>
				</div>
				<FooterLinks />
			</div>
		</div>
	);
};

const FooterLinks: React.FC = () => {
	return (
		<div className='mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0'>
			{footerLinks.map((footerlink) => (
				<div
					key={footerlink.title}
					className={`ss:my-0 my-4 flex min-w-[150px] flex-col`}>
					<h4 className='text-white text-[18px] font-medium leading-[27px]'>
						{footerlink.title}
					</h4>
					<ul className='mt-4 list-none'>
						{footerlink.links.map((link, index) => (
							<li
								key={link.name}
								className={`hover:text-secondary cursor-pointer text-[16px] font-normal leading-[24px] text-td-gry-0 ${
									index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'
								}`}>
								{link.name}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default FooterTop;
