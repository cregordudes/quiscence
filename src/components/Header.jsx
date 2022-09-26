import Image from "next/image";
import React from "react";
import TextBlock from "./TextBlock";

const Header = ({ isRev, src, title, heading, text, id }) => {
  return (
    <div class="flex flex-col mb-8 animated fadeIn sm:flex-row justify-around">
      {isRev ? (
        <>
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:mr-16">
            <img class="rounded-lg shadow-xl" src={src} alt="" />
          </div>
          <TextBlock title={title} heading={heading} text={text} id={id} />
        </>
      ) : (
        <>
          <TextBlock title={title} heading={heading} text={text} id={id} />
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last sm:ml-16">
            <img class="rounded-lg shadow-xl" src={src} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
