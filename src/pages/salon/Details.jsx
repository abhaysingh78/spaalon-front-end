import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CalenderComponent from "./CalenderComponent";

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
      <CalenderComponent />
      {/* <div className="flex ">
        <div></div>
      </div> */}

    
    </div>
  );
};

export default Details;
