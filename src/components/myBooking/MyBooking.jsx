import { React, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import "./mybooking.css";
import axios from "axios";

const MyBooking = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const dataPerRow = 2;
  const [next, setNext] = useState(dataPerRow);

  const [orderHistory, setOrderHistory] = useState([]);

  const tableData = [];

  const handleMoreData = () => {
    setNext(next + dataPerRow);
  };

  useEffect(() => {
    const fetchApi = async () => {
      let result = await axios({
        method: "post",
        url: "https://spaalon.harij.in/api/order/OrderHistory",
        data: {
          user_id: 1,
        },
      });

      setOrderHistory(result.data.order);
      console.log(result);
    };
    fetchApi();
  }, []);

  console.log(orderHistory);

  return (
    <>
      <Header />
      {/* <div className='block sm:flex mx-[15%] my-[5%]'> */}
      <div class="container">
        <div className="account">
          <div className="account-menu">
            <div className="custom-cardContent">
              <div className="card-heading">MY ACCOUNTS</div>
              <ul>
                <li>My Account</li>
                <li>Booking-History</li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="account-content">
              <div class="table-heading">Booking history</div>
              <table class="tablet able-bordered custom-table">
                <thead>
                  <tr>
                    <th scope="col">Booking Id</th>
                    <th scope="col">Booking data</th>
                    <th scope="col">Booking slot</th>
                    <th scope="col">Created date</th>
                    <th scope="col">Shop name</th>
                    <th scope="col">OTP</th>
                    <th scope="col">State</th>
                    <th scope="col">Status</th>
                    <th scope="col">Net amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory?.slice(0, next)?.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.id}</td>
                        <td>{data.id}</td>
                        <td>{new Date(data.created).toLocaleDateString()}</td>
                        <td>{data.id}</td>
                        <td>{data.id}</td>
                        <td>{data.id}</td>
                        <td>{data.order_status}</td>
                        <td>{data.id}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {next < tableData?.length && (
                <div class="load-more">
                  <button onClick={handleMoreData} className="btn_1">
                    Load more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      <Footer />
    </>
  );
};

export default MyBooking;
