import Lottie from "lottie-react";
import emptyLottie from "../Utility/emptyLottie.json";

const NotInstalled = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        animationData={emptyLottie}
        loop={true}
        className="w-120 h-120"
      />
    </div>
  );
};

export default NotInstalled;
