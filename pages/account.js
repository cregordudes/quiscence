import React from "react";
import ProfileInfo from "../src/components/ProfileInfo";
import ProfilePresentation from "../src/components/ProfilePresentation";
import Recommendations from "../src/components/Recommendations";
import { UserAuth } from "../src/context/AuthContext";

export default function Account() {
  const { user, logout } = UserAuth();
  return (
    <div className="w-full flex flex-row justify-between">
      <ProfilePresentation user={user} />

      <ProfileInfo />

      <Recommendations />
    </div>
  );
}
