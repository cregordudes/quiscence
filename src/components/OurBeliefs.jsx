import React from "react";
import BeliefCard from "./BeliefCard";

const OurBeliefs = () => {
  const beliefs = [
    {
      title: "Heart title and text",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      src: "/static/heart.png",
    },
    {
      title: "Trophy title and text",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      src: "/static/trophy.png",
    },
    {
      title: "Bulb title and text",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      src: "/static/idea.png",
    },
  ];

  return (
    <div>
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12 py-4 shadow-xl border-1 rounded-xl">
        <h1 className="font-bold text-xl p-4 text-center">
          Нами движут 3 ключевые вещи
        </h1>
        <div className="flex flex-row justify-between flex-wrap">
          {beliefs.map((el, idx) => {
            console.log(el.src);
            const listColor =
              idx == 0 ? "#E68BFF" : idx == 1 ? "#6BD9A9" : "#4ba4c8";
            return (
              <BeliefCard
                title={el.title}
                text={el.text}
                src={el.src}
                color={listColor}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurBeliefs;
