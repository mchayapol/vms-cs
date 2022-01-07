import * as React from "react";
import Layout from "../components/layout";
import Main from "../components/main";
import HeaderNews from "../components/header-news";

const IndexPage = () => {
  return (
    <Layout>
      <HeaderNews />
      <Main />
    </Layout>
  );
};

export default IndexPage;
