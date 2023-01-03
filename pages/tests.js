import React, { useState } from "react";
import { questions } from "../src/testInfo/data";

const Tests = () => {
   const [showResults, setShowResults] = useState(false);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);

   /* A possible answer was clicked */
   const optionClicked = (isCorrect) => {
      // Increment the score
      if (isCorrect) {
         setScore(score + 1);
      }

      if (currentQuestion + 1 < questions.length) {
         setCurrentQuestion(currentQuestion + 1);
      } else {
         setShowResults(true);
      }
   };

   /* Resets the game back to default */
   const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
   };

   return (
      <div className="w-full pt-10 bg-white flex flex-col justify-center align-baseline text-center h-[35.4rem]">
         {/* 1. Header  */}
         <h1 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            Отслеживание состояния
         </h1>

         {/* 2. Current Score  */}
         <h2>Счет: {score}</h2>

         {/* 3. Show results or show the question game  */}
         {showResults ? (
            /* 4. Final Results */
            <div
               className="relative flex flex-col justify-center items-center min-w-0 break-words border 
            border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
            bg-slate-50 font-mono text-slate-700 p-4 h-120"
            >
               <h1 className="text-xl font-semibold leading-normal text-blueGray-600 mb-2">
                  Результат теста
               </h1>
               <h2>
                  {score} из {questions.length} правильных - (
                  {(score / questions.length) * 100}%)
               </h2>
               <button
                  onClick={() => restartGame()}
                  className="w-fit border rounded-lg p-2 m-2 cursor-pointer
                           border-gray-400 text-slate-600 text-lg"
               >
                  Вернуться в аккаунт
               </button>
            </div>
         ) : (
            /* 5. Question Card  */
            <div
               className="relative flex flex-col min-w-0 break-words border 
            border-t-gray-200 w-2/3 mx-auto mb-6 mt-1 shadow-xl rounded-lg
            bg-slate-50 font-mono text-slate-700 p-4"
            >
               <h3 className="question-text">
                  {questions[currentQuestion].text}
               </h3>

               {/* List of possible answers  */}
               <ul>
                  {questions[currentQuestion].options.map((option) => {
                     return (
                        <li
                           key={option.id}
                           onClick={() => optionClicked(option.isCorrect)}
                           className="text-slate-400 border border-gray-200 rounded-lg p-2 m-2 cursor-pointer
                           hover:border-gray-400 hover:text-slate-600"
                        >
                           {option.text}
                        </li>
                     );
                  })}
               </ul>
               {/* Current Question  */}
               <span className="text-xs font-semibold absolute right-2 bottom-1">
                  {currentQuestion + 1} из {questions.length}
               </span>
            </div>
         )}
      </div>
   );
};

export default Tests;
