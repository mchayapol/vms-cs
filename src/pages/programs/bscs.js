import * as React from "react";
import Layout from "../../components/layout";
import "tw-elements";
import RandomImage from "../../components/RandomImage";

const BsProgramPage = () => {
  return (
    <Layout>
      <div className="container m-auto relative">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <div
            id="card-highlight"
            className="flex justify-center order-1 md:order-2"
          >
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg shadow-gray-600">
              <RandomImage className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  BSCS Highlights
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  <ul>
                    <li>Internationally competant</li>
                    <li>Entrepreneurship</li>
                    <li>Technical Skills</li>
                    <li>High Demand</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1">
            <h1 className="text-sm lg:text-4xl font-bold font-heading text-center md:text-left">
              BSCS Program
            </h1>
            Undergraduates will find that our BSCS program emphasizes on
            developing the practicality of the knowledge to real-world use.
            Students learn not only the fundamentals of computer science, but
            also vigorously on how the knowledge can be applied. Classrooms,
            learning facilities, and research labs collaborate hand-in-hand to
            make this happen, as you will find that students learn not only
            inside the classroom. CS faculty members maintain an extensive
            technology network in industrial partners so that “real-world”
            practices are truly real-world and bring out the most optimal
            benefits for the students
          </div>

          <div className="order-3">
              First, our candidates begin with the masteries of computer
              programming and the essences of computer science. Then, whether
              their interest is in creating software innovations, getting a
              software engineering career in big tech companies, or furthering
              their study in postgraduate levels, students can select to pursue
              their track of elective courses that fits their needs, spending
              their senior year working on real-world projects or software
              innovations.
          </div>

          <div className="order-5">
            Note: CS study tracks are designed only as an informal guidelines on
            top of standard graduate study plan. Students are not required to
            officially select a track to begin with, and are free to design
            their own study choices according to their own needs.
          </div>
        </div>

        <div className="bg-cs-gray/50 p-4 grid grid-flow-row grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-10/12">
              <h5 className="text-gray-900 text-7xl leading-tight font-medium mb-2">
                IDS
              </h5>
              <p className="text-gray-700 text-base mb-4 h-14">
                <p className="text-cs-orange text-lg">
                  Informatics and Data Science
                </p>
              </p>
              <button
                className=" inline-block px-6 py-2.5 
                font-medium text-xs leading-tight uppercase rounded shadow-md 
                hover:shadow-lg 
                focus:shadow-lg focus:outline-none focus:ring-0 
                active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#read-more-ids"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-10/12">
              <h5 className="text-gray-900 text-7xl leading-tight font-medium mb-2">
                NTI
              </h5>
              <p className="text-gray-700 text-base mb-4 h-14">
                <p className="text-cs-orange text-lg">
                  Network Technology and Infrastructure
                </p>
              </p>
              <button
                className=" inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#read-more-nti"
              >
                READ MORE
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-10/12">
              <h5 className="text-gray-900 text-7xl leading-tight font-medium mb-2">
                SED
              </h5>
              <p className="text-gray-700 text-base mb-4 h-14">
                <p className="text-cs-orange text-lg">
                  Software Engineering and Development
                </p>
              </p>

              <button
                className=" inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#read-more-sed"
              >
                READ MORE
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-10/12">
              <h5 className="text-gray-900 text-7xl leading-tight font-medium mb-2">
                ES
              </h5>
              <p className="text-gray-700 text-base mb-4 h-14">
                <p className="text-cs-orange text-lg">Enterprise Systems</p>
              </p>
              <button
                className="inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#read-more-es"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="read-more-ids"
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        tabindex="-1"
        aria-labelledby="exampleModalLongLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto 
          bg-cs-gray  bg-clip-padding rounded-md outline-none text-current"
          >
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h1
                className="text-xl font-medium leading-normal font-bold text-cs-orange"
                id="exampleModalLongLabel"
              >
                IDS: Informatics and Data Science
              </h1>
              <button
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body relative p-4 text-neutral-50"
              style={{ minHeight: "1500p" }}
            >
              <p className="mb-4 text-justify">
                Recommended for researchers and innovators, our CS Informatics
                Track takes graduate students on the road towards becoming a
                true expert in computer science. Built on solid CS fundamentals,
                candidates can select to specialize in a field of modern
                computing technologies, such as ambient intelligence, computer
                vision and big data analytics.
              </p>

              <p className="mb-4 text-justify">
                Because computer science is not just about programming and
                software development, informatics track aims to create the
                expertise in our CS candidates – expertise in what can be
                considered the heart of applied computer science. Given today’s
                rapidly evolving computing world, many cutting-edge technologies
                have emerged to fulfill the needs of the global IT industry,
                with just about everyone of them having background in computer
                science. Fields such as augmented and mixed reality (computer
                vision and image processing), big data and data analytics (data
                mining and pattern recognition), and intelligent personal
                assistants (artificial and computational intelligence) can all
                be explored under our CS graduate program.
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="read-more-nti"
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        tabindex="-1"
        aria-labelledby="exampleModalLongLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto 
          bg-cs-gray  bg-clip-padding rounded-md outline-none text-current"
          >
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h1
                className="text-xl font-medium leading-normal font-bold text-cs-orange"
                id="exampleModalLongLabel"
              >
                NTI: Network Technology and Infrastructure
              </h1>
              <button
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body relative p-4 text-neutral-50"
              style={{ minHeight: "1500p" }}
            >
              <p className="mb-4 text-justify">
                The world is being connected. Networking is an essential element
                to make it possible. This track focuses on building strong
                computer network skills from architectural level to management.
                This includes network design, Cisco networking, network
                security, Internet of Things, business continuity planning and
                management, etc.
              </p>

              <p className="mb-4 text-justify">
                Candidates in this track will master various skills and
                strengthen their knowledge in the following areas: Cloud
                Computing, Computer Network & Internet Security, Configuration
                Management, Information Theory, Information Retrieval & Search
                Engines, Networks & Distributed Systems, System Analysis &
                Design, and Wireless
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="read-more-sed"
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        tabindex="-1"
        aria-labelledby="exampleModalLongLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto 
          bg-cs-gray  bg-clip-padding rounded-md outline-none text-current"
          >
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h1
                className="text-xl font-medium leading-normal font-bold text-cs-orange"
                id="exampleModalLongLabel"
              >
                SED: Software Engineering And Development
              </h1>
              <button
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body relative p-4 text-neutral-50"
              style={{ minHeight: "1500p" }}
            >
              <p className="mb-4 text-justify">
                A track for software engineers, from software developers to
                software process management, whose aim is to develop the skills
                to further their career path in the software development
                industry. Candidates following this track focus on every aspects
                of software engineering, including software process and
                management, software development, and application platforms and
                architectures.
              </p>

              <p className="mb-4 text-justify">
                Through a pair of CS eyes, software engineering entails every
                aspects of software development. These including development
                (coding), requirement engineering, testing and quality
                assurance, configuration management, process improvement, and
                software project management. Candidates with the aim of joining
                large multi-national corporations or establishing their own
                software development companies will be equipped with the
                necessary skills through our CS program.
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="read-more-es"
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        tabindex="-1"
        aria-labelledby="exampleModalLongLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto 
          bg-cs-gray  bg-clip-padding rounded-md outline-none text-current"
          >
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h1
                className="text-xl font-medium leading-normal font-bold text-cs-orange"
                id="exampleModalLongLabel"
              >
                ES: Enterprise Systems
              </h1>
              <button
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body relative p-4 text-neutral-50"
              style={{ minHeight: "1500p" }}
            >
              <p className="mb-4 text-justify">
                Enterprises demand skilled people to join their teams. This
                track focuses on essential elements of enterprise software, such
                as sales and distribution management system, manufacturing
                management system, finance and accounting information system,
                etc. Moreover, this track does not only focus only technical
                skills, but also soft skills necessary to colaborate as a team.
              </p>

              <p className="mb-4 text-justify">
                CS has greatly contributed to the development of this area.
                Quality software is not just about being able to code, but
                includes all aspects of which enables the software reliability.
                Enterprises highly expect this quality. This track emphasises on
                hardening the students' skills in development (coding),
                requirement engineering, testing and quality assurance,
                configuration management, process improvement, and software
                project management. Candidates with the aim of joining large
                multi-national corporations or establishing their own software
                development companies will be equipped with the necessary skills
                through our CS program.
              </p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BsProgramPage;
