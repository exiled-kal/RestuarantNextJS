import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
