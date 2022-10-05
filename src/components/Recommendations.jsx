import React from "react";
import Advices from "./Advices";
import ProfileCourse from "./ProfileCourse";

const Recommendations = () => {
  return (
    <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <div className="container mx-auto px-4">
        <Advices />
        <ProfileCourse />
      </div>
    </section>
  );
};

export default Recommendations;
