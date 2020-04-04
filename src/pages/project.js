import React from "react"

import Layout from "../components/layout"
import CTASection from "../components/CTASection"
import Container from "../components/Container"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project Page" />
    <Container>
      <Image />
      <CTASection />
    </Container>
  </Layout>
)

export default ProjectPage
