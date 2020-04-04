import React from "react"

import Container from "../components/Container"
import PortfolioSection from "../components/PortfolioSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Container>
      <PortfolioSection />
    </Container>
  </Layout>
)

export default Portfolio
