import { type NextPage } from "next";
import Layout from "~/components/layout";
import Container from "~/components/layout/Containers";
import PlanSection from "~/components/plan";

const Plan: NextPage = () => {
  return (
    <>
      <Layout title='Plan | ToDanni Finance Planner'>
        <Container>
          <PlanSection/>
        </Container>
      </Layout>
    </>
  );
};

export default Plan;

