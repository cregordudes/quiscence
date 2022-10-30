import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import { AuthContextProvider, UserAuth } from "../src/context/AuthContext";
import { PhotoContextProvider } from "../src/context/PhotoContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
