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

export default function Account() {
  const { user, logout } = UserAuth();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [img, setImg] = UserPhoto();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", `${user.uid}`);
        const docSnap = await getDoc(docRef);
        setData(docSnap.data());

        if (data.length < 1) {
          throw new Error("Please update your Data");
        }

        setIsLoaded(true);
      } catch (e) {
        // router.push("/updateInfo");
        // router.reload(window.location.pathname);
      }
    };
    fetchData();
    console.log(data);
  }, [user.uid]);

  setImg(data.img);
  console.log(img);

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
