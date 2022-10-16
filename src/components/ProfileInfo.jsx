import React from "react";
import Bio from "./Bio";
import Characteristics from "./Characteristics";
import Goals from "./Goals";

const ProfileInfo = () => {
  return (
    <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <Bio />
      <Characteristics />
      <Goals />
    </section>
  );
};

export default ProfileInfo;
