import React from "react";

const ViewAll = () => {
  return (
    <div className="mx-4 md:mx-48 my-16 ">
      <div className=" relative bg-cover filter-brightness-[20%] bg-gray-800 before:absolute before:opacity-10  before:  bg-[url('https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1000')] h-96 bg-no-repeat w-[100%] rounded-md  flex my-12 items-center bg-opacity-">
        <div className="relative  my-auto p-4 ml-8  rounded  ">
          <span className="text-white ">SPAALON</span>
          <h1 className="text-3xl text-white font-bold mt-2">
            More than 3000 Spas & Salons
          </h1>
          <p className="text-xl text-white font-bold ">
            Book an appointment now within seconds
          </p>
          <button className="bg-orange-600 rounded font-semibold text-white mt-4 py-1 px-4">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
