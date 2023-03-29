import SigningButton from '~/components/home/Hero/Button';
import React from 'react';
import { styles } from "~/components/layout/styles";

const Title: React.FC = () => {
	return (
		<div className={styles.sectionInfo}>
			<h1 className='text-white w-full text-8xl font-extrabold tracking-tight'>
				<span className={`${styles.titleGrd} bg-clip-text text-transparent`}>
					Finance{' '}
				</span>
				Planner
			</h1>
			<p className={`${styles.paragraph} mt-5 max-w-md`}>
				A completely FREE tool for tracking your personal finances
			</p>
			<SigningButton />
		</div>
	);
};

export default Title;
