import Logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-[#001931] text-primary-content p-8">
        <aside>
          <NavLink
            to={"/"}
            className="flex gap-2 justify-center items-center text-xl font-bold text-white"
          >
            <img className="w-12" src={Logo} alt="" /> AppHub
          </NavLink>

          <p className="font-semibold">
            A8-AppHub Ltd.
            <br />
            Providing reliable tech since 2022
          </p>
          <p> © {new Date().getFullYear()} Rayhan Khan- All rights reserved</p>
        </aside>

        {/* Horizontal line before nav */}
        <div className="w-full border-t border-gray-600 "></div>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink className="text-2xl transition-transform duration-300 hover:text-sky-500 hover:scale-110">
              <FaXTwitter />
            </NavLink>

            <NavLink className="text-2xl transition-transform duration-300 hover:text-blue-700 hover:scale-110">
              <FaLinkedin />
            </NavLink>

            <NavLink className="text-2xl transition-transform duration-300 hover:text-blue-600 hover:scale-110">
              <FaFacebook />
            </NavLink>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
