/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";

type Props = {
  labelText: string;
  checkBoxText: string;
};

const LabeledCheckbox = ({ labelText, checkBoxText }: Props) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-white">
      {labelText}
    </label>
    <div className="flex items-center rounded-lg border border-gray-300 bg-white pl-4">
      <input
        id="bordered-checkbox-1"
        type="checkbox"
        name="bordered-checkbox"
        className="rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
      />
      <label className="font-nro ml-2 w-full p-2.5 text-sm text-gray-900">
        {checkBoxText}
      </label>
    </div>
  </div>
);

export default LabeledCheckbox;
