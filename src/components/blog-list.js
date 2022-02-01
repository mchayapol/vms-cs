import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  format,
  //  formatDistance, formatRelative, subDays
} from "date-fns";
// import parse from "html-react-parser";

const BlogList = ({ itemCount = 4 }) => {
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
    <div className="container">
      <div className="md:w-full relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 mb-4">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${p0.featuredImage?.node.sourceUrl})`,
              backgroundBlendMode: "multiply",
            }}
          ></div>
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <a
              className="flex items-baseline mt-3 text-red-600 hover:text-blue-900 focus:text-blue-900"
              href={`/blogs/${p0.slug}`}
            >
              <span>Read more</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              {p0.title}
            </h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight">
              {format(new Date(p0.date), "dd MMM yyyy")}
            </h4>
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="hidden md:block  z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">
              {format(new Date(p0.date), "dd MMM yyyy")}
            </h4>
            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              {p0.title}
            </h3>
            <p className="text-sm text-gray-400 text-justify">
              {p0.categories.nodes.map((cat, i) => cat.name).join(",")}
            </p>
            <a
              className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900"
              href={`/blogs/${p0.slug}`}
            >
              <span>Read more</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-64 px-4">
        <div className="w-full px-4">
          <div className="flex flex-col items-center relative">
            <div className="w-full">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <div className="flex flex-auto flex-wrap"></div>
                <input
                  placeholder="Search by position"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                  <button className="cursor-pointer w-8 h-8 text-gray-600 outline-none focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-up w-4 h-4"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute shadow bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
              <div className="flex flex-col w-full">
                {posts.slice(1, 1 + itemCount).map((p, i) => (
                  <a href={`/blogs/${p.slug}`}>
                    <BlogItem post={p} key={i} />
                  </a>
                ))}
              </div>
            <a
              href="https://portal.scitech.au.edu/blog"
              class="inline-block px-6 py-2 border-2 
                m-4 item-right
              border-cs-gray
              text-neutral-50
              bg-cs-orange
              font-medium text-xs leading-tight uppercase rounded-full 
              hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              See all news at VMS Blogs
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({ post }) => (
  <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-orange-100">
    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
      <div className="w-6 flex flex-col items-center">
        <div className="flex relative max-w-8 max-h-8 bg-orange-500 justify-center items-center mr-2 w-4 h-4 mt-1 ">
          <img alt={post.title} src={post.featuredImage.node.sourceUrl} />{" "}
        </div>
      </div>
      <div className="w-full items-center flex">
        <div className="w-full items-center flex">
          <div className="mx-2 -mt-1 w-full ">
            {post.title}
            <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
              {format(new Date(post.date), "dd MMM yyyy")}
            </div>
          </div>
          <div className="w-1/2 flex">
            {post.categories.nodes.map((cat, i) => (
              <div
                key={i}
                className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-yellow-100 border border-teal-300 "
              >
                <div className="text-xs font-normal leading-none max-w-full flex-initial">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogList;
