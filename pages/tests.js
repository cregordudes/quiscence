import { setRequestMeta } from "next/dist/server/request-meta";
import React, { useState } from "react";
import { questions, types } from "../src/testInfo/data";

const Tests = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const initialScore = {
    sleep: 0,
    healthiness: 0,
    satisfaction: 0,
    depression: 0,
    passivness: 0,
    emptiness: 0,
    anxiety: 0,
  };

  const [score, setScore] = useState(initialScore);

  const optionClicked = (type, optionScore) => {
    switch (type) {
      case "sleep":
        setScore({ ...score, sleep: score.sleep + optionScore });
        break;
      case "healthiness":
        setScore({ ...score, healthiness: score.healthiness + optionScore });
        break;
      case "satisfaction":
        setScore({ ...score, satisfaction: score.satisfaction + optionScore });
        break;
      case "depression":
        setScore({ ...score, depression: score.depression + optionScore });
        break;
      case "passivness":
        setScore({ ...score, passivness: score.passivness + optionScore });
        break;
      case "emptiness":
        setScore({ ...score, emptiness: score.emptiness + optionScore });
        break;
      case "anxiety":
        setScore({ ...score, anxiety: score.anxiety + optionScore });
        break;
      default:
        console.log("Unknown kek!");
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  console.log(score);

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center align-baseline text-center h-[35.4rem]">
      <h1 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
        Отслеживание состояния
      </h1>

      {showResults ? (
        <div
          className="relative flex flex-col justify-center items-center min-w-0 break-words border 
            border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
            bg-slate-50 font-mono text-slate-700 p-4 h-120"
        >
          <h1 className="text-xl font-semibold leading-normal text-blueGray-600 mb-2">
            Результат теста
          </h1>

          {
            // Turn into Table
          }
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Тревога: "}
            {score.anxiety}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Депрессия: "}
            {score.depression}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Пустота: "}
            {score.emptiness}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Здоровье: "}
            {score.healthiness}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Пассивность: "}
            {score.passivness}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Удовлетворение: "}
            {score.satisfaction}
          </p>
          <p className="text-md font-serif leading-normal text-sky-900 mb-2">
            {"Сон: "}
            {score.sleep}
          </p>

          <button
            onClick={() => restartGame()}
            className="w-fit border rounded-lg p-2 m-2 cursor-pointer
                           border-gray-400 text-slate-600 text-lg"
          >
            Вернуться в аккаунт
          </button>
        </div>
      ) : (
        <div
          className="relative flex flex-col min-w-0 break-words border 
            border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
            bg-slate-50 font-mono text-slate-700 p-4"
        >
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.type, option.score)}
                  className="text-slate-400 border border-gray-200 rounded-lg p-2 m-2 cursor-pointer
                           hover:border-gray-400 hover:text-slate-600"
                >
                  {option.text}
                </li>
              );
            })}
          </ul>

          <span className="text-xs font-semibold absolute right-2 bottom-1">
            {currentQuestion + 1} из {questions.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Tests;
