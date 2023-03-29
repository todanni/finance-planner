import React from 'react';
import { logo } from '~/assets';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '~/constants';
import { styles } from "~/components/layout/styles";
import Container from "~/components/layout/Containers";

const Navbar: React.FC = () => {
	return (
		<Container>
			<nav
				className={`navbar ${styles.flexCent} ${styles.contW} ${styles.btmBorder} justify-between py-6`}>
				<Image
					src={logo}
					alt='todanni'
					className='w-[50%] object-scale-down sm:w-[15%]'
				/>
				<ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
					{navLinks.map((nav) => (
						<Link
							href={`/${nav.id}`}
							key={nav.id}
							className='mr-8 cursor-pointer text-lg text-white'>
							{nav.title}
						</Link>
					))}
				</ul>
			</nav>
		</Container>
	);
};

export default Navbar;
