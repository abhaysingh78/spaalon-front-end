import axios from "axios";
import React, { useEffect, useState } from "react";

export const BestDeals = () => {
  const [bestShop, setBestShop] = useState([]);
  const fetchApi = async () => {
    const res = await axios.get(
      "https://spaalon.harij.in/api/shop/ShopBestDeal"
    );
    console.log(res.data.bestshop);
    setBestShop(res.data.bestshop);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="items-center mx-4 md:mx-48 mb-12">
      <div className="my-2">
        <hr className="my-6 w-20 border-2 border-orange-700 bg-orange-700" />
        <h2 className="text-xl md:text-2xl font-semibold">Best Deals</h2>
        <p className="text-md md:text-xl text-gray-700 font-semibold">
          Come experience the best haircut and color services
        </p>
      </div>

      <div className="my-4 md:flex md:flex-wrap md:my-4  ">
        {/* { bestShop && {bestshop?.map(el => {
          return (

          )
        })} */}

        {bestShop &&
          bestShop?.map((el) => {
            return (
              <div className="my-4 md:mr-2" key={el.id}>
                <a
                  href="#"
                  class="flex flex-col items-center   md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 hover:"
                >
                  <img
                    class="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg   "
                    src={`${el.image_url}`}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2  text-xl font-bold tracking-tight text-black">
                      {el.shop_name}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {el.description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}

        {/* <div className="my-4 ">
          <a
            href="#"
            class="flex flex-col items-center  md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Alankar Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gali no 3, Noida
              </p>
            </div>
          </a>
        </div>
        <div className="my-4 md:mr-2">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Alankar Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gali no 3, Noida
              </p>{" "}
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div>
        <div className="my-4">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Alankar Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gali no 3, Noida
              </p>{" "}
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div>
        <div className="my-4">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 hover:ease-in duration-300"
          >
            <img
              class="object-cover w-full rounded-t-lg h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p className="text-sm text-gray-600">Men's Haircut</p>
              <h5 class="mt-1 mb-2 text-xl font-bold tracking-tight text-black">
                NK Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gali no 3, Noida
              </p>
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
};
