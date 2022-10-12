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
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        }
        src={doctorImg}
      />
      <Infograph />
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <TitleHeader
          title="Люди для нас - главное"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        />
      </div>
      <OurBeliefs />
    </section>
  );
};

export default About;
