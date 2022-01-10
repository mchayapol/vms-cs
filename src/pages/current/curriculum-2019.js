import React from "react";
import Layout from "../../components/layout";
import "tw-elements";

const Curriculumn2019 = () => {
  return (
    <Layout>
      <section className="m-10">
        <h2 className="font-bold text-xl text-cs-orange">2019 Curriculum</h2>
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
                <h1>Basic Courses</h1>
                <ul>
                  <li>CSX 2001 Introduction to Information Technology</li>
                  <li>CSX 2002 Calculus</li>
                  <li>CSX 2003 Principles of Statistics</li>
                  <li>CSX 2004 UI/UX Design and Prototyping</li>
                  <li>CSX 2005 Design Thinking</li>
                  <li>CSX 2006 Mathematics and Statistics for Data Science</li>
                  <li>CSX 2007 Data Science</li>
                  <li>CSX 2008 Mathematics Foundation for Computer Science</li>
                  <li>CSX 2009 Cloud Computing</li>
                </ul>
              </div>
              <div className="order-2 md:col-span-2 p-4">
                <h1>Major Required Courses</h1>
                <ul>
                  <li>CSX 3001 Fundamentals of Computer Programming</li>
                  <li>CSX 3002 Object-Oriented Concepts and Programming</li>
                  <li>CSX 3003 Data Structure and Algorithms</li>
                  <li>CSX 3004 Programming Languages</li>
                  <li>CSX 3005 Computer Networks</li>
                  <li>CSX 3006 Database Systems</li>
                  <li>CSX 3007 Computer Architecture</li>
                  <li>CSX 3008 Operating Systems</li>
                  <li>CSX 3009 Algorithm Design</li>
                  <li>CSX 3010 Senior Project I</li>
                  <li>CSX 3011 Senior Project II</li>
                </ul>
              </div>
              <div className="order-3 md:row-span-3 md:bg-cs-gray/20 p-4">
                <h1>Major Elective Courses</h1>
                Major Elective Courses are divided into two groups:
                <h2>Major Elective Courses Group 1</h2>which consists of 4
                concentrations including
                <ul>
                  <li>Software Engineering and Development (SED)</li>
                  <li>Informatics and Data Science (IDS)</li>
                  <li>Network Technology and Infrastructure (NET)</li>
                  <li>Enterprise Systems (ERP)</li>
                </ul>
                <h2>Major Elective Courses Group 2</h2>
                Students are required to choose one concentration out of 4
                concentrations and study 5 subjects (15 credits) from the chosen
                concentration and study 5 subjects (15 credits) from all major
                elective courses.
              </div>
              <div className="order-4 p-4">
                <h1>Group 1(A): Software Engineering and Development</h1>
                <ul>
                  <li>CSX 4101 Information System Analysis and Design</li>
                  <li>CSX 4102 Software Engineering</li>
                  <li>CSX 4103 Requirement Engineering</li>
                  <li>CSX 4104 Software Testing</li>
                  <li>CSX 4105 IT Project Management</li>
                  <li>CSX 4106 Enterprise Architecture</li>
                  <li>CSX 4107 Web Application Development</li>
                  <li>CSX 4108 iOS Application Development</li>
                  <li>CSX 4109 Android Application Development</li>
                </ul>
              </div>
              <div className="order-5 p-4">
                <h1>Group 1(B): Informatics and Data Science</h1>
                <ul>
                  <li>CSX 4201 Artificial Intelligence Concepts</li>
                  <li>CSX 4202 Data Mining</li>
                  <li>CSX 4203 Machine Learning</li>
                  <li>CSX 4204 Biometrics</li>
                  <li>CSX 4205 Big Data Analytics</li>
                  <li>CSX 4206 Data Warehousing and Business Intelligence</li>
                  <li>CSX 4207 Decision Support and Recommender Systems</li>
                  <li>CSX 4208 Deep Learning</li>
                  <li>CSX 4209 Intelligent System Development</li>
                  <li>
                    CSX 4210 Natural Language Processing and Social Interactions
                  </li>
                </ul>
              </div>
              <div className="order-6 p-4">
                <h1>Group 1(C): Network Technology and Infrastructure</h1>
                <ul>
                  <li>CSX 4301 Network Design</li>
                  <li>CSX 4302 Cisco Networking Workshop</li>
                  <li>CSX 4303 Network Security</li>
                  <li>CSX 4304 Network Management</li>
                  <li>CSX 4305 Heterogeneous Wireless Networks</li>
                  <li>CSX 4306 Internet of Things</li>
                  <li>CSX 4307 Business Continuity Planning and Management</li>
                </ul>
              </div>
              <div className="order-7 p-4">
                <h1>Group 1(D): Enterprise Systems</h1>
                <ul>
                  <li>CSX 4401 Business Systems</li>
                  <li>CSX 4402 Sales and Distribution Management System</li>
                  <li>CSX 4403 Manufacturing Management System</li>
                  <li>CSX 4404 Supply Chain Management System</li>
                  <li>CSX 4405 Finance and Accounting Information System</li>
                  <li>CSX 4406 Customer Relationship Management System</li>
                  <li>CSX 4407 Enterprise Application Development</li>
                  <li>CSX 4408 Enterprise Database System</li>
                  <li>CSX 4409 Blockchain Technology</li>
                </ul>
              </div>
              <div className="order-8 p-4">
                <h1>Major Elective Courses Group 2</h1>
                <ul>
                  <li>CSX 4501 Theory of Computation</li>
                  <li>CSX 4502 Tech Startup</li>
                  <li>CSX 4503 Information Systems Security</li>
                  <li>CSX 4504 Digital Marketing</li>
                  <li>CSX 4505 Digital Transformation</li>
                  <li>CSX 4506 Image Processing</li>
                  <li>CSX 4507 Information Retrieval and Search Engines</li>
                  <li>CSX 4508 Quantitative Research for Digital Business</li>
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
                  <li>BG 1001 English I</li>
                  <li>BG 1002 English II</li>
                  <li>BG 2000 English III</li>
                  <li>BG 2001 English IV</li>
                </ul>

                <h1>Humanities Courses</h1>
                <ul>
                  <li>LAW 1201 Business Laws for Entrepreneurs</li>
                </ul>
                <h1>Social Science Courses</h1>
                <ul>
                  <li>GE 2202 Ethics</li>
                  <li>BBA 1001 Business Exploration</li>
                </ul>
                <h1>Science and Mathemetics Courses</h1>
                <ul>
                  <li>BAC 1602 Fundamentals of Financial Accounting I</li>
                  <li>CSX 1001 Basic Mathematics and Statistics</li>
                </ul>
              </div>
              <div className="p-4">
                <h2>
                  Two other General Education Courses can be chosen the
                  following courses
                </h2>
                <ul>
                  <li>GE 1103 Historical Perspectives on Thailand</li>
                  <li>GE 1102 Introduction to Philosophy</li>
                  <li>GE 2102 Human Heritage and Globalization</li>
                  <li>GE 2103 Art of Reasoning</li>
                  <li>GE 2104 Thai Buddhism</li>
                  <li>GE 2105 Introduction to World Religion</li>
                  <li>GE 2106 Logical Thinking and Application</li>
                  <li>
                    GE 2107 Applied Philosophy in Social Sciences and Humanities
                  </li>
                  <li>BBA 2001 Human Behavior</li>
                  <li>GE 1207 Fundamental Psychology</li>
                  <li>GE 1203 Society, Politics and Economics</li>
                  <li>GE 1205 ASEAN Ways</li>
                  <li>GE 1206 Philosophy of Sufficiency Economy</li>
                  <li>GE 2203 Art of Living</li>
                  <li>GE 2205 Communication and Multicultural society</li>
                  <li>GE 2206 Personality Development</li>
                  <li>GE 2207 Sport, Health and Wellness Development</li>
                  <li>GE 2208 Thai Politics and Government</li>
                  <li>BEC 2200 Introduction to Economics</li>
                  <li>GE 1302 Ecology and Sustainability</li>
                  <li>GE 2301 Lifestyles in Dynamic World</li>
                  <li>GE 2302 Climate Change and Human Life</li>
                  <li>GE 2303 Building Brilliant Brain</li>
                  <li>MA 1200 Mathematics for Business</li>
                  <li>GE 1403 Communication in Thai</li>
                  <li>GE 1405 Thai Language and Culture</li>
                  <li>GE 1406 Burmese Language</li>
                  <li>GE 1407 Russian Language</li>
                  <li>GE 3401 Public Speaking in Thai</li>
                </ul>
              </div>

              <div className="p-4">
                <h1>Free Elective Courses</h1>
                Students can take free elective courses of 9 credits from any
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

export default Curriculumn2019;
