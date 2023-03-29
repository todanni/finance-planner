import { type NextPage } from "next";
import Layout from "~/components/layout";
import Hero from "~/components/home/Hero";
import Container from "~/components/layout/Containers";

const Blog: NextPage = () => {
  return (
    <>
      <Layout title='Blog | ToDanni Finance Planner'>
        <Container>
          <h1> Blog </h1>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

