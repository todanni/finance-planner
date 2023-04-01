import React from "react";
import IncomeCategorySelect from "./IncomeCategorySelect";
import DatePick from "../../forms/DatePicker";
import LabeledInput from "../../forms/LabeledInput";
import ToggleSelect from "../../forms/ToggleSelect";
import RepeatSelect from "./RepeatSelect";
import { type SubmitHandler, FormProvider, useForm } from "react-hook-form";

interface FormValues {
  category: string;
  name: string;
  amount: number;
  isNet: boolean;
  startDate: string;
  repeats: boolean;
  repeatsAfter: number;
}

const IncomePaymentForm = () => {
  const methods = useForm<FormValues>({});

  const submitPayment: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log("data submitted", data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={methods.handleSubmit(submitPayment)}
          className="mb-6 grid gap-6 md:grid-cols-2"
        >
          <IncomeCategorySelect />
          <LabeledInput label="Give it a name" name={"name"}></LabeledInput>
          <LabeledInput label="Amount" name={"amount"} />
          <ToggleSelect
            label="Is the amount taxed?"
            defaultOption="Post-tax"
            secondaryOption="Pre-tax"
          />
          <DatePick label="When did you receive this?" />
          <ToggleSelect
            label="Does this payment repeat?"
            defaultOption="Single"
            secondaryOption="Reoccurring"
          />
          <RepeatSelect />
          <div>
            <label className="mb-2 block text-sm font-medium text-transparent">
              Some text
            </label>
            <button
              type="submit"
              className="w-3/4 rounded-lg bg-grn-700 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default IncomePaymentForm;

// repeats: boolean
// repeatsIn: Number

// paidOn = new Date(startDate.getTime() + (1000 * 60 * 60 * 24))
// one day ->                              sec * min * hour * day
