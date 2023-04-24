import React, { useEffect, useMemo, useState } from "react";
import Advices from "./Advices";
import ProfileCourse from "./ProfileCourse";
import SuggestionBlock from "./SuggestionBlock";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

const Recommendations = () => {
  const [courses, setCourses] = useState([]);
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = UserAuth();
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const [min, setMin] = useState(null);
  const [meta, setMeta] = useState("");

  const router = useRouter();

  const enableEdit = () => {
    setIsDisabled(false);
    fetchData();
  };

  const coursesMemo = useMemo(() => {
    return courses.filter((el) => {
      return el.meta === meta;
    });
  }, [courses, meta]);

  const fetchData = async () => {
    try {
      const docRef = doc(db, "test-results", `${user.uid}`);
      const videosCollectionRef = collection(db, "videos");
      const [docSnap, querySnapshot] = await Promise.all([
        getDoc(docRef),
        getDocs(videosCollectionRef),
      ]);
      setData(docSnap?.data());
      const courses = querySnapshot.docs.map((doc) => doc.data());
      setCourses(courses);
      setIsLoaded(!!docSnap?.data());
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      setMin(Math.min(...Object.values(data)));
      setMeta(Object.keys(data).find((key) => data[key] === min));

      const randomStart = () => {
        const len = coursesMemo.length;

        let randomIndex1 = Math.floor(Math.random() * len);
        let randomIndex2;
        do {
          randomIndex2 = Math.floor(Math.random() * len);
        } while (randomIndex2 === randomIndex1);

        return [coursesMemo[randomIndex1], coursesMemo[randomIndex2]];
      };

      setState(randomStart());
    }
  }, [isLoaded]);

  return (
    <section className="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
      <div className="container mx-auto px-4">
        <Advices />

        <div className="relative mx-auto px-4 py-2 shadow-xl text-slate-700 rounded-lg ">
          <div className="absolute right-2 top-3 cursor-pointer">
            {isDisabled ? (
              <div onClick={enableEdit}>
                <VisibilityOffIcon />
              </div>
            ) : (
              <div
                onClick={() => {
                  setIsDisabled(true);
                }}
              >
                <VisibilityIcon />
              </div>
            )}
          </div>
          <h2 className="text-slate-800 font-semibold text-lg">
            Рекоммендуемые курсы
          </h2>

          {isDisabled ? (
            <div></div>
          ) : isLoaded ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
