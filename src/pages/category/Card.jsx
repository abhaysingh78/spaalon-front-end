import React from "react";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 md:mx-48">
        <div className="mx-4 my-4 md:my-8 ">
          <div className="">
            <img
              className=" rounded-md w-full md:w-[22rem] hover:scale-90 transition duration-300 ease-in-out"
              src="https://api.spaalon.com/media/shop_image/3_Po47aIS.jpg"
              alt=""
            />
          </div>
          <div className="flex space-x-48 md:space-x-0 mt-2">
            <div>
              {" "}
              <h2>Test Salon-2</h2>
              <button className="bg-orange-600 md:px-2 py-0 mt-1 rounded text-white ">
                Book Now
              </button>
            </div>
            <div className="p-2 m-2 ">
              <span className="md:ml-32">Superb </span>
              <p className="md:ml-32">0 reviews</p>
            </div>
          </div>
        </div>{" "}
        <div className="mx-4 my-8 ">
          <div className="">
            <img
              className=" rounded-md w-full md:w-[22rem] hover:scale-90 transition duration-300 ease-in-out"
              src="https://api.spaalon.com/media/shop_image/3_Po47aIS.jpg"
              alt=""
            />
          </div>
          <div className="flex space-x-64 md:space-x-0 mt-2">
            <div>
              {" "}
              <h2>Test Salon-2</h2>
              <button className="bg-orange-600 md:px-2 py-0 mt-1 rounded text-white ">
                Book Now
              </button>
            </div>
            <div className="p-2 m-2">
              <span className="md:ml-32">Superb </span>
              <p className="md:ml-32">0 reviews</p>
            </div>
          </div>
        </div>{" "}
        <div className="mx-4 my-8 ">
          <div className="">
            <img
              className=" rounded-md w-full md:w-[22rem] hover:scale-90 transition duration-300 ease-in-out"
              src="https://api.spaalon.com/media/shop_image/3_Po47aIS.jpg"
              alt=""
            />
          </div>
          <div className="flex space-x-64 md:space-x-0 mt-2">
            <div>
              {" "}
              <h2>Test Salon-2</h2>
              <button className="bg-orange-600 md:px-2 py-0 mt-1 rounded text-white ">
                Book Now
              </button>
            </div>
            <div className="p-2 m-2">
              <span className="md:ml-32">Superb </span>
              <p className="md:ml-32">0 reviews</p>
            </div>
          </div>
        </div>
        <div className="mx-4 my-8 ">
          <div className="">
            <img
              className=" rounded-md w-full md:w-[22rem] hover:scale-90 transition duration-300 ease-in-out"
              src="https://api.spaalon.com/media/shop_image/3_Po47aIS.jpg"
              alt=""
            />
          </div>
          <div className="flex space-x-64 md:space-x-0 mt-2">
            <div>
              {" "}
              <h2>Test Salon-2</h2>
              <button className="bg-orange-600 md:px-2 py-0 mt-1 rounded text-white ">
                Book Now
              </button>
            </div>
            <div className="p-2 m-2">
              <span className="md:ml-32">Superb </span>
              <p className="md:ml-32">0 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
