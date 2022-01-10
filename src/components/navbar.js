import React from "react";
import csLogo from "../images/cs-au-logo.png";

const Navbar = ({ children }) => {
  // const [showProgramMenu, setShowProgramMenu] = useState(false);

  const openMenu = () => {
    alert("Menu Open!");
  };
  return (
    <div className="-z-5 relative mx-auto">
      {/* <nav className="bg-gradient-to-r from-black to-cs-gray text-neutral-50 px-4 flex justify-between  h-16 border-b-2"> */}
      <nav className="flex justify-between bg-gradient-to-r from-black to-cs-gray text-neutral-50 w-screen h-16">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <span className="text-sm lg:text-xl font-bold font-heading">
            <a href="/">
              <img
                src={csLogo}
                alt="CS.au"
                className="h-9 inline align-text-baseline pr-6"
              />
            </a>
            <a
              href="https://www.vms.au.edu"
              className="text-cs-yellow"
              aria-label="Vincent Mary School of Science and Technology"
            >
              VMS:
            </a>{" "}
            <a href="/">COMPUTER SCIENCE</a>
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

          <div className="hidden lg:flex items-center space-x-5 items-center">
            <div className="group inline-block">
              <button className="bg-transparent outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32">
                <span className="pr-1 flex-1">Programs</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul
                className="z-40 bg-cs-gray/60 border rounded-sm 
                transform scale-0 
                group-hover:scale-100 absolute 
                transition  duration-150 ease-in-out origin-top min-w-32"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/programs/bscs">Bachelor's Degree</a>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/programs/mscs">Master's Degree</a>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/programs/phdcs">Doctor's Degree</a>
                </li>
              </ul>
            </div>

            <div className="group inline-block">
              <button className="bg-transparent outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32">
                <span className="pr-1 flex-1">Current Students</span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              <ul
                className="z-40 bg-cs-gray/60 border rounded-sm 
                transform scale-0 
                group-hover:scale-100 absolute 
                transition  duration-150 ease-in-out origin-top min-w-32"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/current/curriculum-2022">Curriculum 2022</a>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/current/curriculum-2019">Curriculum 2019</a>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="/current/plan">Study Plans</a>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-cs-yellow cursor-pointer">
                  <a href="https://www.scitech.au.edu/seniorproject/">
                    Senior Project Systems
                  </a>
                </li>
              </ul>
            </div>
            <a className="font-medium hover:text-gray-200" href="/contact">
              Contact
            </a>
            <a
              className="font-medium text-auspark-red"
              href="https://auspark.au.edu"
            >
              AU Spark
            </a>
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
        <button
          className="navbar-burger self-center mr-12 lg:hidden"
          onClick={openMenu}
        >
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
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
