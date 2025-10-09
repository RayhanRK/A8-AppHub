import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:px-8 py-2 md:px-4 px-2">
        <Navbar />
      </header>
              {/* bg-[#E5E7EB] */}
      <div className="bg-gray-100 flex-1">
          <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
