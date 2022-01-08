import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact
          </div>

          <a
            href="https://www.vms.au.edu"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Vincent Mary School of Science and Technology (VMS)
          </a>
          <a
            href="https://www.au.edu"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Assumption University
          </a>
          <span class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Email: info@vms.au.edu
            <br />
            Tel: (+66)-2-723-2222
          </span>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>

          <a
            href="https://www.facebook.com/vms.au.edu"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/vms.au/?hl=en"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Instagram
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            LINE Official
          </a>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Resources
          </div>
          <a
            href="https://www.it.au.edu"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            VMS Information Technology
          </a>

          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Student Group
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            AU Spark
          </a>
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div class="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>

          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </a>
          <a
            href="#"
            class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </a>
        </div>
      </div>

      <div class="pt-2">
        <div
          class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
        >
          <div class="mt-2">© Copyright 2022. All Rights Reserved.</div>

          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-facebook-f"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-twitter-alt"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-youtube"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-linkedin"></i>
            </a>
            <a href="#" class="w-6 mx-1">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
