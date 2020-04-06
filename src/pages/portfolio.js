import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"
import PortfolioSection from "../components/PortfolioSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container>
        <PortfolioSection projects={projects} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          id
        }
      }
    }
  }
`

export default Portfolio
