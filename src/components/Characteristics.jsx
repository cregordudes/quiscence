import React from "react";
import Range from "./Range";

const Characteristics = () => {
  const chars = [
    { min: "Депрессия", max: "Счастье", value: 34 },
    { min: "Пассивность", max: "Агрессия", value: 10 },
    { min: "Пустота", max: "Наполненность", value: 45 },
    { min: "Паника", max: "Спокйоствие", value: 70 },
  ];
  return (
    <div className="mx-auto my-5 px-4 py-2 shadow-lg rounded-lg ">
      <h2 className="text-slate-800 font-semibold text-lg">Characteristics</h2>

      {chars.map((el, idx) => {
        return <Range min={el.min} max={el.max} value={el.value} key={idx} />;
      })}
    </div>
  );
};

export default Characteristics;
