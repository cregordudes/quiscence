import { textAlign } from "@mui/system";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { archetypes } from "../testInfo/data";

const ProfilePresentation = ({ user, data }) => {
   const username = user.displayName ? user.displayName : data.displayName;
   const since = data.timestamp.toDate().toLocaleDateString("en-GB");

   const archetype = data.archetype || "Не указано";

   const getArchetypeValue = (string) => {
      return archetypes[string];
   };

   const initialArchetypeState = getArchetypeValue(archetype);
   const [tooltipText, setTooltipText] = useState(
      initialArchetypeState !== undefined ? initialArchetypeState : ""
   );
   const [isTooltipVisible, setIsTooltipVisible] = useState(tooltipText !== "");

   const [isDisabled, setIsDisabled] = useState(true);
   const [newData, setNewData] = useState(data);
   const router = useRouter();

   const inputStyles = isDisabled
      ? "w-1/2"
      : "w-1/2 border border-slate-500 rounded-md";

   const handleUpdate = async (e) => {
      e.preventDefault();
      updateDoc(doc(db, "users", `${user.uid}`), newData);
      setTimeout(() => {
         setIsDisabled(!isDisabled);
         router.reload(window.location.pathname);
      }, 1000);
   };

   const enableEdit = () => {
      setIsDisabled(!isDisabled);
   };

   const handleImput = (e) => {
      const id = e.target.id;
      const value = e.target.value;
      setTooltipText(getArchetypeValue(value));
      setNewData({ ...newData, [id]: value });
   };

   return (
      <section class="relative py-16 bg-blueGray-200 w-full md:w-1/2 lg:w-1/3">
         <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words border border-t-0 bg-white w-full mb-6 shadow-xl rounded-lg">
               <div class="px-6 relative">
                  <div
                     className="absolute right-0 cursor-pointer"
                     onClick={enableEdit}
                  >
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
                  <div class="px-4 flex justify-center h-32 md:h-48">
                     <div class="relative">
                        <img
                           alt="avatar img"
                           src={data.img}
                           class=" shadow-xl rounded-full h-32 align-middle border-none w-32  md:w-48 md:h-48 object-cover"
                        />
                     </div>
                  </div>
                  <div class="realtive text-center mt-4">
                     {isDisabled ? (
                        <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                           {username}
                        </h3>
                     ) : (
                        <input
                           id="displayName"
                           class="w-fit text-lg font-semibold leading-normal text-blueGray-700 mb-2 border border-slate-500 rounded-md"
                           disabled={isDisabled}
                           value={newData.displayName}
                           onChange={handleImput}
                        />
                     )}
                     <div class="mb-2 text-blueGray-600">
                        <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        с нами с {since}
                     </div>
                  </div>
                  <div class="mt-2 py-5 border-t border-blueGray-200 text-center">
                     <div class="flex flex-wrap justify-center">
                        <div class="w-full lg:w-9/12 px-4 ">
                           <label class="text-lg font-bold leading-relaxed text-blueGray-700">
                              Возраст:&nbsp;
                           </label>
                           <input
                              style={{ width: "60px" }}
                              id="age"
                              class={`${inputStyles} px-2 bg-white`}
                              disabled={isDisabled}
                              value={newData.age}
                              onChange={handleImput}
                           />
                        </div>

                        <div class="w-full lg:w-9/12 px-4">
                           {isDisabled ? (
                              <>
                                 <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                                    Пол:
                                 </span>
                                 <span class="mb-4 "> {newData.gender}</span>
                              </>
                           ) : (
                              <select
                                 style={{ width: "145px" }}
                                 class={`w-full ${inputStyles} font-bold`}
                                 id="gender"
                                 name="gender"
                                 onChange={handleImput}
                                 required
                              >
                                 <option
                                    disabled
                                    selected
                                    value={"Не указано"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Выберите Пол
                                 </option>
                                 <option
                                    value={"Мужчина"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Мужчина
                                 </option>
                                 <option
                                    value={"Женщина"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Женщина
                                 </option>
                              </select>
                           )}
                        </div>

                        <div class="w-full lg:w-9/12 px-4">
                           <label class="text-lg font-bold leading-relaxed text-blueGray-700">
                              Локация:&nbsp;
                           </label>
                           <input
                              style={{ width: "100%", textAlign: "center" }}
                              id="country"
                              class={`${inputStyles} bg-white px-2`}
                              disabled={isDisabled}
                              value={newData.country}
                              onChange={handleImput}
                           />
                        </div>
                        <div class="w-full lg:w-9/12 px-4">
                           <span class="text-lg font-bold leading-relaxed text-blueGray-700">
                              Архетип:
                           </span>
                           {isDisabled ? (
                              <span class="mb-4 "> {archetype}</span>
                           ) : (
                              <select
                                 style={{ width: "145px" }}
                                 class={`w-full ${inputStyles} font-bold`}
                                 id="archetype"
                                 name="archetype"
                                 onChange={handleImput}
                                 required
                              >
                                 <option
                                    disabled
                                    defaultValue={archetype}
                                    value={archetype}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Ваш Архетип
                                 </option>
                                 <option
                                    value={"Простодушный"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Простодушный
                                 </option>
                                 <option
                                    value={"Искатель"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Искатель
                                 </option>
                                 <option
                                    value={"Мудрец"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Мудрец
                                 </option>
                                 <option
                                    value={"Бунтарь"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Бунтарь
                                 </option>
                                 <option
                                    value={"Маг"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Маг
                                 </option>
                                 <option
                                    value={"Герой"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Герой
                                 </option>
                                 <option
                                    value={"Любовник"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Любовник
                                 </option>
                                 <option
                                    value={"Шут"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Шут
                                 </option>
                                 <option
                                    value={"Славный Малый"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Славный Малый
                                 </option>
                                 <option
                                    value={"Заботливый"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Заботливый
                                 </option>
                                 <option
                                    value={"Правитель"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Правитель
                                 </option>
                                 <option
                                    value={"Творец"}
                                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                                 >
                                    Творец
                                 </option>
                              </select>
                           )}
                        </div>
                        {isTooltipVisible && (
                           <div className="w-full mt-2 shadow-md border-t-2 rounded-lg text-slate-700 text-md p-2">
                              {tooltipText}
                           </div>
                        )}
                     </div>
                  </div>
                  {isDisabled ? null : (
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
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProfilePresentation;
