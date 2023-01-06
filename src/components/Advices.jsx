import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { doc, getDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/config";
import Loading from "./Loading";

const Advices = () => {
   const { user } = UserAuth();
   const [data, setData] = useState({});
   const [isLoaded, setIsLoaded] = useState(false);
   // const [percent, setPercent] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const docRef = doc(db, "test-results", `${user.uid}`);
            const docSnap = await getDoc(docRef);
            setData(docSnap.data());

            setIsLoaded(true);

            if (data.length < 1) {
               throw new Error("Please update your Data");
            }
         } catch (e) {}
      };
      fetchData();
   }, [user.uid]);

   const percent = [data.sleep, data.healthiness, data.satisfaction];

   const results = [
      { color: "#FFD438", word: "Сон", percent: `${percent[0]}` },
      { color: "#10cfcf", word: "Здоровье", percent: `${percent[1]}` },
      { color: "#3b82f6", word: "Удовлетворение", percent: `${percent[2]}` },
   ];

   const arifPercent = (percent[0] + percent[1] + percent[2]) / 3;
   const final = {
      color: "crimson",
      word: "",
      percent: `${arifPercent}`,
   };
   return (
      <div className="relative flex flex-col min-w-0 py-4 px-2 break-words border border-t-0 bg-white w-full mb-4 shadow-xl rounded-lg">
         <h1 className="p-2 mt-2">Отслеживайте свои успехи</h1>
         <hr />
         <p className="p-2 mt-2">Ваш общий результат результат:</p>
         <ProgressBar
            color={final.color}
            word={final.word}
            percent={final.percent}
         />
         <div className="p-2 mt-2">
            {isLoaded ? (
               results.map((el, idx) => {
                  return (
                     <ProgressBar
                        color={el.color}
                        word={el.word}
                        percent={el.percent}
                        key={idx}
                     />
                  );
               })
            ) : (
               <Loading />
            )}
         </div>
      </div>
   );
};

export default Advices;
