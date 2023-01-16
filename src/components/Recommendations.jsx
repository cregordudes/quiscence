import React, { useEffect, useState } from "react";
import Advices from "./Advices";
import ProfileCourse from "./ProfileCourse";
import SuggestionBlock from "./SuggestionBlock";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import blueblob from "/public/blueBlob.png";
import greenblob from "/public/greenBlob.png";
import yellowblob from "/public/yellowBlob.png";
import pinkblob from "/public/pinkBlob.png";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Recommendations = () => {
  const [courses, setCourses] = useState([]);
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = UserAuth();
  const [data, setData] = useState({});

  const router = useRouter();

  const fetchData = async () => {
    try {
      const docRef = doc(db, "test-results", `${user.uid}`);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());

      const arr = [];
      const querySnapshot = await getDocs(collection(db, "videos"));
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        arr.push(doc.data());
      });
      setCourses(arr);
      docSnap.data() ? setIsLoaded(true) : null;
    } catch (e) {
      // router.push("/updateInfo");
      // router.reload("/updateInfo");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const min = Math.min(...Object.values(data));
      const meta = Object.keys(data).find((key) => data[key] === min);

      const randomStart = () => {
        const len = courses.filter((el) => {
          return el.meta === meta;
        }).length;

        return Math.floor(Math.random() * (len - 1));
      };
      const array = courses.filter((el) => {
        return el.meta === meta;
      });
      console.log(array);

      setState([array[randomStart()], array[randomStart() + 1]]);
    }
  }, [courses, data, isLoaded]);

  return (
    <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <div className="container mx-auto px-4">
        <Advices />
        {
          //<ProfileCourse />}
        }
        <div className="flex justify-evenly">
          {state
            ? state.map((el, key) => {
                return (
                  <SuggestionBlock
                    key={key}
                    title={el.name}
                    length={el.length}
                    tags={el.tags}
                    link={el.link}
                  />
                );
              })
            : null}
        </div>
        <div className="flex justify-end mt-2">
          <Link href={"/courses"}>
            <button
              class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 mt-3"
              type="button"
            >
              Еще
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
