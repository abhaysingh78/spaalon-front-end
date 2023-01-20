import { TempleBuddhist } from "@mui/icons-material";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeToCart } from "../../redux/action/Action";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const CartItem = () => {
  const state = useSelector(state => state.addToCartReducer.carts);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className='bg-gray-100 py-8 '>
        {state.length > 0 ? (
          <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
              <div className='w-3/4 bg-white px-10 py-10'>
                <div className='flex justify-between border-b pb-8'>
                  <h1 className='font-semibold text-2xl font-sans'>
                    Booking summary
                  </h1>
                  <h2 className='font-semibold text-2xl font-sans'>
                    {new Date().toLocaleDateString()}
                  </h2>
                </div>{" "}
                <h5 className='text-red-500 text-md text-right cursor-pointer '>
                  Please select another slot{" "}
                </h5>
                <div className='flex mt-10 mb-5'>
                  <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                    Services
                  </h3>

                  <h3 className='font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center'>
                    Price
                  </h3>
                  <h3 className='font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center'>
                    Total
                  </h3>
                </div>
                {state &&
                  state?.map(item => (
                    <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                      <div className='flex w-2/5'>
                        <div className='flex flex-col justify-between ml-4 flex-grow'>
                          <span className='font-bold text-sm'>{item.name}</span>

                          <span
                            onClick={() => dispatch(removeToCart(item))}
                            className='font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs'
                          >
                            Remove
                          </span>
                        </div>
                      </div>

                      <span className='text-center w-1/5 font-semibold text-sm'>
                        Rs.{item.sale_price - item.discount}
                      </span>
                      <span className='text-center w-1/5 font-semibold text-sm'>
                        Rs.{item.sale_price - item.discount}
                      </span>
                    </div>
                  ))}
              </div>
              <div id='summary' className='w-1/4 px-8 py-10'>
                <h1 className='font-semibold text-2xl border-b pb-8'>
                  Order Summary
                </h1>
                <div className='flex justify-between mt-10 mb-5'>
                  <span className='font-semibold text-sm uppercase'>
                    Item {state && state?.length}
                  </span>
                  {state.length !== 0 &&
                    state
                      ?.map(item => item.sale_price - item.discount)
                      ?.reduce((acc, item, i) => {
                        const a = parseInt(acc);
                        const b = parseInt(item);
                        return (
                          <span
                            key={i}
                            className='text-center w-1/5 font-semibold text-sm'
                          >
                            Rs.
                            {a + b}
                          </span>
                        );
                      })}
                </div>

                <div className='border-t mt-8'>
                  <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                    <span>Total cost</span>
                    {state.length !== 0 &&
                      state
                        ?.map(item => item.sale_price - item.discount)
                        ?.reduce((acc, item, i) => {
                          const a = parseInt(acc);
                          const b = parseInt(item);
                          return (
                            <span
                              key={i}
                              className='text-center w-1/5 font-semibold text-sm'
                            >
                              Rs.
                              {a + b}
                            </span>
                          );
                        })}
                  </div>
                  <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='bg-gray-100 py-8 px-24 '>
            <div className='flex justify-center border-b pb-8 '>
              <h1 className='font-semibold text-2xl font-sans '>
                Empty Cart Continue Shopping 😃
              </h1>
            </div>
            <NavLink
              to='/'
              className='flex font-semibold text-indigo-600 text-sm mt-10 '
            >
              <FaArrowLeft className='mr-2' />
              Continue Shopping
            </NavLink>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartItem;
