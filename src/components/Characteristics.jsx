import React from "react";

const Characteristics = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          for="disabled-range"
          class="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Min range
        </label>
        <label
          for="disabled-range"
          class="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Max range
        </label>
      </div>
      <input
        id="disabled-range"
        type="range"
        value="50"
        class="w-full h-2 bg-gray-200 text-blue-700 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
        disabled
      />
    </div>
  );
};

export default Characteristics;
