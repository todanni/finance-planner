import React from "react";
import IncomeCategorySelect from "./IncomeCategorySelect";
import DatePick from "../../forms/DatePicker";
import LabeledInput from "../../forms/LabeledInput";
import ToggleSelect from "../../forms/ToggleSelect";
import RepeatSelect from "./RepeatSelect";

const Form = () => {
  return (
    <form>
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <IncomeCategorySelect />
        <LabeledInput label="Give it a name"></LabeledInput>
        <LabeledInput label="Amount"></LabeledInput>
        <ToggleSelect
          label="Is the amount taxed?"
          defaultOption={"Post-tax"}
          secondaryOption={"Pre-tax"}
        />
        <DatePick label="When did you receive this?" />
        <ToggleSelect
          label="Does this payment repeat?"
          defaultOption={"Single"}
          secondaryOption={"Reoccurring"}
        />
        <RepeatSelect />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-grn-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto "
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

// repeats: boolean
// repeatsIn: Number

// paidOn = new Date(startDate.getTime() + (1000 * 60 * 60 * 24))
// one day ->                              sec * min * hour * day
