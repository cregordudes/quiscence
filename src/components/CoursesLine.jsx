import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config.js";
import Loading from "./Loading";
import SuggestionBlock from "./SuggestionBlock";

const CoursesLine = ({ type }) => {
  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setCourses(arr);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="border-b-2 rounded-md shadow bg-white-50 mt-5 p-4">
      <p className="font-bold text-2xl text-slate-800 uppercase tracking-wider">
        {type}
      </p>
      <div className="h-0.5 my-2 mx-0.5 rounded-md bg-slate-300" />
      <div className="flex justify-between flex-row flex-wrap">
        {courses !== undefined ? (
          courses
            .filter((el) => el.meta === type)
            .map((el) => {
              return (
                <div key={el.id} className="w-1/2 m-0 flex justify-center my-2">
                  <SuggestionBlock
                    title={el.name}
                    length={el.length}
                    tags={el.tags}
                    link={el.link}
                  />
                </div>
              );
            })
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default CoursesLine;
