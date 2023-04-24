import { setRequestMeta } from "next/dist/server/request-meta";
import React, { useState, useEffect } from "react";
import { questions, types } from "../src/testInfo/data";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";

import { UserAuth } from "../src/context/AuthContext";
import { auth, db, storage } from "../src/firebase/config";
import { ref } from "firebase/storage";
import { useRouter } from "next/router";

const Tests = () => {
  const { user } = UserAuth();
  const id = user?.uid;

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [error, setError] = useState("");
  const router = useRouter();

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
        setScore({
          ...score,
          healthiness: score.healthiness + optionScore,
        });
        break;
      case "satisfaction":
        setScore({
          ...score,
          satisfaction: score.satisfaction + optionScore,
        });
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
        console.log("Unknown");
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const docRef = doc(db, "test-results", `${user.uid}`);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // if the document doesn't exist, create a new one with the current score
        await setDoc(docRef, {
          ...score,
        });
      } else {
        // if the document exists, update it with the current score and previous values
        const prevValues = docSnap.data();
        await setDoc(docRef, {
          ...score,
          prevValues,
        });
      }
      await router.push("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      throw new Error(e);
    }
  };

  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center align-baseline text-center min-h-[35.4rem]">
      {id ? (
        <>
          <h1 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            Отслеживание состояния
          </h1>

          {showResults ? (
            <>
              <span className="text-md font-serif text-red-600 p-2 m-2">
                Внимание! Результаты и интерпретации, полученные без участия
                специалистов, не следует воспринимать слишком серьезно.
                Диагностическую ценность имеют только исследования, проведенные
                профессиональным психологом.
              </span>
              <div
                className="relative flex flex-col justify-center items-center min-w-0 break-words border 
              border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
              bg-slate-50 font-mono text-slate-700 p-4"
              >
                <h1 className="text-xl font-semibold leading-normal text-blueGray-600 mb-2">
                  Результат теста
                </h1>
                {
                  // Turn into Table
                }
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Тревога: "}
                  {score.anxiety}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Депрессия: "}
                  {score.depression}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Пустота: "}
                  {score.emptiness}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Здоровье: "}
                  {score.healthiness}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Пассивность: "}
                  {score.passivness}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Удовлетворение: "}
                  {score.satisfaction}
                </p>
                <p className="text-xl font-serif leading-normal text-sky-900 mb-2">
                  {"Сон: "}
                  {score.sleep}
                </p>
                <div className="text-left text-lg font-serif">
                  <p>
                    Далее, вы можете увидеть краткое описание вашего результата:
                  </p>
                  <p>
                    Если количество очков(в одной шкале) меньше -2 (минус два) -
                    пожалуйста, немедленно обратитесь в Бесплатный
                    круглосуточный телефон неотложной психологической помощи -
                    +37360491200. После того как вы обратились за помощью,
                    пожалуйста, запишитесь на прием к специалисту. Когда ваше
                    состояние улучшиться и не будет критическим, пожалуйста,
                    пройдите тест еще раз и мы подберем вам лучшую программу для
                    поддержки здоровья.
                  </p>
                  <p>
                    Если количество очков около нуля - это означает, что вам
                    необходима консультация с профессионалом. Возможно ваша
                    ситуация на данный момент не самая лучшая, однако вы
                    справитесь и у вас все получиться.
                  </p>
                  <p>
                    Если количество очков больше или равно 5, значит конкретно
                    этот параметр находится в отличном состоянии, и его
                    необходимо лишь поддерживать для счастливой жизни.
                  </p>
                </div>
                {user ? (
                  <button
                    onClick={handleSubmit}
                    className="w-fit border rounded-lg p-2 m-2 cursor-pointer
                            border-gray-400 text-slate-600 text-lg"
                  >
                    Сохранить результат
                  </button>
                ) : (
                  <p>Пожалуйста, автворизируйтесь чтобы пройти тест</p>
                )}
              </div>
            </>
          ) : (
            <div
              className="relative flex flex-col min-w-0 break-words border 
              border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
              bg-slate-50 font-mono text-slate-700 p-4"
            >
              <h3 className="question-text">
                {questions[currentQuestion].text}
              </h3>

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
        </>
      ) : (
        <p>Пожалуйста, войдите в аккаунт для прохождения теста</p>
      )}
    </div>
  );
};

export default Tests;
