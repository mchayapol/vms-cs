import * as React from "react";

const Navbar = ({ children }) => {
  var signedIn = false
  return (
    <div class="flex-1 flex flex-col">
      {/* <nav class="px-4 flex justify-between bg-white h-16 border-b-2 "> */}
      <nav class="bg-white dark:bg-gray-800 px-4 flex justify-between  h-16 border-b-2 ">
        {/* <nav class="bg-white dark:bg-gray-800"> */}

        <ul class="flex items-center">
          <li class="h-6 w-12">
            <img
              class="h-full w-full mx-auto"
              src="/img/cs-au-logo.png"
              alt="CS.au"
            />
          </li>
          <li>
            <a
              class="block text-sm text-center text-gray-800 dark:text-white lg:text-base hover:text-gray-700 dark:hover:text-gray-300"
              href="/"
            >
              VMS: COMPUTER SCIENCE
            </a>
          </li>
        </ul>

        <ul class="flex items-center">
          <li>
            <a
              class="block text-base text-bold text-center text-gray-800 dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300"
              href="https://www.vms.au.edu"
            >
              <h1 class="pl-8 lg:pl-0">VMS.au</h1>
            </a>
          </li>
        </ul>

        <ul class="flex items-center">
          <li class="pr-6 text-gray-300">Programs</li>
          <li class="pr-6 text-gray-300">Study Plan</li>
          <li class="pr-6 text-gray-300">Apply Now</li>
          {signedIn?
          
          <li class="h-10 w-10">
            <img
              class="h-full w-full rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile woman"
            />
          </li>
          :
          <li class="pr-6 text-gray-300">
            Sign In
          </li>
}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
