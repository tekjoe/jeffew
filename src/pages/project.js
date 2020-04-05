import React from "react"

import Layout from "../components/layout"
import ProjectPage from "../components/ProjectPage"
import Container from "../components/Container"

import SEO from "../components/seo"

const Project = () => (
  <Layout>
    <SEO title="Project Page" />
    <Container>
      <ProjectPage />
    </Container>
  </Layout>
)

export default Project
