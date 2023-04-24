import Image from "next/image";
import React from "react";

const BeliefCard = ({ src, title, text, color }) => {
  return (
    <div className="w-1/3 p-2 flex flex-col justify-center items-center">
      <Image width={64} height={64} src={src} alt="title" />
      <p className="text-lg font-bold " style={{ color: `${color}` }}>
        {title}
      </p>
      <p className="text-slate-800 text-center">{text}</p>
    </div>
  );
};

export default BeliefCard;
