import React from "react";

const SortButton = () => {
  return (
    <>
      <div className="md:ml-48 my-4">
        <div className="">
          <button className="py-1 mx-1 px-2 rounded-sm  bg-white ">All</button>
          <button className="py-1 px-2 mx-1 rounded-sm text-white bg-orange-600 ">
            Popular{" "}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SortButton;
