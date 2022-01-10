import React from "react";
import Layout from "../../components/layout";
import "tw-elements";

const Curriculumn2022 = () => {
  return (
    <Layout>
      <section className="m-10">
        <h2 className="font-bold text-xl text-cs-orange">
          2022 Curriculum (132 Credits)
        </h2>
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
              CS Courses
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
              General Courses
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
            <div className="curriculum grid grid-cols-1 md:grid-cols-3">
              <div className="order-1 p-4">
                <h1>Core Courses</h1>
                <ul>
                  <li>MA 1200 Mathematics for Business</li>
                  <li>CSX 2003 Principles of Statistics</li>
                  <li>CSX 2006 Mathematics and Statistics for Data Science</li>
                  <li>CSX 2008 Mathematics Foundation for Computer Science</li>
                  <li>ITX 2005 Design Thinking</li>
                  <li>ITX 2007 Data Science</li>
                </ul>
              </div>
              <div className="order-2 md:col-span-2 p-4">
                <h1>Major Courses</h1>
                <h2>Organization Issues and Information Systems Group</h2>
                <ul>
                  <li>ITX 3002 Introduction to Information Technology</li>
                </ul>
                <h2>Applications Technology Group</h2>
                <ul>
                  <li>CSX 3010 Senior Project I</li>
                  <li>CSX 3011 Senior Project II</li>
                </ul>

                <h2>Technology and Software Methods Group</h2>
                <ul>
                  <li>CSX 3001 Fundamentals of Computer Programming</li>
                  <li>CSX 3002 Object-Oriented Concepts and Programming</li>
                  <li>CSX 3003 Data Structures and Algorithms</li>
                  <li>CSX 3004 Programming Languages</li>
                  <li>CSX 3009 Algorithm Design</li>
                </ul>

                <h2>Systems Infrastructure Group</h2>
                <ul>
                  <li>CSX 2009 Cloud Computing</li>
                  <li>CSX 3005 Computer Networks</li>
                  <li>CSX 3006 Database Systems</li>
                  <li>CSX 3008 Operating Systems</li>
                </ul>

                <h2>Hardware and Computer Architecture Group</h2>

                <ul>
                  <li>CSX 3007 Computer Architecture</li>
                </ul>
              </div>
              <div className="order-3 md:row-span-3 md:bg-cs-gray/20 p-4">
                <h1>Major Elective Courses</h1>
                Major Elective Courses are divided into two groups:
                <h2>Major Elective Courses Group 1</h2>which consists of 2
                concentrations including
                <ul>
                  <li>Software Engineering and Development (SED)</li>
                  <li>Informatics and Data Science (IDS)</li>
                </ul>
                <h2>Major Elective Courses Group 2</h2>
                Students are required to choose one concentration out of 2
                concentrations and study 5 subjects (15 credits) from the chosen
                concentration and study 6 subjects (18 credits) from all major
                elective courses.
              </div>
              <div className="order-4 p-4">
                <h1>Group 1(A): Software Engineering and Development</h1>
                <ul>
                  <li>ITX 3004 Information System Analysis and Design</li>
                  <li>ITX 3007 Software Engineering</li>
                  <li>ITX 4104 Software Testing</li>
                  <li>CSX 4107 Web Application Development</li>
                  <li>CSX 4109 Android Application Development</li>
                  <li>CSX 4110 Backend Application Development</li>
                  <li>CSX 4407 Enterprise Application Development</li>
                  <li>
                    CSX 4180-4199 Selected Topic [in Software Engineering]
                  </li>
                </ul>
              </div>
              <div className="order-5 p-4">
                <h1>Group 1(B): Informatics and Data Science</h1>
                <ul>
                  <li>CSX 4201 Artificial Intelligence Concepts</li>
                  <li>CSX 4203 Machine Learning</li>
                  <li>CSX 4207 Decision Support and Recommender Systems</li>
                  <li>
                    CSX 4210 Natural Language Processing and Social Interactions
                  </li>
                  <li>CSX 4211 Data Engineering</li>
                  <li>CSX 4212 Data Analytics</li>
                  <li>CSX 4213 Computer Vision</li>
                  <li>CSX 4280-4299 Selected Topic [in Data Science]</li>
                </ul>
              </div>

              <div className="order-8 p-4 col-span-2">
                <h1>Major Elective Courses Group 2</h1>
                <ul>
                  <li>CSX 4108 iOS Application Development</li>
                  <li>CSX 4202 Data Mining</li>
                  <li>CSX 4205 Big Data Analytics</li>
                  <li>CSX 4206 Data Warehousing and Business Intelligence</li>
                  <li>CSX 4208 Deep Learning</li>
                  <li>CSX 4306 Internet of Things</li>
                  <li>CSX 4501 Theory of Computation</li>
                  <li>CSX 4510 Neural Networks</li>
                  <li>CSX 4513 AR/VR Application Development</li>
                  <li>CSX 4514 Cross-platform Application Development</li>
                  <li>CSX 4515 Game Design and Development</li>
                  <li>CSX 4516 Reusability and Design Patterns</li>
                  <li>ITX 2004 UI/UX Design and Prototyping</li>
                  <li>ITX 3003 Business Systems</li>
                  <li>ITX 4212 Predictive Analytics</li>
                  <li>ITX 4213 Artificial Intelligence for Business</li>
                  <li>ITX 4502 Tech Startup</li>
                  <li>ITX 4509 Cybersecurity</li>
                  <li>ITX 4517 Software Configuration Management</li>
                  <li>ITX 4518 Blockchain and Digital Currencies</li>
                  <li>ITX 4519 Internetworking Workshop</li>
                  <li>CSX 4600-4699 Selected Topics</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="tabs-profileJustify"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabJustify"
          >
            <div className="curriculum grid grid-cols-1 md:grid-cols-3">
              <div className="p-4">
                <h1>Language Courses</h1>
                <ul>
                  <li>ELE 1001 Communicative English I</li>
                  <li>ELE 1002 Communicative English II</li>
                  <li>ELE 2000 Academic English</li>
                  <li>ELE 2001 Advanced Academic English</li>
                  <li>
                    GE 1403 Communication in Thai or GE 1408 Thai Usage (for
                    Thai students from International Program)
                  </li>
                  <li>
                    or GE 1409 Thai Language for intercultural communication
                    (for non-Thai students)
                  </li>
                </ul>
              </div>

              <div className="p-4">
                <h1>Humanities Courses</h1>
                <ul>
                  <li>GE 2102 Human Heritage and Globalization</li>
                </ul>
                <h1>Social Science Courses</h1>
                <ul>
                  <li>GE 2202 Ethics</li>
                  <li>BBA 1001 Business Exploration</li>
                </ul>
                <h1>Science and Mathemetics Courses</h1>
                <ul>
                  <li>GE 1302 Ecology and Sustainability</li>
                  <li>IBE 1122 Accounting for Entrepreneurs</li>
                </ul>
              </div>

              <div className="p-4">
                <h1>Free Elective Courses</h1>
                Students can take free elective courses of 12 credits from any
                faculty in Assumption University upon completion of the
                prerequisite.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculumn2022;
