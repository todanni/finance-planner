import { type NextPage } from "next";
import Layout from "~/components/layout";
import Hero from "~/components/home/Hero";
import Container from "~/components/layout/Containers";

const About: NextPage = () => {
  return (
    <>
      <Layout title='About | ToDanni Finance Planner'>
        <Container>
          <h1>About</h1>
        </Container>
      </Layout>
    </>
  );
};

export default About;

