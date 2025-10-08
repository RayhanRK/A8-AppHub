import React from 'react';

const LoadingSpinner = ({ count = 8 }) => {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {Array.from({ length: count }).map((_, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <div className="bg-gray-200 skeleton h-80 w-full "></div>
          <div className="bg-gray-200 skeleton h-12 flex justify-between items-center"></div>
        </div>
      ))}

    </div>
    );
};

export default LoadingSpinner;