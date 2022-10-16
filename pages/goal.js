import Image from "next/image";
import React from "react";
import Poster from "../src/components/Poster";
import TitleHeader from "../src/components/TitleHeader";
import UserCard from "../src/components/UserCard";
import womanText from "/public/womanText.jpg";

const OurGoal = () => {
  const people = [
    {
      name: "Анастасия",
      problems: ["Сильная тревожность", "Трудности в жизни"],
      tags: ["Цифровое лечение", "Терапевт"],
      src: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000",
    },
    {
      name: "Ион",
      problems: ["Тревожность", "Сильная депрессия"],
      tags: ["Цифровое лечение", "Терапевт", "Медикаменты"],
      src: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
    },
    {
      name: "Мария",
      problems: ["Безразличие", "Усталость"],
      tags: ["Цифровое лечение"],
      src: "https://photof8.com/wp-content/uploads/2017/01/WSS500.jpg",
    },
    {
      name: "Евгений",
      problems: ["Бессоница", "Легкая Депрессия"],
      tags: ["Цифровое лечение"],
      src: "https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/157693/talent_tabs_section-9a2016252f5e887b11b53080a29d9013.jpg",
    },
  ];
  return (
    <section class="pb-4 pt-10 bg-white">
      <TitleHeader
        text={
          "Наша модель работы адаптируется под нужды, пожелания и бюджет наших клиентов, чтобы рекоммендовать самое лучшее и эффективное решение"
        }
        title={"Мы понимаем и адаптируемся под наших клиентов"}
      />
      <div className="flex flex-row justify-evenly w-full flex-wrap">
        {people.map((el, idx) => {
          return (
            <UserCard
              name={el.name}
              problems={el.problems}
              tags={el.tags}
              src={el.src}
              key={idx}
            />
          );
        })}
      </div>

      <Poster src="/static/womanText.jpg" alt="woman" />

      <div className="flex justify-center">
        <div className="w-1/2 border-y-2 rounded-md shadow bg-white-50 mt-5 p-4">
          <TitleHeader
            title={"Что дальше?"}
            text={
              "Узнайте больше о нас или пройдите тест, чтобы начать улучшать свое ментальное здоровье!"
            }
          />

          <div className="flex flex-row justify-evenly">
            <button
              className="py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
          hover:border-0 bg-violet-600 hover:bg-violet-600  border-violet-800 hover:border-transparent rounded"
            >
              Зарегистрироваться &#8250;
            </button>
            <button
              className="py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-violet-800 ease-linear transition-all duration-150
        hover:border-0 bg-slate-200 hover:bg-slate-200  border-slate-400 hover:border-transparent rounded"
            >
              Узнать больше &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
