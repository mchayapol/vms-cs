import * as React from "react";
import Layout from "../components/layout";
import Main from "../components/main";
import HeaderNews from "../components/header-news";
import BlogList from "../components/blog-list";

const IndexPage = () => {
  return (
    <Layout>
      <HeaderNews />
      <BlogList />
      <Main />
    </Layout>
  );
};

export default IndexPage;
