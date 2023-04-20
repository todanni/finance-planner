import { type NextPage } from 'next';
import Layout from '~/components/layout';
import Container from '~/components/layout/Containers';
import { Button } from '@todanni/components';

const About: NextPage = () => {
	return (
		<>
			<Layout title='About | ToDanni Finance Planner'>
				<Container>
					<h1>About</h1>
					<Button>Button text</Button>
				</Container>
			</Layout>
		</>
	);
};

export default About;
