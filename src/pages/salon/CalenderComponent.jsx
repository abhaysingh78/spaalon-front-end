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
import { addToCart, removeToCart } from "../../redux/action/Action";
import { useDispatch, useSelector } from "react-redux";

const CalenderComponent = ({ address, shopservice }) => {
  const [time, setTime] = React.useState(dayjs("2014-08-18T21:11:54"));

  const [women, setWomen] = useState(false);
  const [men, setMen] = useState(true);

  const [isAddButtonClick, setIsAddButtonClick] = useState(false);

  const [itemAdd, setItemAdd] = useState(null);

  const menData = [];
  const womenData = [];

  const dispatch = useDispatch();

  shopservice.map((service) => {
    if (service.category === "Men") {
      menData.push(service);
    } else if (service.category === "Women") {
      womenData.push(service);
    }
  });

  console.log(menData, "menData");
  console.log(womenData, "WomenData");

  const handleChange = (time) => {
    setTime(time);
  };

  console.log(shopservice, "props service");

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
        <div className="my-8 flex space-x-[35rem]">
          <div>
            <input type="text" className="p-2  bg-[#EEEEEE] w-64 rounded" />
            <button className="p-2 rounded-r-sm text-white bg-orange-600">
              Search
            </button>
          </div>
          <div className="">
            <button
              onClick={() => {
                setWomen(false);
                setMen(true);
              }}
              className={`py-2 px-2  rounded-sm border text-sm  ${
                men ? "bg-orange-600 text-white" : "text-black"
              }  `}
            >
              Men
            </button>
            <button
              onClick={() => {
                setMen(false);
                setWomen(true);
              }}
              className={`py-2 px-2  rounded-sm border text-sm  ${
                women ? "bg-orange-600 text-white" : "text-black"
              }  `}
            >
              Women
            </button>
            {/* <button className="py-2 px-2 rounded-sm border text-sm ">
              Children
            </button> */}
          </div>
        </div>{" "}
        {men &&
          menData.map((service) => {
            return (
              <div key={service.id}>
                <div className="my-8 p-2">
                  <h5 className="text-md font-semibold  mb-4">
                    {service.subcat}
                  </h5>
                  <div className="flex space-x-[35rem]">
                    <p className="text-black text-md">
                      {service.name}
                      <span className="text-orange-600 ml-2">{`${service.category}`}</span>{" "}
                    </p>
                    <div className="">
                      <span className="mr-8 font-semibold line-through  text-orange-600">
                        <span className="text-black">{service.sale_price}</span>
                      </span>
                      <span className=" font-semibold mr-4">
                        {" "}
                        {service.sale_price - service.discount}{" "}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(service))}
                        className="bg-orange-600 text-white py-[2px] px-4 rounded "
                      >
                        {` Add +`}
                      </button>
                      {isAddButtonClick && (
                        <div className="my-4 p-2 flex mr-16">
                          <select className="p-2 mr-2" name="cars" id="cars">
                            <option value="volvo">alkfa</option>
                            <option value="saab">ajladjl</option>
                          </select>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                              <DateTimePicker
                                label="Select Date and Time"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </div>
                      )}
                    </div>

                    {}
                  </div>
                </div>
              </div>
            );
          })}
        {women &&
          womenData.map((service) => {
            return (
              <div>
                <div className="my-8 p-2">
                  <h5 className="text-md font-semibold  mb-4">
                    {service.subcat}
                  </h5>
                  <div className="flex space-x-[35rem]">
                    <p className="text-black text-md">
                      {service.name}
                      <span className="text-orange-600 ml-2">{`${service.category}`}</span>{" "}
                    </p>
                    <div className="">
                      <span className="mr-8 font-semibold line-through  text-orange-600">
                        <span className="text-black">{service.sale_price}</span>
                      </span>
                      <span className=" font-semibold mr-4">
                        {" "}
                        {service.sale_price - service.discount}{" "}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(service))}
                        className="bg-orange-600 text-white py-[2px] px-4 rounded "
                      >
                        Add +
                      </button>
                      {isAddButtonClick && (
                        <div className="my-4 p-2 flex mr-16">
                          <select className="p-2 mr-2" name="cars" id="cars">
                            <option value="volvo">test</option>
                            <option value="saab">test</option>
                          </select>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                              <DateTimePicker
                                label="Select Date and Time"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="my-16 bg-[#F9F9F9] p-4">
          <h1 className="text-2xl text-center mb-8 font-semibold">
            How to locate us
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-black ">
                {address &&
                  `${address.street_address_1} ${address.street_address_2}`}
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
    </div>
  );
};

export default CalenderComponent;
