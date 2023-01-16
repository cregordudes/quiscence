import Link from "next/link.js";
import React from "react";
import CoursesLine from "../src/components/CoursesLine.jsx";

const Courses = () => {
  const types = [
    "sleep",
    "healthiness",
    "satisfaction",
    "depression",
    "passivness",
    "emptiness",
    "anxiety",
  ];

  return (
    <>
      <div className="flex justify-start mt-2 ml-2">
        <Link href={"/account"}>
          <button
            class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 mt-3"
            type="button"
          >
            Назад
          </button>
        </Link>
      </div>
      {types.map((el, idx) => {
        return <CoursesLine key={idx} type={el} />;
      })}
    </>
  );
};

export default Courses;
