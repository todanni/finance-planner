import React from 'react';
import { useSession } from 'next-auth/react';
import Income from './income';
import PlanSteps from './PlanSteps';

const PlanSection: React.FC = () => {
	const { data: sessionData } = useSession();

	return (
		<section
			id='plan'
			className='mt-5 flex flex-col items-center justify-center'>
			{sessionData && (
				<div>
					<PlanSteps></PlanSteps>
					<Income userId={sessionData.user.id} />
				</div>
			)}
		</section>
	);
};

export default PlanSection;
