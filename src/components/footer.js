import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact
          </div>

          <a
            href="https://www.vms.au.edu"
            className="my-3 block text-cs-orange hover:text-gray-100 text-sm font-medium duration-700"
          >
            Vincent Mary School of Science and Technology (VMS)
          </a>
          <a
            href="https://www.au.edu"
            className="my-3 block text-cs-yellow hover:text-gray-100 text-sm font-medium duration-700"
          >
            Assumption University
          </a>
          <span className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Email: info@vms.au.edu
            <br />
            Tel: (+66)-2-723-2222
          </span>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>

          <a
            href="https://www.facebook.com/vms.au.edu"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/vms.au/?hl=en"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Instagram
          </a>
          <a
            href="https://line.me/R/ti/p/@ude5719y"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            LINE Official
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Resources
          </div>
          <a
            href="https://www.it.au.edu"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            VMS Information Technology
          </a>

          <a
            href="https://www.facebook.com/groups/auvms"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Student Group
          </a>
          <a
            href="https://auspark.au.edu/"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            AU Spark
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Community
          </div>

          <a
            href="https://github.com/auvms"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </a>
          {/* <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </a> */}
          <a
            href="https://www.youtube.com/channel/UCpvuETFR69r0at9tHMSfbsw/featured"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </a>
        </div>
      </div>

      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2">© Copyright 2022. All Rights Reserved.</div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="https://www.facebook.com/vms.au.edu" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </a>
            {/* <a href="#" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </a> */}
            <a href="https://www.youtube.com/channel/UCpvuETFR69r0at9tHMSfbsw/featured" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </a>
            {/* <a href="#" className="w-6 mx-1">
              <i className="uil uil-linkedin"></i>
            </a> */}
            <a href="https://www.instagram.com/vms.au/?hl=en" className="w-6 mx-1">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
