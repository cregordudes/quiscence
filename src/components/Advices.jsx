import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { doc, getDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/config";
import Loading from "./Loading";
import Link from "next/link";
import { useRouter } from "next/router";

const Advices = ({ data }) => {
   const { user } = UserAuth();
   const [exists, setExists] = useState(true);

   const router = useRouter();

   useEffect(() => {
      if (!data) {
         setExists(false);
      }
   }, [user.uid, exists]);

   const sleepPercent = Math.min((data?.sleep + 10) * 5, 100);
   const healthinessPercent = Math.min((data?.healthiness + 10) * 5, 100);
   const satisfactionPercent = Math.min((data?.satisfaction + 10) * 5, 100);

   const results = [
      { color: "#FFD438", word: "Сон", percent: `${sleepPercent}%` },
      { color: "#10cfcf", word: "Здоровье", percent: `${healthinessPercent}%` },
      {
         color: "#3b82f6",
         word: "Удовлетворение",
         percent: `${satisfactionPercent}%`,
      },
   ];

   const arifPercent =
      (sleepPercent + healthinessPercent + satisfactionPercent) / 3;

   const final = {
      color: "crimson",
      word: "",
      percent: `${arifPercent}%`,
   };

   return (
      <div className="relative flex flex-col min-w-0 pb-4 px-2 break-words border border-t-0 bg-white w-full mb-4 shadow-xl rounded-lg">
         <h1 className="p-2 mt-2">Отслеживайте свои успехи</h1>
         <hr />

         {exists ? (
            <div className="">
               <p className="">Ваш средний результат:</p>
               <ProgressBar
                  color={final.color}
                  word={final.word}
                  percent={final.percent}
               />
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
         ) : (
            <h1>
               Чтобы видеть вашу персонализированную характеристику -
               <Link href={"/tests"}>
                  <a className="text-myPink font-bold text-lg">
                     пройдите сначала тест
                  </a>
               </Link>
            </h1>
         )}
      </div>
   );
};

export default Advices;
