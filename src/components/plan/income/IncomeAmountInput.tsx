import React from "react";

const IncomeAmountInput = () => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        Amount
      </label>
      <input
        type="number"
        id="amount"
        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900"
        data-type="currency"
        required
      />
    </div>
  );
};

export default IncomeAmountInput;
