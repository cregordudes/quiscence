import React from "react";

const TitleHeader = ({ title, text }) => {
  return (
    <div class="relative">
      <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
        {text}
      </p>
    </div>
  );
};

export default TitleHeader;
