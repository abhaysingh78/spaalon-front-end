import React from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
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

  return (
    <header class="h-16 bg-white">
      <nav class="relative px-8 sm:px-16 py-4 ">
        <div class="container mx-auto flex justify-between items-center">
          <img
            width={150}
            className="ml-20"
            src="https://spaalon.com/images/SpaalonLogoRed.jpg"
            alt="Tailwindcss Navigation"
          />

          <ul class="hidden md:flex mr-20  space-x-8 text-gray-600 ">
            <li>
              <a href="#">Hair</a>
            </li>
            <li>
              <a href="#">body</a>
            </li>
            <li class="flex relative group">
              <a href="#" class="mr-1">
                Spa
              </a>
              <i class="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              {/* <!-- Submenu starts --> */}
              <ul class="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Hair</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Rica</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Nails</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">Ad campaigns</a>
                </li>
                <li class="text-sm hover:bg-slate-100 leading-8">
                  <a href="#">UX Design</a>
                </li>
              </ul>
              {/* <!-- Submenu ends --> */}
            </li>
            <li>
              <a href="#">Nails</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              {" "}
              <a href="#" class="  rounded-3xl hidden md:flex" role="button">
                <img
                  className=""
                  width={22}
                  src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                  alt=""
                />
              </a>
            </li>{" "}
            <li>
              {" "}
              <a href="#" class="  rounded-3xl hidden md:flex" role="button">
                <img
                  className=""
                  width={22}
                  src="https://cdn-icons-png.flaticon.com/512/687/687259.png"
                  alt=""
                />
              </a>
            </li>
          </ul>

          {/* <!-- Mobile menu icon --> */}
          <button onClick={openCloseMenu} id="mobile-icon" class="md:hidden">
            <FaBars onClick={() => changeIcon(this)} />
          </button>
        </div>

        {/* <!-- Mobile menu --> */}
        <div class="md:hidden flex justify-center mt-3 w-full">
          <div id="mobile-menu" class="mobile-menu absolute top-23 w-full">
            <ul class="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
              <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="https://google.com" class="block pl-7">
                  Hair
                </a>
              </li>
              <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" class="block pl-7">
                  News
                </a>
              </li>
              <li class="border-b-2 border-white hover:bg-red-400 hover:text-white">
                <a href="#" class="block pl-11">
                  Services <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                </a>

                {/* <!-- Submenu starts --> */}
                <ul class="bg-white text-gray-800 w-full">
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Webdesign
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Digital marketing
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      SEO
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Ad campaigns
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      UX Design
                    </a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" class="block pl-7">
                  About
                </a>
              </li>
              <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" class="block pl-7">
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
