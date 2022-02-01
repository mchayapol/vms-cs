/*
Show at most 5 news
TODO: It is hardcoded for 4 top news.
*/
import React from "react";

const topNewsList = [
  {
    title: "Software Engineering",
    featuredImage: "images/heading1.jpg",
    content:
      "A track for software engineers, from software developers to software process management, whose aim is to develop the skills to further their career path in the software development industry. Candidates following this track focus on every aspects of software engineering, including software process and management, software development, and application platforms and architectures.",
    url: "programs/bscs",
  },
  {
    title: "Informatics and Data Science",
    featuredImage: "images/IMG_1289.png",
    content:
      "Recommended for researchers and innovators, our CS Informatics Track takes graduate students on the road towards becoming a true expert in computer science. Built on solid CS fundamentals, candidates can select to specialize in a field of modern computing technologies, such as ambient intelligence, computer vision and big data analytics.",
    url: "programs/bscs",
  },
  // {
  //   title: "Network Technology and Infrastructure",
  //   featuredImage: "https://www.cs.au.edu/assets/img/IMG_4117.jpg",
  //   content:
  //     "The world is being connected. Networking is an essential element to make it possible. This track focuses on building strong computer network skills from architectural level to management. This includes network design, Cisco networking, network security, Internet of Things, business continuity planning and management, etc.",
  //   url: "https://www.cs.au.edu/track_page.html#net",
  // },
  // {
  //   title: "Enterprise Systems",
  //   featuredImage: "https://www.cs.au.edu/assets/img/IMG_1289.png",
  //   content:
  //     "Enterprises demand skilled people to join their teams. This track focuses on essential elements of enterprise software, such as sales and distribution management system, manufacturing management system, finance and accounting information system, etc. Moreover, this track does not only focus only technical skills, but also soft skills necessary to colaborate as a team.",
  //   url: "https://www.cs.au.edu/track_page.html#erp",
  // },
];

const TopNews = ({ children }) => {
  // const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  // const [news, setNews] = useState(topNewsList[0]);
  // const selectNews = (idx) => {
  //   setNews(topNewsList[idx]);
  //   setCurrentNewsIndex(idx);
  // };

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="sp-slideshow">
        <input
          id="button-1"
          type="radio"
          name="radio-set"
          className="sp-selector-1"
          defaultChecked={true}
        />
        <label htmlFor="button-1" className="button-label-1"></label>

        <input
          id="button-2"
          type="radio"
          name="radio-set"
          className="sp-selector-2"
        />
        <label htmlFor="button-2" className="button-label-2"></label>

        {/* <input
          id="button-3"
          type="radio"
          name="radio-set"
          className="sp-selector-3"
        />
        <label htmlFor="button-3" className="button-label-3"></label>

        <input
          id="button-4"
          type="radio"
          name="radio-set"
          className="sp-selector-4"
        /> */}
        <label htmlFor="button-4" className="button-label-4"></label>

        {/* <input
          id="button-5"
          type="radio"
          name="radio-set"
          className="sp-selector-5"
        />
        <label htmlFor="button-5" className="button-label-5"></label> */}

        <label htmlFor="button-1" className="sp-arrow sp-a1"></label>
        <label htmlFor="button-2" className="sp-arrow sp-a2"></label>
        {/* <label htmlFor="button-3" className="sp-arrow sp-a3"></label>
        <label htmlFor="button-4" className="sp-arrow sp-a4"></label> */}
        {/* <label htmlFor="button-5" className="sp-arrow sp-a5"></label> */}

        <div className="sp-content">
          <div className="sp-parallax-bg"></div>
          <ul className="sp-slider clearfix">
            <li>
              <News news={topNewsList[0]} />
            </li>
            <li>
              <News news={topNewsList[1]} />
            </li>
            {/* 
            <li>
              <News news={topNewsList[2]} />
            </li>
            <li>
              <News news={topNewsList[3]} />
            </li> */}
            {/* <li>
              <img
                src="https://tympanus.net/Tutorials/CSS3FluidParallaxSlideshow/images/image5.png"
                alt="image05"
              />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const News = ({ news }) => (
  <div
    key={news.title}
    className={`flex flex-col items-center w-full md:flex-row order-2`}
  >
    <div className="w-xs md:max-w-full md:mx-12 md:order-2">
      <h1 className="text-xl md:text-3xl font-medium tracking-wide text-cs-orange md:text-4xl">
        {news.title}
      </h1>
      <p className="text-sm md:text-lg mt-4 text-neutral-50">{news.content}</p>
      <div className="mt-6">
        <a
          href={news.url}
          className="block bg-cs-orange px-3 py-2 font-semibold text-sm text-center text-white transform bg-cs-yellow rounded-md inline hover:bg-auspark-red"
        >
          Read more
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center order-3  h-0 w-0  lg:w-full lg:h-full ">
      <img
        className="object-cover h-fit w-fit invisible md:visible rounded-md"
        src={news.featuredImage}
        alt={news.title}
      />
    </div>
  </div>
);
export default TopNews;

/* <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
<div className="flex justify-center order-1 mr-0 mt-6 md:mt-0 md:space-y-3 md:flex-col">
  {jumboNewsList.map((news, i) => {
    const activeButton =
      "w-3 h-3 mx-2 bg-cs-orange rounded-full md:mx-0 focus:outline-none";
    const regularButton =
      "w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500";
    return (
      <button
        key={i}
        className={
          currentNewsIndex === i ? activeButton : regularButton
        }
        onClick={() => selectNews(i)}
      ></button>
    );
  })}
</div>

<div
  key={news.title}
  className={`flex flex-col items-center w-full md:flex-row order-2 lg:animate-fadein`}
>
  <div className="w-xs md:max-w-full md:mx-12 md:order-2">
    <h1 className="text-3xl font-medium tracking-wide text-cs-orange md:text-4xl">
      {news.title}
    </h1>
    <p className="mt-4 text-neutral-50">{news.content}</p>
    <div className="mt-6">
      <a
        href={news.url}
        className="block bg-cs-orange px-3 py-2 font-semibold text-center text-white transform bg-cs-yellow rounded-md md:inline hover:bg-auspark-red"
      >
        Read more
      </a>
    </div>
  </div>
  <div className="flex items-center justify-center order-3  h-0 w-0  lg:w-full lg:h-full ">
    <img
      className="object-cover h-fit w-fit invisible md:visible rounded-md"
      src={news.featuredImage}
      alt={news.title}
    />
  </div>
</div>
</div> */
