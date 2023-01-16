import React from "react";
import Header from "../../components/header/Header";

const Category = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F4F4F4]">
        <div className="md:ml-48 p-4 md:flex md:space-x-[40rem]">
          <div className="invisible md:visible">
            <p className="text-sm ">Home - Categories</p>
            <h4 className="mt-1 font-bold text-md">Jangpura New Delhi Delhi</h4>
          </div>
          <div className="">
            <input
              type="text"
              className="   p-2 m-1 w-[15rem]  rounded "
              placeholder="search"
            />
            <button className="bg-orange-600 p-2 text-white rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
