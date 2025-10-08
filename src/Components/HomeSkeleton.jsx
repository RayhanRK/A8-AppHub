
const HomeSkeleton = () => {
    return (
    <div className="py-16 md:py-20 lg:py-24 ">
      <div className="lg:space-y-6 space-y-4">
        <div className="bg-gray-200 w-11/12 mx-auto md:h-60 lg:w-8/12 h-64 md:w-10/12 skeleton"></div>
      </div>
      <div className="flex items-center justify-center gap-4 lg:mt-12 mt-8">
        <div className="bg-gray-200 w-24 h-10 skeleton "></div>
        <div className="bg-gray-200 w-24 h-10 skeleton "></div>
      </div>
      <div className="bg-gray-200  w-11/12 skeleton h-96 mx-auto lg:w-8/12 mt-12 pt-12"></div>
    </div>
    );
};

export default HomeSkeleton;