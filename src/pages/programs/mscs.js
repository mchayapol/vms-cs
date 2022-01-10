import * as React from "react";
import Layout from "../../components/layout";

const MsProgramPage = () => {
  return (
    <Layout>
      <div className="container m-auto relative">
        <h1 className="text-sm lg:text-4xl font-bold font-heading text-center md:text-left">
          MSCS Program
        </h1>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <div className="p4">
            <p>
              Our MSCS program is designed to enrich creative minds with solid
              foundation in computer science. Our curriculum, courses, and
              facilities are designed to foster creativity and innovativeness as
              students gain the core knowledge through theoretical learning and
              hands-on practices.
            </p>
            <p>
              Our faculties are qualified experts in various fields, both
              academic and industrial. Many faculty members are actively
              involved within the industry. They are reachable not only in
              classrooms, but also in labs and research groups that students can
              participate in.
            </p>
            <p>
              Most importantly, we are fully an international university, with a
              truly international learning environment, and a culture of
              entrepreneurial minds.{" "}
            </p>
          </div>
          <div className="p4">
            <h1 className="font-bold text-xl text-cs-orange">Study Plan</h1>
            <h2 className="text-cs-orange">
              Thesis Option (Plan A): Coursework and Thesis (12-credit Thesis)
            </h2>
            <div className="grid grid-cols-2 ml-4 mb-4">
              <div>Preparatory Courses</div>
              <div>Non-credits</div>
              <div>Required Courses</div>
              <div>9 credits</div>
              <div>Elective Courses</div>
              <div>15 credits</div>
              <div>Thesis</div>
              <div>12 credits</div>
              <div>Total</div>
              <div>36 credits</div>
            </div>

            <h2 className="text-cs-orange">
              Non-thesis Option (Plan B): Coursework and Independent Study
            </h2>
            <div className="grid grid-cols-2 ml-4">
              <div>Preparatory Courses</div>
              <div>Non-credits</div>
              <div>Required Courses</div>
              <div>9 credits</div>
              <div>Elective Courses</div>
              <div>24 credits</div>
              <div>Independent Study</div>
              <div>3 credits</div>
              <div>Total</div>
              <div>36 credits</div>{" "}
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 bg-cs-orange/20">
            <div className="p-4">
              <div>
                <h1 className="font-bold text-xl text-cs-orange">
                  Qualification for Admission
                </h1>
                <p>
                  <b>
                    The following admission requirements (recommended) for any
                    prospective students to enter the program. :{" "}
                  </b>
                  <ol className="pl-6 list-decimal">
                    <li>
                      Bachelor’s degree from an accredited institution. The
                      applicants must graduate from the following academic
                      fields: Computer Science, Information Technology,
                      Telecommunications Science, Engineering or related tield.
                    </li>
                    <li>
                      Three recommendation letters from lecturers or employers
                    </li>
                    <li>Required GPA of at least 2.5</li>
                  </ol>
                </p>
              </div>
            </div>
            <div className="p-4">
              <div>
                <h1 className="font-bold text-xl text-cs-orange">
                  Entrance Requirements
                </h1>

                <p>
                  <ol>
                    <li>A completed application form</li>
                    <li>
                      Official transcript from the previous university attended
                      (2 copies)
                    </li>
                    <li>Bachelor's degree certificate (2 copies)</li>
                    <li>
                      Citizen Identification Card and Residence Registration -
                      For Thai Applicants (2 copies)
                    </li>
                    <li>Passport - For Non-Thai Applicants (2 copies)</li>
                    <li>
                      Photographs formal attire, not in graduation gown (Six,
                      1x1-inch size)
                    </li>
                    <li>
                      Letter of recommendation from former instructors or
                      employers at the time of the application (3 letters)
                    </li>
                  </ol>
                </p>
                <p>
                  <b>
                    Note: All documents must be endorsed with signature and
                    submitted in person within the last day application period.
                    Otherwise, the application will not be considered and the
                    applicant will not be allowed for the Admission interview.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-3 bg-cs-gray/20">
            <div className="p-4 curriculum">
              <h1 className="font-bold text-xl text-cs-orange">Curriculum</h1>
              <h1>Preparatory Courses</h1>
              <ul>
                <li>Upper Intermediate Academic Writing</li>
                <li>Computer Programming & Data Structures</li>
                <li>Computing Systems</li>
              </ul>
              <h1>Required Courses</h1>
              <ul>
                <li>
                  Advanced Computing Systems
                  <li>Computability, Complexity and Algorithms</li>
                  <li>Programming Languages and Compiler</li>
                  <li>Independent study</li>
                  <li>Master Project</li>
                </li>
              </ul>
              <h1>Thesis</h1>
            </div>

            <div className="p4 curriculum">
              <div className="p-4 ">
                <h1>Elective Courses</h1>
                <ul>
                  <li>Computer Network and Internet Security</li>
                  <li>Principles of Software Engineering</li>
                  <li>Artificial Intelligence</li>
                  <li>Data Mining</li>
                  <li>Natural Language Understanding and Processing</li>
                  <li>Cloud Computing and Big Data</li>
                  <li>Data Analysis and Visualization</li>
                  <li>Data Warehousing and Business Intelligences</li>
                  <li>Database Management Systems</li>
                  <li>Pattern Recognition and Machine Learning</li>
                  <li>Neural Networks and Deep Learning</li>
                  <li>Blockchain Technology and Cryptocurrency</li>
                  <li>Recommender Systems</li>
                  <li>Computer Graphics</li>
                  <li>Computer Vision</li>
                </ul>
              </div>
            </div>

            <div className="p4 curriculum">
              <div className="p-4 ">
                <ul>
                  <li>Augmented and Virtual Environments</li>
                  <li>User Interface and User Experience (UI/UX)</li>
                  <li>Web Technology, Applications and Security</li>
                  <li>Mobile Computing</li>
                  <li>Principles of the Theory of Computation</li>
                  <li>Ubiquitous Computing and Internet of Things (IoT)</li>
                  <li>Parallel Algorithms</li>
                  <li>Computational Geometry</li>
                  <li>Information and Coding Theory</li>
                  <li>Image Processing</li>
                  <li>Computational Models of Decision Making</li>
                  <li>Graduate Seminar in Computer Science</li>
                  <li>Selected Topics in Computer Science</li>
                  <li>Directed Individual Study in Computer Science</li>
                  <li>Advanced Computer Communications</li>
                  <li>Advanced Topics in Computer Science </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MsProgramPage;
