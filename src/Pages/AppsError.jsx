import { Link } from "react-router";
import appErrorImg from "../assets/App-Error.png" 

const AppsError = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col my-25 px-2 md:px-4 lg:px-8 gap-8">
      <div className="flex justify-center">
        <img src={appErrorImg} className="w-85" />
      </div>

      <h2 className="text-center text-xl text-gray-600 font-semibold md:text-2xl ">
        Oops! Looks like this page has disappeared for some reason. 
        Don’t worry— you can return to the All Apps section and explore from there.
      </h2>

      <div className="flex justify-center">
        <Link to='/apps' className="showAll">
          Show All Apps
        </Link>

      </div>
    </div>
  );
}; 

export default AppsError;
