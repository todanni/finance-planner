import React from "react";
import { api } from "~/utils/api";
import Form from "~/components/plan/income/IncomeForm";
import IncomePayments from "./IncomePayments";
import { styles } from "~/components/layout/styles";

type Props = {
  userId?: string;
};

const Income = ({}: Props) => {
  // Query the user's income payments
  return (
    <div className={styles.section}>
      <div className={styles.sectionInfo}>
        <Form />
      </div>
      <div className={styles.sectionInfo}>
        <IncomePayments />
      </div>
    </div>
  );
};

export default Income;
