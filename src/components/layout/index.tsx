import React, { type ReactNode } from 'react';
import Footer from '~/components/layout/Footer/Footer';
import Navbar from '~/components/layout/Navbar/Navbar';
import WaveDivider from '~/components/layout/Dividers/WaveDivider';
import { styles } from '~/components/layout/styles';
import Head from './Head';

type Props = {
	children: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'ToDanni Finance Planner' }: Props) => (
	<div className={`w-full ${styles.bodyBg}`}>
		<Head title={title} />
		<Navbar />
		<main>{children}</main>
		<WaveDivider fillColour='#1F2023' />
		<Footer />
	</div>
);

export default Layout;
