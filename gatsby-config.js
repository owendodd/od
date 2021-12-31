/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        path: `./content`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    }
  ],
}
