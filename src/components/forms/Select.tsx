type SelectOption = {
  id: number;
  value: string;
  name: string;
};

type Props = {
  options: SelectOption[] | undefined;
  label: string;
};

const Select = ({ options, label }: Props) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <select
        id="subCategory"
        defaultValue="Salary"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        {options?.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
