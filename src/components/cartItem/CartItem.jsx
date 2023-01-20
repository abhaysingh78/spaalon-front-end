import { TempleBuddhist } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../redux/action/Action";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const CartItem = () => {
  const state = useSelector(state => state.addToCartReducer.carts);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <Header />
      <div class='bg-gray-100 '>
        <div class='container mx-auto mt-10'>
          <div class='flex shadow-md my-10'>
            <div class='w-3/4 bg-white px-10 py-10'>
              <div class='flex justify-between border-b pb-8'>
                <h1 class='font-semibold text-2xl font-sans'>Shopping Cart</h1>
                <h2 class='font-semibold text-2xl font-sans'>3 Items</h2>
              </div>
              <div class='flex mt-10 mb-5'>
                <h3 class='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                  Product Details
                </h3>
                <h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                  Quantity
                </h3>
                <h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                  Price
                </h3>
                <h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                  Total
                </h3>
              </div>
              {state &&
                state?.map(item => (
                  <div class='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                    <div class='flex w-2/5'>
                      <div class='w-20'>
                        <img
                          class='h-24'
                          src='https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v'
                          alt=''
                        />
                      </div>
                      <div class='flex flex-col justify-between ml-4 flex-grow'>
                        <span class='font-bold text-sm'>{item.name}</span>

                        <span
                          onClick={() => dispatch(removeToCart(item))}
                          class='font-semibold hover:text-red-500 text-gray-500 text-xs'
                        >
                          Remove
                        </span>
                      </div>
                    </div>
                    <div class='flex justify-center w-1/5'>
                      <svg
                        class='fill-current text-gray-600 w-3'
                        viewBox='0 0 448 512'
                      >
                        <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                      </svg>
                      <input
                        class='mx-2 border text-center w-8'
                        type='text'
                        value='1'
                      />

                      <svg
                        class='fill-current text-gray-600 w-3'
                        viewBox='0 0 448 512'
                      >
                        <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                      </svg>
                    </div>
                    <span class='text-center w-1/5 font-semibold text-sm'>
                      Rs.{item.sale_price}
                    </span>
                    <span class='text-center w-1/5 font-semibold text-sm'>
                      Rs.{item.sale_price}
                    </span>
                  </div>
                ))}
              <a
                href='#'
                class='flex font-semibold text-indigo-600 text-sm mt-10'
              >
                <svg
                  class='fill-current mr-2 text-indigo-600 w-4'
                  viewBox='0 0 448 512'
                >
                  <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
                </svg>
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartItem;
