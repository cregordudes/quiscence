import React from "react";

const Range = ({ min, max, value }) => {
   return (
      <>
         <div className="flex justify-between items-center">
            <label
               for="disabled-range"
               class="inline mb-2 text-sm font-medium text-slate-600 dark:text-gray-300"
            >
               {min}
            </label>
            {/*<span> {value} </span>*/}
            <label
               for="disabled-range"
               class="inline mb-2 text-sm font-medium text-slate-600 dark:text-gray-300"
            >
               {max}
            </label>
         </div>
         <input
            id="disabled-range"
            type="range"
            value={value}
            min={-10}
            max={10}
            class="w-full h-2 bg-gray-200 text-blue-700 rounded-lg slider appearance-none cursor-pointer dark:bg-blue-700"
            disabled
         />
      </>
   );
};

export default Range;
