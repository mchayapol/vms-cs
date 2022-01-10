exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "News" } } } }
        }
      ) {
        nodes {
          id
          uri
          slug
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }

  const { allWpPost } = result.data;

  // Define the template to use
  const template = require.resolve(`./src/templates/wp-posts.js`);

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map((post) => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: `/blogs/${post.slug}`,
        component: template,
        context: post,
      });
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /tw-elements/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
