import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import Footer from "../Components/Footer";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header part */}
      <div className="lg:px-8 py-2 md:px-4 px-2">
        <Navbar />
      </div>

      {/* main part */}
      <main className="bg-[#f2f2f2] flex-1">
        <div className="flex flex-col my-24 w-11/12 mx-auto lg:px-8 md:px-4 px-2 gap-8">
          <div className="flex justify-center">
            <img src={errorImg} alt="404 error image" className="w-80" />
          </div>

              <div className="text-center  text-gray-700 ">
                <h1 className="font-bold text-2xl mb-2">
                404: Page not found.  
                </h1>
                <p className=" md:text-lg">
                It may have been deleted or removed.You can go back home or check out our Latest apps.
                </p>
              </div>
              
          <div className="flex justify-center md:flex-row flex-col items-center gap-4">
            <Link to="/" className="showAll">
              Go Home
            </Link>
            <Link to="/apps" className="showAll">
              Show All Apps
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
