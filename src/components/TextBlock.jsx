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
        <button className="bg-indigo-500 text-slate-100 w-4/12 p-1 mt-3 rounded-xl">
          Пройти тест
        </button>
      )}
    </div>
  );
};

export default TextBlock;
