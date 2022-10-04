import React from "react";
import Advices from "../src/components/Advices";
import Characteristics from "../src/components/Characteristics";
import ProfileCourse from "../src/components/ProfileCourse";
import ProfileInfo from "../src/components/ProfileInfo";
import ProfilePresentation from "../src/components/ProfilePresentation";

export default function Account() {
  return (
    <div>
      {
        //left
      }
      <ProfilePresentation />
      {
        //middle
        //   <ProfileInfo />
        //   <Characteristics />
        //right
        //   <ProfileCourse />
        //   <Advices />
      }
    </div>
  );
}
