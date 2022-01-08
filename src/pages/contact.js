import * as React from "react";
import Layout from "../components/layout";
import { FaRegAddressCard, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

const ContactPage = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.7524305072125!2d100.83558491432025!3d13.611926804187926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d430e775155f9%3A0xf01923824353260!2sAssumption%20University%20Suvarnabhumi%20Campus!5e0!3m2!1sen!2sth!4v1641612338560!5m2!1sen!2sth"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
          <div className="text-zinc-50  lg:w-1/3 md:w-1/2 bg-gradient-to-b from-gray-800 to-gray-500 opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contacts
            </h2>
            <div className="grid grid-cols-[20px_auto] gap-2 text-white">
              <div className="col-span-2 title-font text-orange-300 text-bold">
                Hua Mak Campus
              </div>
              <div className="flex">
                <div className="self-center">
                  <FaRegAddressCard />
                </div>
              </div>
              <div>Ramkhamheang 24 Road Bangkok 10240 Thailand</div>
              <div className="col-span-2 title-font text-orange-300 text-bold">
                Suvarnabhumi Campus
              </div>
              <div className="flex">
                <div className="self-center">
                  <FaRegAddressCard />
                </div>
              </div>
              <div>
                Bang Na-Trad Km. 26 Bangsaothong Samuthprakarn 10540 Thailand
              </div>

              <div className="flex">
                <div className="self-center">
                  <AiTwotoneMail />
                </div>
              </div>
              <div>info@scitech.au.edu</div>
              <div className="flex">
                <div className="self-center">
                  <FaPhoneAlt />
                </div>
              </div>
              <div>(66) 02 719 1079, (66) 02 300 4543</div>
              <div className="flex">
                <div className="self-center">
                  <FaPhoneAlt />
                </div>
              </div>
              <div>(66) 02 719 1639</div>
              <div className="flex">
                <div className="self-center">
                  <FaGlobe />
                </div>
              </div>
              <div>https://www.vms.au.edu</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
