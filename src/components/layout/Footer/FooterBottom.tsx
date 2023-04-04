import React from 'react';
import { socialMedia } from '~/constants';
import Image from 'next/image';

const FooterBottom: React.FC = () => {
	return (
		<div className='flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row'>
			<p className='text-center text-[18px] font-normal leading-[27px] text-white'>
				Copyright Ⓒ 2023 ToDanni. All Rights Reserved.
			</p>
			<div className='mt-6 flex flex-row md:mt-0'>
				{socialMedia.map((social, index) => (
					<Image
						key={social.id}
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						src={social.icon}
						alt={social.id}
						className={`h-[21px] w-[21px] cursor-pointer object-contain text-white ${
							index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
						}`}
						onClick={() => window.open(social.link)}
					/>
				))}
			</div>
		</div>
	);
};

export default FooterBottom;
