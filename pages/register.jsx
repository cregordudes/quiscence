import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../src/context/AuthContext";
import { auth, db, storage } from "../src/firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/router";

const Register = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);
  const [pers, setPers] = useState(null);

  const router = useRouter();

  const { createUser, googleSignIn } = UserAuth();

  useEffect(() => {
    const uploadFile = () => {
      const uniqueName = new Date().getTime() + file.name;
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPers(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res.user);
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
      await router.push("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      throw new Error(e);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  console.log(data);

  return (
    <section class="pb-4 pt-10 bg-white shadow-xl">
      <div className="w-full h-full z-10">
        <div className="flex justify-center items-center z-20">
          <div class="flex min-h-screen w-full items-center justify-start">
            <div class="p-10 h-auto  rounded-xl  mx-auto w-full max-w-3xl z-11">
              <h1 class="text-4xl font-medium">
                Зарегистрируйтесь, чтобы пользоваться платформой Quiscence!
              </h1>
              <p class="mt-3">
                Если у вас уже есть аккаунт, тогда автворизируйтесь.
              </p>

              <form class="mt-10" onSubmit={handleSubmit}>
                <div class="grid gap-6 sm:grid-cols-2 mb-4">
                  <div class="relative z-0">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={handleImput}
                      required
                    />
                    <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Email
                    </label>
                  </div>
                  <div class="relative z-0">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={handleImput}
                      required
                    />
                    <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Пароль
                    </label>
                  </div>
                </div>

                <div class="relative z-0 my-4">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    for="file_input"
                  >
                    Выберите Фото
                  </label>
                  <input
                    class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  focus:outline-none "
                    id="file_input"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                  />
                </div>

                <div class="relative z-0 my-4">
                  <input
                    id="displayName"
                    type="text"
                    name="Name and Surname"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={handleImput}
                    required
                  />
                  <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ф.И.
                  </label>
                </div>

                <div class="relative z-0 my-4">
                  <input
                    id="bio"
                    type="text"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={handleImput}
                    required
                  />
                  <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    О себе
                  </label>
                </div>

                <div class="relative z-0 my-4">
                  <input
                    id="goal"
                    type="text"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={handleImput}
                    required
                  />
                  <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ваша цель
                  </label>
                </div>

                <div class="relative z-0 my-4">
                  <input
                    id="age"
                    type="text"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={handleImput}
                    required
                  />
                  <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Возраст
                  </label>
                </div>

                <div class="relative z-0 my-4">
                  <select
                    id="gender"
                    name="gender"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
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
                      value={"Мужичина"}
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
                </div>

                <div class="relative z-0 my-4">
                  <input
                    id="country"
                    type="text"
                    name="email"
                    class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={handleImput}
                    required
                  />
                  <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Локация
                  </label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={isChecked}
                    onChange={checkHandler}
                  />
                  <label htmlFor="checkbox">
                    {" "}
                    Я согласен с{" "}
                    <a
                      href="/agreement"
                      rel="_noreferrer"
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      пользовательским соглашением
                    </a>
                  </label>
                </div>

                <div className="flex w-full justify-between">
                  <button
                    disabled={pers !== 100 || !isChecked}
                    type="submit"
                    className="mt-5 py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
      hover:border-0 bg-green-600 hover:bg-green-500  border-green-800 hover:border-transparent rounded
       disabled:bg-green-800 disabled:hover:bg-green-900"
                  >
                    Зарегистрироваться
                  </button>
                  <button
                    onClick={handleGoogleSignIn}
                    type="redirrect"
                    className="mt-5 py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
      hover:border-0 bg-blue-600 hover:bg-blue-600  border-blue-800 hover:border-transparent rounded"
                  >
                    Войти с помощью Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
