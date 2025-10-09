import { Link } from "react-router";
import appErrorImg from "../assets/App-Error.png" 

const AppsError = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col my-25 px-2 md:px-4 lg:px-8 gap-8">
      <div className="flex justify-center">
        <img src={appErrorImg} className="w-85" />
      </div>

   
      <div className="text-center text-xl text-gray-700  md:text-2xl ">
        <h1 className="font-semibold">
          Oops! App is Not found. 
        </h1>
        <p className="text-lg">
          The App you are looking doesn't exist or removed. You can explore latest apps from Apps page.
        </p>
      </div>

      <div className="flex justify-center">
        <Link to='/apps' className="showAll">
          Show All Apps
        </Link>

      </div>
    </div>
  );
}; 

export default AppsError;
