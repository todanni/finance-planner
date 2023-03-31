import React from "react";
import { api } from "~/utils/api";

const IncomeCategorySelect = () => {
  const { data } = api.subCategory.getAll.useQuery();

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white">
        Select income type
      </label>
      <select
        id="subCategory"
        defaultValue="Salary"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        {data?.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IncomeCategorySelect;
