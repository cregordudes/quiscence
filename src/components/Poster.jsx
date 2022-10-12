import React from "react";

const Poster = ({ src, alt }) => {
  return (
    <div className="w-full">
      <img className="h-auto w-full" src={`${src}`} alt={`${alt}`} />
    </div>
  );
};

export default Poster;
