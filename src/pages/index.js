import React from 'react'

import Hero from '../components/Hero/Hero.js'
import Footer from '../components/Footer/Footer.js'
import Beaver from '../components/Beaver/Beaver.js'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Header from '../components/Header/Header.js'

import './index.css'

const IndexPage = ({data}) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />
    <Hero/>
    <Beaver/>
    <div className="Conclusion">
      <div className="ConclusionGroup">
        <h1>That's it for now!</h1>
        <h2>Want to reach out? <a href="mailto:joelhenryclark@gmail.com" className="clickableText">email me</a></h2>
      </div>

      <Footer id="footer"/>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
