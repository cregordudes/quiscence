import React from "react";
import Advices from "./Advices";
import ProfileCourse from "./ProfileCourse";
import SuggestionBlock from "./SuggestionBlock";

import blueblob from "/public/blueBlob.png";
import greenblob from "/public/greenBlob.png";
import yellowblob from "/public/yellowBlob.png";
import pinkblob from "/public/pinkBlob.png";

const Recommendations = () => {
  const courses = [
    {
      title: "Дыхательная гимнастика",
      length: "1",
      tags: ["Упражнение", "Спокйоствие"],
      blobs: blueblob,
    },
    {
      title: "Подсчет до 10",
      length: "0.5",
      tags: ["Упражнение", "Спокойствие"],
      blobs: greenblob,
    },
    // {
    //   title: "",
    //   length: "",
    //   tags: ["", ""],
    //   blobs: yellowblob,
    // },
    // {
    //   title: "",
    //   length: "",
    //   tags: ["", ""],
    //   blobs: pinkblob,
    // },
  ];

  return (
    <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <div className="container mx-auto px-4">
        <Advices />
        <ProfileCourse />
        <div className="flex justify-evenly">
          {courses.map((el, key) => {
            return (
              <SuggestionBlock
                key={key}
                title={el.title}
                length={el.length}
                tags={el.tags}
              />
            );
          })}
        </div>
        <div className="flex justify-end mt-2">
          <button
            class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 mt-3"
            type="button"
          >
            Еще
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
