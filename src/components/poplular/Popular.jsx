import React from "react";
import Slider from "react-slick";

const Popular = ({ heading, dec, align, bg, style }) => {
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
      <div className='my-8 px-12' style={style && style}>
        <hr className='my-6 w-20 border-2 border-orange-700 bg-orange-700' />
        <h2 className='text-2xl font-semibold'>{heading}</h2>
        <p className=' text-xl text-gray-700 font-semibold'>{dec}</p>
      </div>
      <Slider {...settings}>
        <div class='flex px-4 flex-col my-2 drop-shadow-md outline-none rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <div className='bg-white flex p-4 flex-col outline-none  shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg'>
            <div className='w-full flex items-center justify-center '>
              <div className='flex flex-col items-center'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt=''
                  className='hover:scale-105 transition-all ease-in-out'
                />
                <p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-left text-black'>
                  Ricardo Boveta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='flex px-4 flex-col my-2  drop-shadow-md outline-none rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <div className='bg-white flex p-4 flex-col outline-none  shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg'>
            <div className='w-full flex items-center justify-center '>
              <div className='flex flex-col items-center'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt=''
                  className='hover:scale-105 transition-all ease-in-out'
                />
                <p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-left text-black'>
                  Ricardo Boveta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='flex px-4 flex-col my-2  drop-shadow-md outline-none rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <div className='bg-white flex p-4 flex-col outline-none  shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg'>
            <div className='w-full flex items-center justify-center '>
              <div className='flex flex-col items-center'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt=''
                  className='hover:scale-105 transition-all ease-in-out'
                />
                <p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-left text-black'>
                  Ricardo Boveta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='flex px-4 flex-col my-2  drop-shadow-md outline-none rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <div className='bg-white flex p-4 flex-col outline-none  shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg'>
            <div className='w-full flex items-center justify-center '>
              <div className='flex flex-col items-center'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt=''
                  className='hover:scale-105 transition-all ease-in-out'
                />
                <p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-left text-black'>
                  Ricardo Boveta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='flex px-4 flex-col my-2  drop-shadow-md outline-none rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
          <div className='bg-white flex p-4 flex-col outline-none  shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] rounded-lg'>
            <div className='w-full flex items-center justify-center '>
              <div className='flex flex-col items-center'>
                <img
                  src='https://picsum.photos/800/600?random=1'
                  alt=''
                  className='hover:scale-105 transition-all ease-in-out'
                />
                <p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-left text-black'>
                  Ricardo Boveta
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Popular;
