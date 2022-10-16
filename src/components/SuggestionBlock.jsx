import Image from "next/image";
import React from "react";
import playButton from "/public/static/free-icon-play-button-109197.png";

const SuggestionBlock = ({ title, length, tags, blobs }) => {
  return (
    <div className="border-b-2 border-t-0 shadow-xl rounded-lg w-4.5/10">
      <div className="w-full h-36">
        <div className="w-full h-full mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex justify-center items-center cursor-pointer">
          <Image width={20} height={20} src={playButton} alt="playbutton" />
        </div>
      </div>
      <div className="border-1 p-2">
        <p className="text-md font-semibold">{title}</p>
        <p className="text-sm text-slate-600">Длительность - {length} мин</p>
        <div className="flex justify-start my-2">
          {tags.map((el, key) => {
            return (
              <span key={key} className="text-sm border-2 rounded-md p-1 mr-1">
                {el}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestionBlock;
