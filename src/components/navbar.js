import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ children }) => {
  const openMenu = () => {
    alert("Menu Open!")
  }
  return (
    <div className="relative mx-auto">
      {/* <nav className="bg-gradient-to-r from-black to-cs-gray text-neutral-50 px-4 flex justify-between  h-16 border-b-2"> */}
      <nav className="flex justify-between bg-gradient-to-r from-black to-cs-gray text-neutral-50 w-screen h-16">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <span className="text-xl font-bold font-heading">
            <a href="/"><img src="/img/cs-au-logo.png" alt="CS.au" className="h-9 inline align-text-baseline pr-6" /></a>
            <a href="https://www.vms.au.edu" className="text-cs-yellow">VMS:</a> COMPUTER SCIENCE
          </span>


          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {/* <li>
              <a className="hover:text-gray-200" href="#">
                Programs
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Study Plan
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="text-auspark-red" href="http://auspark.au.edu">
                AU Spark
              </a>
            </li> */}
          </ul>

          <div className="hidden xl:flex items-center space-x-5 items-center">

              <a className="hover:text-gray-200" href="#">
                Programs
              </a>            
              <a className="hover:text-gray-200" href="#">
                Study Plan
              </a>            
              <a className="hover:text-gray-200" href="/contact">
                Contact
              </a>
            <a className="text-auspark-red" href="http://auspark.au.edu">
                AU Spark
              </a>

            {/* <a className="hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <a className="flex items-center hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>

            <a className="flex items-center hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a> */}
          </div>
        </div>

        {/* <a className="xl:hidden flex mr-6 items-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </a> */}
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
// <ul className="flex items-center bg-red-50 ">
//   <li className="visible lg:invisible ">
//     <GiHamburgerMenu
//       className="object-right"
//       size={28}
//       style={{ color: "black" }}
//     />
//   </li>
//   <li className="pr-6 invisible lg:visible">Programs</li>
//   <li className="pr-6 invisible lg:visible">Study Plan</li>
//   <li className="pr-6 invisible lg:visible">
//     <a href="/contact">Contact</a>
//   </li>
//   <li className="pr-6 invisible lg:visible">Apply Now</li>
//   <li className="pr-6 text-auspark-red text-bold invisible lg:visible">
//     <a href="http://auspark.au.edu/">AU Spark</a>
//   </li>
// </ul>
