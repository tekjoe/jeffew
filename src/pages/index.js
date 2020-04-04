import React from "react"

import Container from "../components/Container"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Masthead from "../components/Masthead"
import AboutSection from "../components/AboutSection"
import CTASection from "../components/CTASection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Masthead />
      <AboutSection />
      <CTASection />
    </Container>
  </Layout>
)

export default IndexPage
