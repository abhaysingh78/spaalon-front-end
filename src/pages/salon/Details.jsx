import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
const Details = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="my-4">
      <div class="h-96 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="flex md:space-x-[50rem]  p-2 m-12">
        <div>
          <h1 className="text-4xl font-bold">Alankar Salon</h1>
          <p className="text-black">
            Gali No 3-Shantinagar Colony,Noida - <a href="">Get directions</a>{" "}
          </p>
        </div>
        <div className="p-2  drop-shadow-2xl">
          <button className="p-2 drop-shadow-2xl ">View Photos</button>
        </div>
      </div>

      {/* Information  */}

      <div className="grid grid-cols-2 space-x-10 md:mx-48">
        <div className="">
          <h5 className="uppercase text-orange-600 p-1  underline underline-offset-8">
            Information
          </h5>
          <p className="text-black my-8">Salon Has All Amenities</p>
          <h4 className="text-black text-center font-semibold text-xl">
            Our Services
          </h4>
          <div className="flex mt-4 space-x-16">
            <div>
              <input type="text" className="p-2  bg-[#EEEEEE] w-64 rounded" />
              <button className="p-2 rounded-r-sm text-white bg-orange-600">
                Search
              </button>
            </div>
            <div>
              <button className="py-2 px-2  rounded-sm text-white bg-orange-600 border text-sm  ">
                Men
              </button>
              <button className="py-2 px-2  rounded-sm border text-sm ">
                Women
              </button>
              <button className="py-2 px-2 rounded-sm border text-sm ">
                Children
              </button>
            </div>
          </div>{" "}
          <div className="my-16 bg-[#F9F9F9] p-4">
            <h1 className="text-2xl text-center mb-8">How to locate us</h1>
            <div className="flex">
              <div>
                <h4>Address</h4>
                <p className="text-black">
                  Gali No 3-Shantinagar Colony,Noida-201301
                </p>
              </div>
              <div>
                <h4>Opening Time</h4>
                <p>Today: 09:00 - 22:00 |</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>Credit Cards Mastercard</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default Details;
