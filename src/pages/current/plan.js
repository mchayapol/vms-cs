import React from "react";
import Layout from "../../components/layout";
import "tw-elements";

const CurrentStudentPage = () => {
  return (
    <Layout>
      <section className="m-10">
        <h1 className="font-bold text-xl text-cs-orange">Study Plan</h1>
        <ul
          id="info-tab"
          className="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
          id="tabs-tabJustify"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
              id="tabs-home-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeJustify"
              role="tab"
              aria-controls="tabs-homeJustify"
              aria-selected="true"
            >
              2022 (64x onward)
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-profile-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileJustify"
              role="tab"
              aria-controls="tabs-profileJustify"
              aria-selected="false"
            >
              2019 (62x-63x)
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-messages-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesJustify"
              role="tab"
              aria-controls="tabs-messagesJustify"
              aria-selected="false"
            >
              2014 (57x-61x)
            </a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentJustify">
          <div
            className="tab-pane fade show active"
            id="tabs-homeJustify"
            role="tabpanel"
            aria-labelledby="tabs-home-tabJustify"
          >
            <ul>
              <li>
                <a href="pdf/bscs2019-study-plan-64.pdf">
                  Download 2019 study plan (64x students)
                </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profileJustify"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabJustify"
          >
            <ul>
              <li>
                <a href="pdf/bscs2019-study-plan-62-63.pdf">
                  Download 2019 study plan (62x-63x students)
                </a>
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messagesJustify"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabJustify"
          >
            <div
              class="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700 mb-3"
              role="alert"
            >
              <h1>Warning these subjects must be taken as soon as possible</h1>
              <ul>
                <li>Intellectual Property Law</li>
              </ul>
            </div>
            <ul>
              <li>
                <a href="pdf/bscs2014.pdf">Download 2014 study plan</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrentStudentPage;
