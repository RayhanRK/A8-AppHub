import Lottie from "lottie-react";
import emptyLottie from "../Utility/emptyLottie.json";
import { Link } from "react-router";

const NoAppFound = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex justify-center">
        <Lottie animationData={emptyLottie}
          loop={true} className="md:w-80 h-80 sm:w-50 mt-[-20px]" />
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-center tracking-wider md:text-2xl text-xl text-gray-600 font-bold ">
          Oops! No Apps Found in the Store.
        </h2>

        <div className="flex justify-center">
          <Link
            to="/apps"
            className="showAll"
            onClick={() => setSearch(search(""))}
          >
            Show All Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoAppFound;
