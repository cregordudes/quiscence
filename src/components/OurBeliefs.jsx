import React from "react";
import BeliefCard from "./BeliefCard";

const OurBeliefs = () => {
  const beliefs = [
    {
      title: "Любить и заботиться",
      text: "Повысить осведомленность и понимание проблем психического здоровья",
      src: "/static/heart.png",
    },
    {
      title: "Помогать и поощрать",
      text: "Предоставлять научно обоснованную информацию о лечении психических заболеваний",
      src: "/static/trophy.png",
    },
    {
      title: "Облегчать",
      text: "Создайте поддерживающее сообщество, где люди могут делиться своим опытом и предлагать поддержку друг другу",
      src: "/static/idea.png",
    },
  ];

  return (
    <div>
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12 py-4 shadow-xl border-1 rounded-xl">
        <h1 className="font-bold text-xl p-4 text-center">
          Наша цель — предоставить всесторонние и доступные ресурсы по охране
          психического здоровья людям, которые ищут поддержку и информацию. Мы
          стремимся:
        </h1>
        <div className="flex flex-row justify-between flex-wrap">
          {beliefs.map((el, idx) => {
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
