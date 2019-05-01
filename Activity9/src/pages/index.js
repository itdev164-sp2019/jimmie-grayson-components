import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { ShareButtonList } from "../components/SocialShareButton/index"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ShareButtonList
      addThisPubId="ra-5cc2479663fea1d6"
      contentTitle="Fake it"
      contentImage="http://placekitten.com/g/300/700"
      contentDesciption="Something about kitty cats."
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
