import React from "react";
import Slider from "react-slick";

const Trending = ({ heading, dec, align, bg, style }) => {
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
      className={`xl:px-44 bg-${bg}-50 pt-8 text-${align ? align : "center"}`}
    >
      <div className='my-8' style={style && style}>
        <hr className='my-6 w-20 border-2 border-red-700 bg-red-700' />
        <h2 className='text-2xl font-semibold'>{heading}</h2>
        <p className=' text-xl text-gray-700 font-semibold'>{dec}</p>
      </div>
      <Slider {...settings}>
        <div class='flex px-4 flex-col outline-none  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <img
            class='w-full h-auto rounded-t-xl'
            src='https://picsum.photos/800/600?random=1'
            alt='Image Description'
          />
          <div class='p-4 md:p-5'>
            <h3 class='text-lg font-bold text-gray-800 dark:text-white'>
              Card title
            </h3>
          </div>
        </div>{" "}
        <div class='flex px-4 flex-col outline-none  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <img
            class='w-full h-auto rounded-t-xl'
            src='https://picsum.photos/800/600?random=1'
            alt='Image Description'
          />
          <div class='p-4 md:p-5'>
            <h3 class='text-lg font-bold text-gray-800 dark:text-white'>
              Card title
            </h3>
          </div>
        </div>{" "}
        <div class='flex px-4 flex-col outline-none  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <img
            class='w-full h-auto rounded-t-xl'
            src='https://picsum.photos/800/600?random=1'
            alt='Image Description'
          />
          <div class='p-4 md:p-5'>
            <h3 class='text-lg font-bold text-gray-800 dark:text-white'>
              Card title
            </h3>
          </div>
        </div>{" "}
        <div class='flex px-4 flex-col outline-none  shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <img
            class='w-full h-auto rounded-t-xl'
            src='https://picsum.photos/800/600?random=1'
            alt='Image Description'
          />
          <div class='p-4 md:p-5'>
            <h3 class='text-lg font-bold text-gray-800 dark:text-white'>
              Card title
            </h3>
          </div>
        </div>{" "}
        <div class='flex px-4 flex-col  outline-none shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <img
            class='w-full h-auto rounded-t-xl'
            src='https://picsum.photos/800/600?random=1'
            alt='Image Description'
          />
          <div class='p-4 md:p-5'>
            <h3 class='text-lg font-bold text-gray-800 dark:text-white'>
              Card title
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Trending;
