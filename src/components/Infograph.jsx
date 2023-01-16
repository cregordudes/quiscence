import Image from "next/image";
import React from "react";
import graph from "/public/grathick.png";

const Infograph = () => {
  return (
    <div class="p-4 flex flex-col mb-4 animated fadeIn justify-around bg-gradient-to-r from-indigo-700 to-orange-300">
      <h1 className="font-bold text-2xl text-center text-white">
        Для помощи людям, недостаточно просто создать платформу.
      </h1>
      <div class="flex flex-row justify-evenly">
        <div className="text-white p-4 m-2 w-1/2">
          <p className="text-lg">
            Депрессия – распространенное во всем мире заболевание, от которого,
            по оценкам, страдает 3,8% населения, в том числе 5% взрослых и 5,7%
            лиц старше 60 лет. Во всем мире от депрессии страдает порядка 280
            миллионов человек. Депрессия отличается от обычных перепадов
            настроения или кратковременных эмоциональных реакций на трудные
            ситуации в повседневной жизни. Депрессия может быть серьезным
            заболеванием, особенно если она периодически повторяется и протекает
            в умеренной или тяжелой форме. В таких случаях депрессия приводит к
            большим страданиям, снижению работоспособности или школьной
            успеваемости и трудностям в семейной жизни. В самых тяжелых случаях
            депрессия может привести к самоубийству. Каждый год в мире более 700
            000 человек кончают жизнь самоубийством. Самоубийство занимает
            четвертое место среди основных причин смерти молодых людей в
            возрасте 15-29 лет.
          </p>
        </div>
        <div>
          <Image src={graph} alt="graph" width={450} height={350} />
        </div>
      </div>
    </div>
  );
};

export default Infograph;
