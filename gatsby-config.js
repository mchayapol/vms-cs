module.exports = {
  // pathPrefix: `/vmscs`,
  siteMetadata: {
    siteUrl: "https://www.cs.au.edu",
    title: "VMS Computer Science",
    author: "Chayapol Moemeng"
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://portal.scitech.au.edu/blog/index.php?graphql",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-28232509-2",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        // icon: "src/images/icon.png",
        icon: "src/images/cs-au-logo.png",        
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
