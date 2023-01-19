import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const Popular = ({ heading, dec, align, bg, style }) => {
  const [popular, setPopular] = useState([]);

  const fetchApi = async () => {
    let result = await fetch("https://spaalon.harij.in/api/shop/PopularShop");
    result = await result.json();
    setPopular(result.popularShop);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className={`xl:px-44 bg-${bg}-100 py-8 text-${align ? align : "center"}`}
    >
      <div className='my-4 px-12' style={style && style}>
        <hr className='my-6 w-20 border-2 border-orange-700 bg-orange-700' />
        <h2 className='text-2xl font-semibold'>{heading}</h2>
        <p className=' text-xl text-gray-700 font-semibold'>{dec}</p>
      </div>
      <Carousel responsive={responsive}>
        {popular &&
          popular?.map((item, i) => (
            <div
              key={i}
              class='flex px-4 mr-8 flex-col my-2 outline-none rounded-xl '
            >
              <div className='bg-white  flex py-4 flex-col outline-none  rounded-lg'>
                <div className='w-full  flex items-center justify-center '>
                  <Link to='/salon/details/1'>
                    <div className='flex flex-col '>
                      <img
                        src={item.image_url}
                        alt=''
                        className='hover:scale-105 transition-all w-64  ease-in-out rounded'
                      />
                      <p className='mt-4 text-xs sm:text-sm md:text-base font-semibold tracking-normal text-left text-black'>
                        {item.shop_name}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Popular;
