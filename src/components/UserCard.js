import React from "react";

const UserCard = ({ name, src, problems, tags }) => {
  return (
    // <div class="w-60 md:w-1/4 lg:w-1/5 my-5 md:mx-5">
    <div
      class="max-w-sm w-60 lg:w-1/5 my-5 md:mx-5
     bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col items-center px-2 pt-2 pb-10 h-80">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg object-cover"
          src={src}
          alt="Bonnie image"
        />
        <h3 class="mb-1 text-lg font-medium text-gray-800 dark:text-white">
          {name}
        </h3>
        <ul class="py-1">
          {problems.map((el, idx) => {
            return (
              <p class="text-md text-center text-slate-600" key={idx}>
                {el}
              </p>
            );
          })}
        </ul>

        <div class="flex mt-4 space-x-3 lg:mt-6">
          <ul class="py-1">
            {tags.map((el, idx) => {
              const listColor =
                idx == 0 ? "#E68BFF" : idx == 1 ? "#FFD438" : "#6BD9A9";
              return (
                <li
                  className="list-inside list-disc font-bold text-md"
                  style={{ color: `${listColor}` }}
                  key={idx}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UserCard;
