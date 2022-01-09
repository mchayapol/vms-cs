import * as React from "react";
import Layout from "../components/layout";
import Main from "../components/main";
import TopNews from "../components/top-news";
import BlogList from "../components/blog-list";
import Admission from "../components/admission";
import "@themesberg/flowbite";

const IndexPage = () => {
  return (
    <Layout>
      <TopNews />
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/2 items-center px-4 pt-4">
          <Admission />
        </div>
        <div className="w-full md:w-1/2 items-center px-4 pt-4">
          <BlogList />
        </div>
      </div>
      <Main />
    </Layout>
  );
};

export default IndexPage;
