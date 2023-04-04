import { type NextPage } from 'next';
import Layout from '~/components/layout';
import Container from '~/components/layout/Containers';

const Budget: NextPage = () => {
	return (
		<>
			<Layout title='Budget | ToDanni Finance Planner'>
				<Container>
					<h1>Budget</h1>
				</Container>
			</Layout>
		</>
	);
};

export default Budget;
