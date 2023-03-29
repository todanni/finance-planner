import React from 'react';
import Features from '~/components/home/Hero/Features';
import Title from '~/components/home/Hero/Title';
import { styles } from "~/components/layout/styles";

const Hero: React.FC = () => {
	return (
		<section id='features' className={`${styles.section}`}>
			<Title />
			<Features />
		</section>
	);
};

export default Hero;
