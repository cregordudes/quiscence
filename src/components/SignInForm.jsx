import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const SignInForm = ({ loginModal, setLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      setLoginModal(false);
    } catch (e) {
      setError(e.msessage);
      console.log(e.msessage);
      throw new Error(e);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setLoginModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-full z-10 cursor-pointer"
      onClick={() => setLoginModal(false)}
    >
      <div className="bg-blue-300 opacity-95 w-screen h-screen -z-10 absolute"></div>
      <div className="flex justify-center items-center z-20">
        <div className="opacity-100">
          <div class="flex min-h-screen items-center justify-start">
            <div
              class="bg-white p-10 h-auto shadow-xl rounded-xl  mx-auto w-full max-w-xl z-11"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button onClick={() => setLoginModal(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 class="text-4xl font-medium">
                Зарегистрируйтесь, чтобы пользоваться платформой Quiscence!
              </h1>
              <p class="mt-3">
                Если у вас уже есть аккаунт, тогда автворизируйтесь.
              </p>

              <form action="#" class="mt-10" onSubmit={handleSubmit}>
                <div class="grid gap-6 sm:grid-cols-2">
                  <div class="relative z-0">
                    <input
                      type="text"
                      name="email"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Email
                    </label>
                  </div>
                  <div class="relative z-0">
                    <input
                      type="password"
                      name="password"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label class="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Пароль
                    </label>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <button
                    type="submit"
                    className="mt-5 py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
    hover:border-0 bg-green-600 hover:bg-green-500  border-green-800 hover:border-transparent rounded"
                  >
                    Войти
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
    </div>
  );
};

export default SignInForm;
