import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Main from "../components/main";
import HeaderNews from "../components/header-news";

const IndexPage = () => {
  return (
    <Layout>
      <header class="bg-white dark:bg-gray-800">
        <Navbar />
        <HeaderNews />
      </header>

      <Main />
    </Layout>
  );
};

export default IndexPage;
