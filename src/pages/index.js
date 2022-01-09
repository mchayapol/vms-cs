import * as React from "react";
import Layout from "../components/layout";
import Main from "../components/main";
import TopNews from "../components/top-news";
import BlogList from "../components/blog-list";

const IndexPage = () => {
  return (
    <Layout>
      <TopNews />
      <BlogList />
      <Main />
    </Layout>
  );
};

export default IndexPage;
