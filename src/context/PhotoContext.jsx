import { createContext, useContext, useState } from "react";
import defaultImg from "/public/static/avatar.png";

const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const photosrc = useState(defaultImg);
  return (
    <PhotoContext.Provider value={photosrc}>{children}</PhotoContext.Provider>
  );
};

export const UserPhoto = () => {
  return useContext(PhotoContext);
};
