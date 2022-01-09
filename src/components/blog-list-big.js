import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import parse from "html-react-parser";

const BlogListBig = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "News" } } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          date
          id
          uri
          title
          excerpt
          content
          categories {
            nodes {
              name
              slug
            }
          }
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  const posts = data.allWpPost.nodes;
  const p0 = posts[0];
  return (
    <main className="py-12 md:px-20 sm:px-14 px-6">
      {/* <h1>Blogs {posts.length}</h1> */}

      <div className="sm:flex items-center shadow-md shadow-gray-800">
        <div>
          {/* <pre>{JSON.stringify(p.featuredImage,null,4)}</pre> */}
          {/* <p>{p.featuredImage.node.sourceUrl}</p> */}
          <img
            className="bg-cover"
            src={p0.featuredImage.node.sourceUrl}
            alt=""
          />
        </div>
        <div className="px-5">
          <h1 className="text-gray-800 font-bold text-2xl my-2">{p0.title}</h1>
          <div className="text-gray-700 mb-2 md:mb-6">
            {/* <div dangerouslySetInnerHTML={{ __html: p.excerpt }} /> */}
            {parse(p0.content.substring(0, p0.content.indexOf("<!--more-->")))}
          </div>

          {/* <pre>{p.content}</pre> */}
          <div className="flex justify-between mb-2">
            <span className="font-thin text-sm">{p0.date}</span>
            <span className="sm:block  mb-2 text-gray-800 font-bold ">
              Read more
            </span>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense grid-flow-rows grid grid-flow-col auto-cols-max mt-6 space-x-6 "> */}
      <div className="flex flex-row flex-wrap mt-6 space-x-6 ">
        {posts.slice(1, 6).map((p, i) => (
          <SmallCard post={p} key={i} />
        ))}
      </div>
    </main>
  );
};

const SmallCard = ({ post }) => (
  <div className="max-w-xs shadow-md shadow-gray-800 mb-4">
    <img src={post.featuredImage.node.sourceUrl} alt="" />
    <div>
      <h2 className="mt-2 mx-2 my-2 font-bold text-cs-gray text-lg">
        {post.title}
      </h2>
      <p className="text-gray-700 mx-4 mb-2">
        {parse(post.content.substring(0, post.content.indexOf("<!--more-->")))}
      </p>
      <div className="mx-2 my-1 mt-4 flex justify-between">
        <span className="font-thin text-sm">{post.date}</span>
        <span className="mb-2 text-gray-800 font-bold">Read more</span>
      </div>
    </div>
  </div>
);

export default BlogListBig;
