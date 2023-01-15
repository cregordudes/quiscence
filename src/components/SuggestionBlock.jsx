import Image from "next/image";
import React from "react";
import playButton from "/public/static/free-icon-play-button-109197.png";

const SuggestionBlock = ({ title, length, tags, link }) => {
  const embedId = link.slice(
    link.indexOf("watch?v=") + 8,
    link.indexOf("&ab_channel")
  );
  return (
    <div className="border-b-2 border-t-0 shadow-xl rounded-lg w-1/2 mx-1.5">
      <div className="w-full h-36">
        <div className="w-full h-full mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex justify-center items-center cursor-pointer">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <div className="border-1 p-2 w-full flex justify-center items-start flex-col flex-wrap">
        <p className="text-lg font-semibold">{title}</p>
        <hr />
        <p className="text-md text-slate-600">Длительность - {length} мин</p>
        <div className="flex justify-start my-2 flex-wrap">
          {tags.map((el, key) => {
            return (
              <span
                key={key}
                className="text-slate-500 font-semibold text-sm border-2 rounded-md p-1 mr-1 mb-1"
              >
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
