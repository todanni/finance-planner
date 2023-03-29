import { type NextPage } from "next";
import Layout from "~/components/layout";
import Hero from "~/components/home/Hero";
import Container from "~/components/layout/Containers";

const Home: NextPage = () => {
  return (
    <>
      <Layout title='Finance Planner | ToDanni'>
        <Container>
          <Hero/>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

