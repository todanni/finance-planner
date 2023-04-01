import Table from "~/components/table";

const rows = [
  {
    amount: 4596,
    name: "HashiCorp",
    category: "Salary",
    date: "31-03-2023",
  },
  {
    amount: 4596,
    name: "HashiCorp",
    category: "Salary",
    date: "31-03-2023",
  },
  {
    amount: 4596,
    name: "HashiCorp",
    category: "Salary",
    date: "31-03-2023",
  },
  {
    amount: 4596,
    name: "HashiCorp",
    category: "Salary",
    date: "31-03-2023",
  },
  {
    amount: 4596,
    name: "HashiCorp",
    category: "Salary",
    date: "31-03-2023",
  },
];

const IncomePayments = () => {
  return (
    <div className="relative overflow-x-auto p-2">
      <Table headers={["Date", "Category", "Name", "Amount"]} rows={rows} />
    </div>
  );
};

export default IncomePayments;
