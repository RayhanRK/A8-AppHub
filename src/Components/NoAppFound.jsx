import Lottie from "lottie-react";
import emptyLottie from "../Utility/emptyLottie.json";
import { Link } from "react-router";

const NoAppFound = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center">
        <Lottie animationData={emptyLottie} loop={true} className="w-80 h-80" />
      </div>

      <div className="flex flex-col gap-8 justify-center">
        <h2 className="text-center text-4xl text-gray-600 font-bold tracking-wider">
          Oops! No Apps Found in the Store.
        </h2>

        <Link
          to="/apps"
          className="showAll"
          onClick={() => setSearch(search(""))}
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default NoAppFound;
