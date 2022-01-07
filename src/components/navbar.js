import * as React from "react";

const Navbar = ({ children }) => {

  return (
    <div className="flex-1 flex flex-col">
      {/* <nav className="px-4 flex justify-between bg-white h-16 border-b-2 "> */}
      <nav className="bg-white dark:bg-gray-800 px-4 flex justify-between  h-16 border-b-2 ">
        {/* <nav className="bg-white dark:bg-gray-800"> */}

        <ul className="flex items-center">
          <li className="h-6 w-12">
            <img
              className="h-full w-full mx-auto"
              src="/img/cs-au-logo.png"
              alt="CS.au"
            />
          </li>
          <li>
            <a
              className="block text-sm text-center text-gray-800 dark:text-white lg:text-base hover:text-gray-700 dark:hover:text-gray-300"
              href="/"
            >
              VMS: COMPUTER SCIENCE
            </a>
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            <a
              className="block text-base text-bold text-center text-gray-800 dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300"
              href="https://www.vms.au.edu"
            >
              <h1 className="pl-8 lg:pl-0">VMS.au</h1>
            </a>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="pr-6 text-gray-300">Programs</li>
          <li className="pr-6 text-gray-300">Study Plan</li>
          <li className="pr-6 text-gray-300">Apply Now</li>
          <li className="pr-6 text-gray-300">
            <a href="http://auspark.au.edu/">
            AU Spark
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
