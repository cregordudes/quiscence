import Link from "next/link";
import React from "react";

const TextBlock = ({ title, heading, text, id }) => {
  const pClass = `mb-2 text-lg font-semibold leading-none text-left text-indigo-500 uppercase`;
  return (
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-5/12">
      <p className={pClass}>{title}</p>
      <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">{heading}</h3>
      <p className="mt-5 text-lg text-gray-700 text md:text-left w-4/5">
        {text}
      </p>
      {id == 1 && (
        <Link href="/tests">
          <button
            className="mt-5 py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
          hover:border-0 bg-violet-600 hover:bg-violet-600  border-violet-800 hover:border-transparent rounded underline-none"
          >
            Пройти тест &#8250;
          </button>
        </Link>
      )}
    </div>
  );
};

export default TextBlock;
