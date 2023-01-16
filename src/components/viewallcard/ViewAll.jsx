import React from "react";

const ViewAll = () => {
  return (
    <div>
      <div className=" bg-[url('https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1000')] h-96 bg-no-repeat w-[100%] rounded-md flex my-12 items-center">
        <div className="my-auto p-4 ml-8    ">
          <span className="text-white ">SPAALON</span>
          <h1 className="text-2xl text-white font-bold ">
            More than 3000 Spas & Salons
          </h1>
          <p className="text-md text-white font-bold ">
            Book an appointment now within seconds
          </p>
          <button className="bg-orange-500 rounded text-white my-2 py-1 px-4">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
