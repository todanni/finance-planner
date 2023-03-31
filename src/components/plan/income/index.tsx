import React from "react";
import { api } from "~/utils/api";
import Form from "~/components/forms/IncomeForm";
import IncomePayments from "./IncomePayments";
import { styles } from "~/components/layout/styles";

type Props = {
  userId?: string;
};

const Income = ({}: Props) => {
  // Query the user's income payments
  const { data: payments } = api.payment.getAll.useQuery();

  return (
    <div className="flex flex-col md:flex-row">
      <div className={styles.sectionInfo}>
        <IncomePayments />
      </div>
      <div className={styles.sectionInfo}>
        <Form />
      </div>
    </div>
  );
};

export default Income;
