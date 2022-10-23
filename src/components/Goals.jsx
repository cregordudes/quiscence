import React from "react";

const Goals = ({ data }) => {
  const goal = data || "Не указано";
  return (
    <div>
      <div className="mx-auto px-4 py-2 shadow-xl text-slate-700 rounded-lg ">
        <h2 className="text-slate-800 font-semibold text-lg">Цель</h2>

        <p>{goal}</p>
      </div>
    </div>
  );
};

export default Goals;
