import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { db } from "../firebase/config";

const Goals = ({ data, user }) => {
  const goal = data || "Не указано";
  const [isDisabled, setIsDisabled] = useState(true);
  const [newData, setNewData] = useState(data);

  const router = useRouter();

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
  // console.log("newData: ", newData);
  return (
    <div className="mx-auto px-4 py-2 shadow-xl text-slate-700 rounded-lg ">
      <div className="absolute right-0 cursor-pointer" onClick={enableEdit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
      <h2 className="text-slate-800 font-semibold text-lg">Цель</h2>

      {isDisabled ? (
        <p>{goal}</p>
      ) : (
        <>
          <input
            id="goal"
            class="w-full text-lg font-semibold leading-normal text-blueGray-700 mb-2 border border-slate-500 rounded-md"
            disabled={isDisabled}
            value={newData}
            onChange={handleImput}
          />
          <div className="mb-2 w-full flex justify-center align-top">
            <button
              type="submit"
              onClick={handleUpdate}
              className="py-2 px-4 w-fit h-10 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
  hover:border-0 bg-teal-600 hover:bg-teal-500  border-teal-800 hover:border-transparent rounded"
            >
              Сохранить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Goals;
