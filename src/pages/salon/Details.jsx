import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CalenderComponent from "./CalenderComponent";
import axios from "axios";

const Details = () => {
  const [shopAddress, setShopAddress] = useState(null);
  const [shopService, setShopService] = useState([]);
  const fetchApi = async () => {
    const res = await axios({
      method: "post",
      url: "https://spaalon.harij.in/api/shop/ShopDetail",
      data: {
        shop_id: 1,
      },
    });
    console.log(res.data, "details api");
    // console.log(res.data.shopaddress, "Address");
    setShopAddress(res.data.shopaddress);
    setShopService(res.data.shopservice);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(shopService, "shop Service ");

  const [value, onChange] = useState(new Date());
  return (
    <div className="my-4">
      <div class="h-96 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="flex md:space-x-[50rem]  p-2 m-12">
        <div>
          <h1 className="text-4xl font-bold">Salaon Name</h1>
          <p className="text-black">
            {shopAddress &&
              `${shopAddress?.street_address_1} ${shopAddress?.street_address_2}`}{" "}
            - <a href="">Get directions</a>{" "}
          </p>
        </div>
        <div className="p-2  drop-shadow-2xl">
          <button className="p-2 drop-shadow-2xl ">View Photos</button>
        </div>
      </div>

      {/* Information  */}
      <CalenderComponent address={shopAddress} shopservice={shopService} />
      {/* <div className="flex ">
        <div></div>
      </div> */}
    </div>
  );
};

export default Details;
