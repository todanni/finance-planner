import { type NextPage } from "next";
import Layout from "~/components/layout";
import PlanSection from "~/components/plan";
import IncomeTable from "~/components/plan/income/IncomeTable";

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="Plan | ToDanni Finance Planner">
        <div className={`flex justify-between`}>
          <div className="w-full  xl:max-w-[1280px]">
            <PlanSection />
            {/* <IncomeTable someProp=""></IncomeTable> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Plan;
