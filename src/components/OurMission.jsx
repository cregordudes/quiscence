import Image from "next/image";
import React from "react";

const OurMission = ({ title, text, src }) => {
  return (
    <div>
      <div class="flex flex-row mb-8 animated fadeIn sm:flex-row justify-around">
        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-6/12">
          <h3 className="mt-2 font-bold text-2xl sm:text-left md:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-lg text-gray-700 text md:text-left w-4/5">
            {text}
          </p>
        </div>
        <div class="flex items-center mb-8 sm:w-1/2 md:w-4/12 sm:mr-16">
          <Image
            class="rounded-lg shadow-xl"
            src={src}
            width="425"
            height={"425"}
            alt="doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
