import React from "react";

const Discover = () => {
  return (
    <>
      {/* // big screen */}
      <div className="h-screen md:h-[30rem] bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex  items-center justify-center">
        <div>
          <div>
            {" "}
            <h1 className="text-3xl mb-4 md:mb-0 md:text-4xl text-center font-bold text-white tracking-wide">
              Discover & Books
            </h1>
            <h3 className="text-xl md:text-2xl text-center text-white font-semibold">
              Looking for Best Spa & Salon Near you ?
            </h3>
          </div>
          <div className="mx-4 md:mx-0 md:flex mt-4 md:bg-white md:p-1 rounded">
            <div className="rounded bg-white my-1 md:border-r-2 md:my-0 border-gray-200 flex">
              <input
                className=" px-12 rounded  w-full md:w-96 py-4 focus:outline-none placeholder:text-slate-400 "
                type="text"
                placeholder="What are you looking for..."
              />
              <div className=" mt-2 p-2 md:mt-1 opacity-40 md:p-2">
                <img
                  width={30}
                  src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png"
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="rounded flex bg-white md:flex">
              <input
                className=" py-4 px-12 rounded w-full md:w-[20rem] focus:outline-none"
                type="text"
                placeholder="Enter your location get started "
              />{" "}
              <div className="mt-2  md:mt-2 opacity-40 p-2">
                <img
                  className=""
                  width={20}
                  src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                  alt=""
                />
              </div>
            </div>
            <button className="w-full mt-2 md:mt-0 p-4 md:py-4 md:px-4 md:w-32 text-white text-md bg-orange-600 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
