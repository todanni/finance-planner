import React from "react";
import { type ReactNode } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";

type Props = {
  someProp: string;
  children: ReactNode;
  submitHandler: SubmitHandler<any>;
};

const Form = ({ children, submitHandler }: Props) => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={submitHandler}
          className="mb-6 grid gap-6 md:grid-cols-2"
        >
          {children}
        </form>
      </FormProvider>
    </>
  );
};

export default Form;
