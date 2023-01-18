import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";

const Trending = ({ heading, dec, align, bg, style }) => {
  const [trending, setTrending] = useState([]);

  const fetchApi = async () => {
    const res = await axios.get(
      "https://spaalon.harij.in/api/shop/TrendingService"
    );

    setTrending(res.data.trendingservice);
    console.log(res.data.trendingservice, "trending");
  };

  useEffect(() => {
    fetchApi();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`xl:px-44 bg-${bg}-100 py-8 text-${align ? align : "center"}`}
    >
      <div className="my-8 px-12" style={style && style}>
        <hr className="my-6 w-20 border-2 border-orange-700 bg-orange-700" />
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <p className=" text-xl text-gray-700 font-semibold">{dec}</p>
      </div>

      <Slider {...settings}>
        <div className="flex px-4 flex-col outline-none rounded-xl ">
          <div className="bg-white flex p-4 flex-col outline-none   shadow-sm   rounded-lg">
            <div className="w-full flex items-center justify-center ">
              <div className="flex flex-col items-center rounded-full">
                <img
                  src="https://spaalon.com/images/serviceImg.png"
                  alt=""
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "contain",
                  }}
                  className="rounded-full"
                />

                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-black">
                  MakeUp33
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex px-4 flex-col outline-none rounded-xl  ">
          <div className="bg-white flex p-4 flex-col outline-none  shadow-sm  rounded-lg">
            <div className="w-full flex items-center justify-center ">
              <div className="flex flex-col items-center">
                <img
                  src="https://spaalon.com/images/serviceImg.png"
                  alt=""
                  className="rounded-full w-28"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "contain",
                  }}
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-black">
                  Hair Cut
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="flex px-4 flex-col outline-none rounded-xl ">
          <div className="bg-white flex p-4 flex-col outline-none  shadow-sm  rounded-lg">
            <div className="w-full flex items-center justify-center ">
              <div className="flex flex-col items-center">
                <img
                  src="https://spaalon.com/images/serviceImg.png"
                  alt=""
                  className="rounded-full w-28"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "contain",
                  }}
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-black">
                  Hair Cut
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="flex px-4 flex-col outline-none rounded-xl ">
          <div className="bg-white flex p-4 flex-col outline-none  shadow-sm   rounded-lg">
            <div className="w-full flex items-center justify-center ">
              <div className="flex flex-col items-center">
                <img
                  src="https://spaalon.com/images/serviceImg.png"
                  alt=""
                  className="rounded-full w-28"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "contain",
                  }}
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-black">
                  Hair Cut
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="flex px-4 flex-col  outline-none rounded-xl ">
          <div className="bg-white flex p-4 flex-col outline-none  shadow-sm  rounded-lg">
            <div className="w-full flex items-center justify-center ">
              <div className="flex flex-col items-center">
                <img
                  src="https://spaalon.com/images/serviceImg.png"
                  alt=""
                  className="rounded-full w-28"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "contain",
                  }}
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-black">
                  Hair Cut
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Trending;
