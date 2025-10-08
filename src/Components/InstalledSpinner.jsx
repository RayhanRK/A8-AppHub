import React from 'react';

const InstalledSpinner = () => {
    return (
    <div className="w-11/12 mx-auto md:space-y-12 lg:space-y-16 space-y-8 py-16 lg:px-8 md:px-4 px-2">
     
      <div className="bg-gray-200 space-y-4 skeleton w-full h-20 "></div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <div className="bg-gray-200 skeleton h-12 w-64 "></div>
        <div className="bg-gray-200 skeleton h-12 w-64"></div>
      </div>
      
    </div>
    );
};

export default InstalledSpinner;