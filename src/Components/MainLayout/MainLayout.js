import { Outlet } from "react-router-dom";
import { AppProvider } from "../Provider/AppProvider";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const MainLayout = () => {
  return (
    <AppProvider>
      <Header />
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
    </AppProvider>
  );
};

export default MainLayout;
