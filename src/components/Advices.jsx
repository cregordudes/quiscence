import React from "react";
import ProgressBar from "./ProgressBar";

const Advices = () => {
  const results = [
    { color: "#FFD438", word: "Сон", percent: "85" },
    { color: "#10cfcf", word: "Здоровье", percent: "50" },
    { color: "rgb(59 130 246);", word: "Удовлетворение", percent: "35" },
  ];

  const final = { color: "crimson", word: "", percent: "65" };
  return (
    <div className="relative flex flex-col min-w-0 py-4 px-2 break-words border border-t-0 bg-white w-full mb-4 shadow-xl rounded-lg">
      <h1>Отслеживайте свои успехи</h1>
      <hr />
      <p>Ваш результат: {final.percent}%</p>
      <ProgressBar
        color={final.color}
        word={final.word}
        percent={final.percent}
      />
      <div className="p-2 mt-2">
        {results.map((el, idx) => {
          return (
            <ProgressBar
              color={el.color}
              word={el.word}
              percent={el.percent}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Advices;
