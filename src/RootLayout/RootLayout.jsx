import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  const navigation = useNavigation();

  const isNavigate = Boolean(navigation.location);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:px-8 py-2 md:px-4 px-2">
        <Navbar />
      </header>
              {/* bg-[#E5E7EB] */}
      <div className="bg-gray-100 flex-1">

        { isNavigate && <p>Navigating..</p> }

          <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
