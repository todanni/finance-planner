import React, { type ReactNode } from 'react';
import Navbar from '~/components/layout/Navbar/Navbar';
import { styles } from '~/components/layout/styles';
import Head from './Head';
import SimpleFooter from './Footer/SimpleFooter';

type Props = {
	children: ReactNode;
	title?: string;
};

const FrontPageLayout = ({
	children,
	title = 'Plan | Finance Planner',
}: Props) => (
	<div className={`w-full bg-[#36393f]`}>
		<Head title={title} />
		<Navbar />
		<main>{children}</main>
		<SimpleFooter />
	</div>
);

export default FrontPageLayout;
