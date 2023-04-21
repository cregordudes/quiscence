import { useEffect } from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import { AuthContextProvider } from "../src/context/AuthContext";
import { PhotoContextProvider } from "../src/context/PhotoContext";
import emailjs from "@emailjs/browser";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      if (localStorage.getItem("lastLoginTime") !== null) {
         const lastLoginTime = localStorage.getItem("lastLoginTime");
         const currentTime = new Date().getTime();
         const timeDiff = currentTime - lastLoginTime;

         if (timeDiff > 24 * 60 * 60 * 1000) {
            console.log("sent notification");
            emailjs
               .send(
                  process.env.NEXT_PUBLIC_SERVICE_ID,
                  `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                  {
                     user_email: "Quiscense team",
                     message: `Dear User,\nwe noticed that you haven't logged in for quite some time. As a team, we care deeply about your mental health and wellbeing, 
                     and we wanted to reach out to remind you that we are here for you whenever you need us.
                     \nThank you for being a part of the Quiscence community.
                     \nBest,
                     \nThe Quiscence Team`,
                  },
                  `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
               )
               .then(
                  function (response) {
                     console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                     console.log("FAILED...", error);
                  }
               );
            localStorage.setItem("lastLoginTime", new Date().getTime());
            console.log(localStorage.getItem("lastLoginTime"));
         }
      }
   }, []);

   return (
      <>
         <AuthContextProvider>
            <PhotoContextProvider>
               <Navbar />
               <Component {...pageProps} />
               <Footer />
            </PhotoContextProvider>
         </AuthContextProvider>
      </>
   );
}

export default MyApp;
