import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import Button from "../components/Button"
import CTASection from "../components/CTASection"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/Container"
import Image from "../components/keyboard"
import SEO from "../components/seo"

const ProjectSection = styled.section`
  margin: 3rem 2rem;
`

ProjectSection.ImageContainer = styled.div`
  max-height: 550px;
`

ProjectSection.Content = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 4rem 0 2rem 0;
  }
`

ProjectSection.Column = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  &:last-of-type {
    flex: 2;
  }
  @media (min-width: 768px) {
    &:last-of-type {
      margin-left: 10vw;
    }
  }
`

ProjectSection.Controls = styled.div`
  display: flex;
`
ProjectSection.Control = styled.div`
  flex: 1;
  padding: 2rem 0;
  border-top: ${({ theme }) => `1px solid ${theme.lightGray}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.lightGray}`};
  border-left: ${({ variant, theme }) =>
    variant === "left" ? "none" : `1px solid ${theme.lightGray}`};
  text-align: ${({ variant }) => (variant === "left" ? "left" : "right")};
`

export default function Template({ data, pageContext }) {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const imageStyles = {
    desktop: { height: "550px", width: "100%" },
    mobile: { height: "300px", width: "100%" },
  }
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  let featuredImgFluid = frontmatter.image.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <ProjectSection>
          <ProjectSection.ImageContainer>
            {isDesktop ? (
              <Img
                style={imageStyles.desktop}
                fluid={featuredImgFluid}
                imgStyle={{ height: "auto", width: "auto" }}
              />
            ) : (
              <Img
                style={imageStyles.mobile}
                fluid={featuredImgFluid}
                imgStyle={{ height: "auto", width: "auto" }}
              />
            )}
          </ProjectSection.ImageContainer>
          <ProjectSection.Content>
            <ProjectSection.Column>
              <h2>{frontmatter.title}</h2>
              <p>{frontmatter.summary}</p>
              <Button.External.Inverse
                href="https://www.instagram.com/p/B3FxqHynylm7DGKJDyB5VzvW7Hcvc-VS2155l80/"
                target="_blank"
              >
                View Album
              </Button.External.Inverse>
            </ProjectSection.Column>
            <ProjectSection.Column>
              <h3>Project Background</h3>
              <p>{frontmatter.background}</p>
              <h4>Product Previews</h4>
              <Image />
            </ProjectSection.Column>
          </ProjectSection.Content>
          <ProjectSection.Controls>
            <ProjectSection.Control variant="left">
              {pageContext.prev ? (
                <Link to={pageContext.prev.frontmatter.path}>
                  &lt; Previous Project
                </Link>
              ) : null}
            </ProjectSection.Control>
            <ProjectSection.Control variant="right">
              {pageContext.next ? (
                <Link to={pageContext.next.frontmatter.path}>
                  Next Project &gt;
                </Link>
              ) : null}
            </ProjectSection.Control>
          </ProjectSection.Controls>
        </ProjectSection>
        <CTASection />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        summary
        background
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
