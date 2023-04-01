type Props = {
  label: string;
};

const LabeledInput = ({ label }: Props) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type="text"
        id="amount"
        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
        data-type="currency"
        required
      />
    </div>
  );
};

export default LabeledInput;
