import React from "react";
import IncomeAmountInput from "../plan/income/IncomeAmountInput";
import IncomeCategorySelect from "../plan/income/IncomeCategorySelect";
import DatePick from "./DatePicker";
import ToggleSelect from "./ToggleSelect";

const Form = () => {
  return (
    <form>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <IncomeCategorySelect />
        <IncomeAmountInput />
        <DatePick />
        <ToggleSelect
          label="Does this payment repeat?"
          defaultOption={"Single"}
          secondaryOption={"Reoccurring"}
        />
        <DatePick />
        <ToggleSelect
          label="Is the amount taxed?"
          defaultOption={"Post-tax"}
          secondaryOption={"Pre-tax"}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
