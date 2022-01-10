import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const WpPost = ({
  data: {
    wpPost: { title, content, id },
  },
}) => {
  return (
    <Layout>

      <div className="container m-auto">
        <h1 className="ml-4 mt-4 text-sm lg:text-4xl font-bold font-heading text-center md:text-left">
          {title}
        </h1>        
        <div className="m-4" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;
export default WpPost;
