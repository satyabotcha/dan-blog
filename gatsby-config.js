module.exports = {
  siteMetadata: {
    title: `Dan Tang`,
    siteUrl: `https://www.dantang.co.uk`,
    description: `Personal Blog of Dan Tang`,
  },
  /* Your site config here */
  plugins: [
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
