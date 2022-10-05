import React from "react";

const ProgressBar = ({ color, word, percent }) => {
  return (
    <>
      <h3>{word}</h3>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class={`h-2.5 rounded-full`}
          style={{ width: `${percent}%`, backgroundColor: `${color}` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
