import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { styles } from "~/components/layout/styles";

const SigningButton: React.FC = () => {
	const { data: sessionData } = useSession();

	return (
		<>
			<button
				className={`${styles.btnGrd} ${styles.btnText} ${styles.btnStyle}`}
				onClick={sessionData ? () => void signOut() : () => void signIn()}>
				{sessionData ? 'View report' : 'Get started'}
			</button>
		</>
	);
};

export default SigningButton;
