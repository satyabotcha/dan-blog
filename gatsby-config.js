module.exports = {
  siteMetadata: {
    title: `Dan Tang`,
    siteUrl: `https://www.dantang.co.uk`,
    description: `Personal Blog of Dan Tang`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
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
