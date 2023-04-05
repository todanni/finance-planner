import React from 'react';
import Form from '~/components/plan/income/IncomeForm';
import { styles } from '~/components/layout/styles';
import IncomeChart from '~/components/charts/IncomeChart';

type Props = {
	userId?: string;
};

const Income = ({}: Props) => {
	// Query the user's income payments
	return (
		<div className={styles.section}>
			<div className={styles.sectionInfo}>
				<Form />
			</div>
			<div className={styles.sectionInfo}>
				<IncomeChart />
			</div>
		</div>
	);
};

export default Income;
