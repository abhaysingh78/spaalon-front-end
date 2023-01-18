import React, { useState } from "react";
import "./details.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const CalenderComponent = () => {
  const [time, setTime] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (time) => {
    setTime(time);
  };
  const [value, onChange] = useState(new Date());
  return (
    <div class="parent md:mx-48 mb-8">
      <div class="item-image">
        {" "}
        <h5 className="uppercase text-orange-600 p-1  underline underline-offset-8">
          Information
        </h5>
        <p className="text-black my-8">Salon Has All Amenities</p>
        <h4 className="text-black text-center  text-2xl mb-4 ">Our Services</h4>
        <div className="flex mt-8 space-x-[12rem]">
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
        <div>
          <div className="my-4 p-2">
            <h5 className="text-md font-semibold  mb-4">Hair Cut </h5>
            <div className="flex space-x-[26rem]">
              <p className="text-black text-md">
                Men's HairCut <span className="text-orange-600 ml-2">Men</span>{" "}
              </p>
              <div>
                <span className="mr-2 font-semibold">0.00 </span>
                <button className="bg-orange-600 text-white py-[2px] px-8 rounded ">
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-16 bg-[#F9F9F9] p-4">
          <h1 className="text-2xl text-center mb-8 font-semibold">
            How to locate us
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-black ">
                Gali No 3-Shantinagar Colony,Noida-201301
              </p>
              <p className="my-4 text-black ">Follow Us</p>
            </div>
            <div>
              <h4 className="text-black font-semibold">Opening Time</h4>
              <p className="text-black">Today: 09:00 - 22:00 |</p>
            </div>
            <div>
              <h4 className="text-black font-semibold">Services</h4>
              <p className="text-black tracking-wide">
                Credit Cards Mastercard, Visa, Amex Other WIFI ,Parking ,TV
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="item last outline-dotted outline-1 outline-offset-1">
        {" "}
        <div className="bg-[#F8F8F8] py-4">
          <h1 className="text-center text-2xl  my-2 p-1">
            Book An Appointment
          </h1>{" "}
        </div>
        <Calendar className="w-full  h-96" onChange={onChange} value={value} />
        <div className="my-4 mx-2">
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <TimePicker
                label="Select Booking Slot"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <div>
            {" "}
            <p className="text-black drop-shadow-md p-4">
              No slot is available for selected day. Please check for another
              day.
            </p>
          </div>
          <div>
            <p className="text-black px-2 mb-2">special Note</p>
            <input
              className="px-2 py-1 w-full rounded mb-4 border-2"
              placeholder="Note to Salon"
              type="text"
            />
            <button className="text-center bg-gray-500 w-full text-white p-2 rounded ">
              Add to Cart
            </button>
            <p className="text-xs text-black text-center mt-2 p-1">
              No money charged on this step
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderComponent;
{
  /* <div className="flex flex-row space-x-10 md:mx-48  ">
        <div className="basis-1/2">
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
        <div className="basis-1/4">
          <div className="">
            {" "}
            <h1 className="text-center text-2xl">Book An Appointment</h1>{" "}
            <Calendar onChange={onChange} value={value} />{" "}
          </div>{" "}
        </div>
      </div> */
}
