import React from "react";
import { Select } from "~/components/forms/Select";

const repeatOptions = [
  {
    id: 1,
    value: "month",
    name: "Monthly",
  },
  {
    id: 2,
    value: "week",
    name: "Weekly",
  },
  {
    id: 3,
    value: "year",
    name: "Yearly",
  },
  {
    id: 4,
    value: "biweekly",
    name: "Every two weeks",
  },
  {
    id: 5,
    value: "biannualy",
    name: "Every 6 motnhs",
  },
  {
    id: 6,
    value: "other",
    name: "Other - specify",
  },
];

const RepeatSelect = () => {
  return (
    <div>
      <Select
        options={repeatOptions}
        label="How often does it repeat?"
      ></Select>
    </div>
  );
};

export default RepeatSelect;
