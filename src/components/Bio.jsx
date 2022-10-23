import React from "react";

const Bio = ({ data }) => {
  const bio = data || "Не указано";
  return (
    <div className="mx-auto px-4 py-2 text-slate-600 shadow-lg rounded-lg ">
      <h2 className="text-slate-800 font-semibold text-lg">О себе</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
