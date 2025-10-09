import logoImg from "../assets/logo.png";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)] z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <div className="animate-spin ">
          <img
            src={logoImg}
            alt="Loading Logo"
            className="w-32 h-32 animate-pulse"
          />
        </div>
        <p className="text-black text-xl font-medium tracking-wide animate-pulse">
          Loading, Wait a Moment...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
