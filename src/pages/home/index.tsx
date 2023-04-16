import { type NextPage } from 'next';
import DefaultLayout from '~/layouts/DefaultLayout';

const Home: NextPage = () => {
	return (
		<DefaultLayout title='Finance Planner | ToDanni'>
			<h1>Home</h1>
		</DefaultLayout>
	);
};

export default Home;
