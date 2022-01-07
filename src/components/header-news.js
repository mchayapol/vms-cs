import React, { useState } from "react";

const jumboNewsList = [
  {
    title: "Software Engineering",
    featuredImage: "https://www.cs.au.edu/assets/img/IMG_4117.jpg",
    content:
      "A track for software engineers, from software developers to software process management, whose aim is to develop the skills to further their career path in the software development industry. Candidates following this track focus on every aspects of software engineering, including software process and management, software development, and application platforms and architectures.",
    url: "https://www.cs.au.edu/track_page.html#sed",
  },
  {
    title: "Informatics and Data Science",
    featuredImage: "https://www.cs.au.edu/assets/img/IMG_1289.png",
    content:
      "Recommended for researchers and innovators, our CS Informatics Track takes graduate students on the road towards becoming a true expert in computer science. Built on solid CS fundamentals, candidates can select to specialize in a field of modern computing technologies, such as ambient intelligence, computer vision and big data analytics.",
    url: "https://www.cs.au.edu/track_page.html#ids",
  },
  {
    title: "Network Technology and Infrastructure",
    featuredImage: "https://www.cs.au.edu/assets/img/IMG_4117.jpg",
    content:
      "The world is being connected. Networking is an essential element to make it possible. This track focuses on building strong computer network skills from architectural level to management. This includes network design, Cisco networking, network security, Internet of Things, business continuity planning and management, etc.",
    url: "https://www.cs.au.edu/track_page.html#net",
  },
  {
    title: "Enterprise Systems",
    featuredImage: "https://www.cs.au.edu/assets/img/IMG_1289.png",
    content:
      "Enterprises demand skilled people to join their teams. This track focuses on essential elements of enterprise software, such as sales and distribution management system, manufacturing management system, finance and accounting information system, etc. Moreover, this track does not only focus only technical skills, but also soft skills necessary to colaborate as a team.",
    url: "https://www.cs.au.edu/track_page.html#erp",
  },
];

const HeaderNews = ({ children }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [news, setNews] = useState(jumboNewsList[0]);
  const selectNews = (idx) => {
    setNews(jumboNewsList[idx]);
    setCurrentNewsIndex(idx);
  };

  return (
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div class="flex justify-center order-1 mr-0 mt-6 md:mt-0 md:space-y-3 md:flex-col">
        {jumboNewsList.map((news, i) => {
          const activeButton =
            "w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none";
          const regularButton =
            "w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500";
          return (
            <button
              className={currentNewsIndex === i ? activeButton : regularButton}
              onClick={() => selectNews(i)}
            ></button>
          );
        })}        
      </div>

      <div className={`flex flex-col items-center w-full md:flex-row order-2 transition-all`}>
        {/* <div class="flex flex-col items-center w-full md:flex-row md:w-1/2"> */}
        <div class="max-w-lg md:mx-12 md:order-2">
          <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
            {news.title}
          </h1>
          <p class="mt-4 text-gray-600 dark:text-gray-300">{news.content}</p>
          <div class="mt-6">
            <a
              href={news.url}
              class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
            >
              Read more
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center w-full h-96 md:w-1/2 order-3">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src={news.featuredImage}
            alt={news.title}
          />
        </div>
      </div>
    </div>
  );
};
export default HeaderNews;
