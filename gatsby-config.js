module.exports = {
  siteMetadata: {
    title: `Dan Tang`,
    siteUrl: `https://www.dantang.co.uk`,
    description: `Dan Tang's Personal Blog`,
    author: `Dan Tang`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}
