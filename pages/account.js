import React from "react";
import ProfileInfo from "../src/components/ProfileInfo";
import ProfilePresentation from "../src/components/ProfilePresentation";
import Recommendations from "../src/components/Recommendations";

export default function Account() {
  return (
    <div className="w-full flex flex-row justify-between">
      <ProfilePresentation />

      <ProfileInfo />

      <Recommendations />
    </div>
  );
}
