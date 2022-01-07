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
      <div className={`container post-${id}`}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
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
