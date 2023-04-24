import React, { useEffect, useState } from "react";
import ProfileInfo from "../src/components/ProfileInfo";
import ProfilePresentation from "../src/components/ProfilePresentation";
import Recommendations from "../src/components/Recommendations";
import { UserAuth } from "../src/context/AuthContext";
import { db } from "../src/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Loading from "../src/components/Loading";
import { UserPhoto } from "../src/context/PhotoContext";
import { useRouter } from "next/router";
import { Construction, ConstructionOutlined } from "@mui/icons-material";

export default function Account() {
  const { user, logout } = UserAuth();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [update, setUpdate] = useState({});
  const [img, setImg] = UserPhoto();

  const router = useRouter();

  const fetchData = async () => {
    try {
      const docRef = doc(db, "users", `${user.uid}`);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());

      setIsLoaded(true);

      if (data.length < 1) {
        // throw new Error("data.lenght < 1");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    fetchData();
  }, [user?.uid, data]);

  // setImg(data.img);
  // console.log(img);

  return (
    <div className="w-full flex flex-row justify-between">
      {isLoaded ? (
        <>
          <ProfilePresentation user={user} data={data} />

          <ProfileInfo data={data} user={user} />

          <Recommendations data={data} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
