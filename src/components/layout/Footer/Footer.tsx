import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './/FooterTop';
import Container from "~/components/layout/Containers";

const Footer: React.FC = () => {
	return (
		<Container bgColour={'bg-[#1F2023]'}>
			<footer className='flex flex-col items-center justify-center py-6'>
				<FooterTop />
				<FooterBottom />
			</footer>
		</Container>
	);
};

export default Footer;
