import React from 'react'

import Hero from '../components/Hero/Hero.js'
import Footer from '../components/Footer/Footer.js'
import Beaver from '../components/Beaver/Beaver.js'

import '../layouts/index.css'

const IndexPage = () => (
  <div>
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
