import * as React from "react";
import Layout from "../../components/layout";

const PhdProgramPage = () => {
  return (
    <Layout>
      <div className="container m-auto relative">
        <h1 className="ml-4 mt-4 text-sm lg:text-4xl font-bold font-heading text-center md:text-left">
          PHDCS: Doctor of Philosophy in Computer Science
        </h1>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 m-4">
          <div className="p4">
            <p>
              Our PhDCS program is internationally standardized. Its focus is on
              nurturing students to always see beyond the frontier of knowledge
              and be skillful at pushing it. It solidifies student's foundation
              in computer science, and systematically nurtures student's
              analysis and synthesis masteries. The graduate will have gained
              essential quality to be research scientist as well as university
              lecturer.
              <p>
                Our faculties are qualified experts in various fields, both
                academic and industrial. Many faculty members are actively
                involved within the industry. They are reachable not only in
                classrooms, but also in labs and research groups that students
                can participate in.
              </p>
              <p>
                Most importantly, we are fully an international university, with
                a truly international learning environment, and a culture of
                entrepreneurial minds.{" "}
              </p>
            </p>
          </div>
          <div className="p4">
            <h1 className="font-bold text-xl text-cs-orange">Study Plan</h1>
            <h2 className="text-cs-orange">
              Coursework and Dissertation (Master’s degree holder)
            </h2>
            <div className="grid grid-cols-2 ml-4 mb-4">
              <div>Foundation Courses</div>
              <div>Non-credits</div>
              <div>Elective Courses</div>
              <div>12 credits</div>
              <div>Dissertation</div>
              <div>36 credits</div>
              <div>Total</div>
              <div>48 credits</div>
            </div>

            <h2 className="text-cs-orange">
              Coursework and Dissertation (Bachelor’s degree holder)
            </h2>
            <div className="grid grid-cols-2 ml-4">
              <div>Required Courses</div>
              <div>9 credits</div>
              <div>Elective Courses</div>
              <div>15 credits</div>
              <div>Dissertation</div>
              <div>48 credits</div>
              <div>Total</div>
              <div>72 credits</div>{" "}
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 bg-cs-orange/20">
            <div className="p-4">
              <div>
                <h1 className="font-bold text-xl text-cs-orange">
                  Qualification for Admission
                </h1>
                <p>
                  <ol className="pl-6 list-decimal">
                    <li>
                      <h2 className="font-bold">
                        Type 1: Coursework and Dissertation (Master’s degree
                        holder)
                      </h2>
                      Master’s degree in Computer Science or equivalent, or in
                      other related technical fields, from the institutions
                      accredited by the Ministry of Education, Thailand or by
                      the official accreditation organization of the country
                      where the institution is based.
                    </li>
                    <li>
                      <h2 className="font-bold">
                        Type 2.2: Coursework and Dissertation (Bachelor’s degree
                        holder)
                      </h2>
                      Bachelor’s degree in Computer Science or equivalent, or in
                      other related technical fields, from the institutions
                      accredited by the Ministry of Education, Thailand or by
                      the official accreditation organization of the country
                      where the institution is based.
                    </li>
                    <li>
                      GPA of at least 3.25 on a scale of 4.0, or equivalent
                    </li>
                    <li>Required GPA of at least 2.5</li>
                    <li>
                      Three letters of recommendation from lecturers or
                      employers
                    </li>
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
                <ol className="pl-6 list-decimal">
                    <li>A completed application form</li>
                    <li>
                      Official transcript from the previous university attended
                      (2 copies)
                    </li>
                    <li>
                      Master degree certificate for Type 2.1 or Bachelor degree
                      certificate for Type 2.2
                    </li>
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
              <h1>Foundation Courses</h1>
              <ul>
                <li>Advanced Computer Systems</li>
                <li>Computability, Complexity and Algorithms</li>
                <li>Programming Languages and Compiler</li>
              </ul>
              <h1>Dissertation</h1>
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

export default PhdProgramPage;
