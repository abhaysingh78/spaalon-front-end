import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  // const showMenu = () => {
  //   setShow(true);
  //   console.log(show);
  // };
  const mobile_icon = document.getElementById("mobile-icon");
  const mobile_menu = document.getElementById("mobile-menu");
  const hamburger_icon = document.querySelector("#mobile-icon i");

  function openCloseMenu() {
    mobile_menu.classList.toggle("block");
    mobile_menu.classList.toggle("active");
  }

  function changeIcon(icon) {
    icon.classList.toggle("fa-xmark");
  }

  // mobile_icon.addEventListener('click', openCloseMenu);
  return (
    <header class='h-20 bg-white'>
      <nav class='relative px-2 py-4'>
        <div class='container mx-auto flex justify-between items-center'>
          <img
            src='https://avrasys.hu/logoipsum-logo-54.svg'
            alt='Tailwindcss Navigation'
          />

          <ul class='hidden md:flex space-x-6'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>News</a>
            </li>
            <li class='flex relative group'>
              <a href='#' class='mr-1'>
                Services
              </a>
              <i class='fa-solid fa-chevron-down fa-2xs pt-3'></i>
              {/* <!-- Submenu starts --> */}
              <ul class='absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg'>
                <li class='text-sm hover:bg-slate-100 leading-8'>
                  <a href='#'>Webdesign</a>
                </li>
                <li class='text-sm hover:bg-slate-100 leading-8'>
                  <a href='#'>Digital marketing</a>
                </li>
                <li class='text-sm hover:bg-slate-100 leading-8'>
                  <a href='#'>SEO</a>
                </li>
                <li class='text-sm hover:bg-slate-100 leading-8'>
                  <a href='#'>Ad campaigns</a>
                </li>
                <li class='text-sm hover:bg-slate-100 leading-8'>
                  <a href='#'>UX Design</a>
                </li>
              </ul>
              {/* <!-- Submenu ends --> */}
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>

          <a
            href='#'
            class='bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex'
            role='button'
          >
            Sign In
          </a>

          {/* <!-- Mobile menu icon --> */}
          <button onClick={openCloseMenu} id='mobile-icon' class='md:hidden'>
            <i onClick={() => changeIcon(this)} class='fa-solid fa-bars'>
              121
            </i>
          </button>
        </div>

        {/* <!-- Mobile menu --> */}
        <div class='md:hidden flex justify-center mt-3 w-full'>
          <div id='mobile-menu' class='mobile-menu absolute top-23 w-full'>
            <ul class='bg-gray-100 shadow-lg leading-9 font-bold h-screen'>
              <li class='border-b-2 border-white hover:bg-red-400 hover:text-white pl-4'>
                <a href='https://google.com' class='block pl-7'>
                  Home
                </a>
              </li>
              <li class='border-b-2 border-white hover:bg-red-400 hover:text-white pl-4'>
                <a href='#' class='block pl-7'>
                  News
                </a>
              </li>
              <li class='border-b-2 border-white hover:bg-red-400 hover:text-white'>
                <a href='#' class='block pl-11'>
                  Services <i class='fa-solid fa-chevron-down fa-2xs pt-4'></i>
                </a>

                {/* <!-- Submenu starts --> */}
                <ul class='bg-white text-gray-800 w-full'>
                  <li class='text-sm leading-8 font-normal hover:bg-slate-200'>
                    <a class='block pl-16' href='#'>
                      Webdesign
                    </a>
                  </li>
                  <li class='text-sm leading-8 font-normal hover:bg-slate-200'>
                    <a class='block pl-16' href='#'>
                      Digital marketing
                    </a>
                  </li>
                  <li class='text-sm leading-8 font-normal hover:bg-slate-200'>
                    <a class='block pl-16' href='#'>
                      SEO
                    </a>
                  </li>
                  <li class='text-sm leading-8 font-normal hover:bg-slate-200'>
                    <a class='block pl-16' href='#'>
                      Ad campaigns
                    </a>
                  </li>
                  <li class='text-sm leading-8 font-normal hover:bg-slate-200'>
                    <a class='block pl-16' href='#'>
                      UX Design
                    </a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li class='border-b-2 border-white hover:bg-red-400 hover:text-white pl-4'>
                <a href='#' class='block pl-7'>
                  About
                </a>
              </li>
              <li class='border-b-2 border-white hover:bg-red-400 hover:text-white pl-4'>
                <a href='#' class='block pl-7'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;