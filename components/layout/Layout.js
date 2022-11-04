import Navbar from "./Navbar";
import Footer from "./Footer";
import Navigation from "../sections/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
