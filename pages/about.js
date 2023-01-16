import Image from "next/image";
import React from "react";
import Infograph from "../src/components/Infograph";
import TitleHeader from "../src/components/TitleHeader";
import doctorImg from "/public/doctor.webp";

import OurMission from "../src/components/OurMission";
import OurBeliefs from "../src/components/OurBeliefs";

const About = () => {
  return (
    <section class="pb-4 pt-10 bg-white">
      <OurMission
        title={
          "Наша миссия - помочь людям улучшить свое психологическое здоровье"
        }
        text={
          "Мы — преданная команда профессионалов в области психического здоровья и защитников интересов, которые увлечены улучшением жизни тех, кто борется с проблемами психического здоровья. Мы понимаем, что поиск помощи может быть трудным и утомительным, но мы здесь, чтобы сделать этот процесс максимально простым и доступным."
        }
        src={doctorImg}
      />
      <Infograph />
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <TitleHeader
          title="Люди для нас - главное"
          text="Наша миссия состоит в том, чтобы обеспечить безопасную и благоприятную среду, в которой люди могут узнать о своем психическом здоровье, найти эффективные методы лечения и пообщаться с другими людьми, которые понимают, через что они проходят. Мы считаем, что, предоставляя точную информацию и разнообразные ресурсы, мы можем дать людям возможность взять под контроль свое психическое благополучие и жить полноценной жизнью."
        />
      </div>
      <OurBeliefs />
    </section>
  );
};

export default About;
