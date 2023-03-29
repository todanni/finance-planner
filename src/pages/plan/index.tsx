import { type NextPage } from "next";
import Layout from "~/components/layout";
import Hero from "~/components/home/Hero";
import Container from "~/components/layout/Containers";

const Plan: NextPage = () => {
  return (
    <>
      <Layout title='Plan | ToDanni Finance Planner'>
        <Container>
          <h1>Plan</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Plan;

