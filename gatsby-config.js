/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Joel Clark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-link`
  ],
  pathPrefix: "/folio",
}