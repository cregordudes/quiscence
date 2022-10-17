import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";
import userImg from "/public/static/avatar.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const { googleSignIn, user, logOut } = UserAuth();

  const signInWithEmail = () => {
    setModal(!modal);
  };

  const signInWitthGoogle = () => {
    setLoginModal(!modal);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="w-full bg-white border-b-2">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:w-1/4 md:py-5 md:block">
          <Link href="/">
            <h2 className="text-2xl font-bold cursor-pointer">Quiscence</h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:w-3/4 md:block md:pb-0 md:mt-0 lg:w-2/4 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-between space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-slate-500 hover:text-slate-600 custom-underline">
              <Link href="/about">О нас</Link>
            </li>
            <li className="text-slate-500 hover:text-slate-600 custom-underline">
              <Link href="#">Пройти тест</Link>
            </li>
            <li className="text-slate-500 hover:text-slate-600 custom-underline">
              <Link href="/goal">Наша цель</Link>
            </li>
            <li className="text-slate-500 hover:text-slate-600 custom-underline">
              <Link href="/contacts">Контакты</Link>
            </li>
            {user?.email ? (
              <>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/account">
                    {user?.photoURL ? (
                      <img
                        alt="photo"
                        className="cursor-pointer lg:ml-auto w-10 h-10 lg:mr-3 p-1 rounded-full transition duration-200"
                        src={user.photoURL}
                      />
                    ) : (
                      <Image
                        alt="photo"
                        width={40}
                        height={40}
                        className="cursor-pointer lg:ml-auto w-10 h-10 lg:mr-3 p-1 rounded-full transition duration-200"
                        src={userImg}
                      />
                    )}
                  </Link>
                </li>

                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="/">
                    <a
                      onClick={handleSignOut}
                      className=" lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                    >
                      Выйти
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="#">
                    <a
                      onClick={signInWitthGoogle}
                      className="md:px-2 lg:inline-block lg:ml-auto lg:mr-3 py-2 lg:px-6 bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                    >
                      Войти
                    </a>
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link href="#">
                    <a
                      onClick={signInWithEmail}
                      className="inline-block md:hidden xl:inline-block py-2 lg:px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                    >
                      Зарегистрироваться
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      onClick={signInWithEmail}
                      className="hidden md:inline-block md:px-2 xl:hidden py-2 lg:px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                    >
                      Заре...
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {modal ? <LoginForm modal={modal} setModal={setModal} /> : null}
      {loginModal ? (
        <SignInForm loginModal={loginModal} setLoginModal={setLoginModal} />
      ) : null}
    </nav>
  );
};

export default Navbar;
