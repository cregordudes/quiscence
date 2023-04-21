import React from "react";
import Bio from "./Bio";
import Characteristics from "./Characteristics";
import Goals from "./Goals";

const ProfileInfo = ({ data, user }) => {
   return (
      <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
         <Bio data={data.bio} user={user} />
         <Characteristics />
         <Goals data={data.goal} user={user} />
      </section>
   );
};

export default ProfileInfo;
