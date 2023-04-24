import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RadarChart from "./RadarChart";
import Loading from "./Loading";
import { Link } from "@mui/material";
import { RedoSharp } from "@mui/icons-material";

const Comparison = ({ user }) => {
  const goal = data || "Не указано";
  const [isDisabled, setIsDisabled] = useState(true);
  const [newData, setNewData] = useState(data);

  const router = useRouter();

  const [data, setData] = useState({});
  const [results, setResults] = useState({});
  const [oldResults, setOldResults] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);
  const [exists, setExists] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "test-results", `${user.uid}`);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());

        setIsLoaded(true);
        setExists(true);

        if (data.length < 1) {
          throw new Error("Please update your Data");
        }
      } catch (e) {
        throw new Error(e);
        // router.push("/updateInfo");
      }
    };
    if (!isLoaded) {
      fetchData();
    }
    if (!data) {
      setExists(false);
    }

    if (exists) {
      const { prevValues, ...newValues } = data;
      setResults(Object.values(newValues));
      setOldResults(Object.values(prevValues));
    }
  }, [user.uid, exists]);

  const inputStyles = isDisabled
    ? "w-1/2"
    : "w-1/2 border border-slate-500 rounded-md";

  const handleUpdate = async (e) => {
    e.preventDefault();
    updateDoc(doc(db, "users", `${user.uid}`), { goal: newData });
    setTimeout(() => {
      setIsDisabled(!isDisabled);
      router.reload(window.location.pathname);
    }, 1000);
  };

  const enableEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleImput = (e) => {
    setNewData(goal);
    const value = e.target.value;
    setNewData(value);
  };

  return (
    <div>
      {isLoaded ? (
        exists ? (
          <div className="mx-auto px-4 py-2 shadow-xl text-slate-700 rounded-lg ">
            <div
              className="absolute right-2 cursor-pointer"
              onClick={enableEdit}
            >
              {isDisabled ? (
                <div>
                  <VisibilityOffIcon />
                </div>
              ) : (
                <VisibilityIcon />
              )}
            </div>
            <h2 className="text-slate-800 font-semibold text-lg">
              Сравнить с прошлыми результами
            </h2>

            {isDisabled ? (
              <div></div>
            ) : (
              <RadarChart oldResults={oldResults} newResults={results} />
            )}
          </div>
        ) : (
          <h1>Нет предыдущих результатов</h1>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Comparison;
