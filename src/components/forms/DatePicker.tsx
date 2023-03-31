import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { type DateValueType } from "react-tailwindcss-datepicker/dist/types";

const options = {
  title: "",
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-100 dark:bg-gray-600",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-gray-400",
    input: "bg-white dark:bg-white text-white dark:text-gray-400",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => <span>{"<"}</span>,
    next: () => <span>{">"}</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2023-03-31"),
  language: "en",
};

const DatePick = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        When did you receive this?
      </label>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatePick;
