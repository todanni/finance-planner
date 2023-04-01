import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  name: string;
};

const LabeledInput = ({ label, name }: Props) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type="text"
        id={name}
        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
        data-type="currency"
        required
        {...register(name)}
      />
    </div>
  );
};

export default LabeledInput;
