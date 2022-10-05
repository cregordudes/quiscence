import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import { AuthContextProvider, UserAuth } from "../src/context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
