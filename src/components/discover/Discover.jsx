import React, { useEffect, useState } from "react";

const Discover = () => {
  const [show, setShow] = useState({
    shop: true,
    location: true,
  });

  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState([]);

  const [shop, setShop] = useState("");
  const [shopData, setShopData] = useState([]);

  const locationSearchApi = async () => {
    let result = await fetch(
      `http://3.111.54.115:3000/api/shop/SearchLocation?search_text=${location}`
    );
    result = await result.json();
    setLocationData(result.location);
  };
  const shopSearchApi = async () => {
    let result = await fetch(
      `  http://3.111.54.115:3000/api/shop/SearchShopService?search_text=${shop}`
    );
    result = await result.json();
    setShopData(result.shopservice);
  };

  useEffect(() => {
    locationSearchApi();
  }, [location]);
  useEffect(() => {
    shopSearchApi();
  }, [shop]);

  return (
    <>
      {/* // big screen */}
      <div className="h-screen md:h-[30rem] bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex  items-center justify-center">
        <div>
          <div>
            {" "}
            <h1 className='text-3xl mb-4 md:mb-0 md:text-4xl text-center font-bold text-white tracking-wide'>
              Discover & Book
            </h1>
            <h3 className='text-xl md:text-2xl text-center text-white font-semibold'>
              Looking for Best Spa & Salon Near you ?
            </h3>
          </div>
          <div className='mx-4 md:mx-0 md:flex mt-4 md:bg-white md:p-1 rounded'>
            <div className='rounded bg-white my-1 md:border-r-2 md:my-0 border-gray-200 flex'>
              <input
                className=' px-12 rounded  w-full md:w-96 py-4 focus:outline-none placeholder:text-slate-400 '
                type='text'
                placeholder='What are you looking for...'
                onChange={e => {
                  setShow({ shop: true });
                  setShop(e.target.value);
                }}
                value={shop}
              />

              <div className=' mt-2 p-2 md:mt-1 opacity-40 md:p-2'>
                <img
                  width={30}
                  src='https://cdn-icons-png.flaticon.com/512/2811/2811806.png'
                  alt=''
                />
              </div>
            </div>{" "}
            <div className='rounded flex bg-white md:flex'>
              <input
                className=' py-4 px-12 rounded w-full md:w-[20rem] focus:outline-none'
                type='text'
                placeholder='Enter your location get started '
                onChange={e => {
                  setShow({ location: true });
                  setLocation(e.target.value);
                }}
                value={location}
              />{" "}
              <div className='mt-2  md:mt-2 opacity-40 p-2'>
                <img
                  className=''
                  width={20}
                  src='https://cdn-icons-png.flaticon.com/512/2838/2838912.png'
                  alt=''
                />
              </div>
            </div>
            <button
              onClick={() => console.log(shop, location)}
              className='w-full mt-2 md:mt-0 p-4 md:py-4 md:px-4 md:w-32 text-white text-md bg-orange-600 rounded'
            >
              Search
            </button>
          </div>
          <div className='flex justify-between'>
            <div className='w-[100%] pl-4 bg-white'>
              {show.shop && shopData?.length > 0 && (
                <div className='w-[100%] h-full pl-4 bg-white'>
                  {shopData && shopData?.length > 0 && (
                    <div className='overflow-y-scroll h-[250px]'>
                      {shopData?.map(item => (
                        <a href='javascript:void(0)'>
                          <p
                            className='text-base font-normal leading-none text-gray-600 hover:text-gray-800 hover:font-medium p-3'
                            onClick={e => {
                              setShop(item.name);
                              setShow({ shop: false });
                            }}
                          >
                            {item.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className='w-[100%] pl-4 bg-white'>
              {show.location && locationData?.length > 0 && (
                <div className='w-[100%] pl-4 bg-white'>
                  {locationData && locationData?.length > 0 && (
                    <div className='relative overflow-y-scroll h-[250px]'>
                      {locationData?.map(item => (
                        <a href='javascript:void(0)'>
                          <p
                            className='text-base font-normal leading-none text-gray-600 hover:text-gray-800 hover:font-medium p-3'
                            onClick={event => {
                              event.stopPropagation();
                              setLocation(item.area1);
                              setShow({ location: false });
                            }}
                          >
                            {item.area1}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
 ::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 20px; 
}
::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 20px; 
}

`}
      </style>
    </>
  );
};

export default Discover;
