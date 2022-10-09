import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { googleSignIn, user, logOut } = UserAuth();

  const ulStyle = isOpen ? " " : "hidden ";
  const styles =
    ulStyle +
    "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6";

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <Link href="/">
        <a className="text-3xl font-bold leading-none ">Quicsence</a>
      </Link>
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center text-blue-600 p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <ul className={styles}>
        <li>
          <Link href="#">
            <a className="text-sm  text-slate-500 hover:text-slate-600 custom-underline">
              О нас
            </a>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link href="#">
            <a className="text-sm text-slate-500 hover:text-slate-600 custom-underline">
              Пройти тест
            </a>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link href="#">
            <a className="text-sm  text-slate-500 hover:text-slate-600 custom-underline">
              Наша цель
            </a>
          </Link>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <Link href="#">
            <a className="text-sm  text-slate-500 hover:text-slate-600 custom-underline">
              Контакты
            </a>
          </Link>
        </li>
      </ul>

      {user?.displayName ? (
        <>
          <Link href="/account">
            <img
              className="cursor-pointer lg:ml-auto w-10 h-9 lg:mr-3 p-1 rounded-full transition duration-200"
              src={user?.photoURL}
            />
          </Link>
          <Link href="#">
            <a
              onClick={handleSignOut}
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            >
              Выйти
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href="#">
            <a
              onClick={handleGoogleSignIn}
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            >
              Войти
            </a>
          </Link>
          <Link href="#">
            <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
              Зарегистрироваться
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
