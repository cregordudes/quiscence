import Image from "next/image";
import React from "react";
import graph from "/public/graph.jpg";

const Infograph = () => {
  return (
    <div class="p-4 flex flex-col mb-4 animated fadeIn justify-around bg-gradient-to-r from-gradientTo to-gradientFrom">
      <h1 className="font-bold text-2xl text-center text-white">
        Для помощи людям, недостаточно просто создать платформу.
      </h1>
      <div class="flex flex-row justify-evenly">
        <div className="text-white p-4 m-2 w-1/2">
          <p className="text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            her
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
