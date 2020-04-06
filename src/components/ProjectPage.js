import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import Button from "./Button"
import CTASection from "./CTASection"
import Image from "./image"
import { Link } from "gatsby"

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
  text-align: ${({ variant, theme }) =>
    variant === "left" ? "left" : "right"};
`

export default () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const imageStyles = {
    desktop: { height: "550px", width: "100%" },
    mobile: { height: "300px", width: "100%" },
  }
  const data = useStaticQuery(graphql`
    query {
      projectImage: file(relativePath: { eq: "keyboard_project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <ProjectSection>
        <ProjectSection.ImageContainer>
          {isDesktop ? (
            <Img
              fixed={data.projectImage.childImageSharp.fluid}
              style={imageStyles.desktop}
              imgStyle={{ height: "auto", width: "auto" }}
            />
          ) : (
            <Img
              fixed={data.projectImage.childImageSharp.fluid}
              style={imageStyles.mobile}
              imgStyle={{ height: "auto", width: "auto" }}
            />
          )}
        </ProjectSection.ImageContainer>
        <ProjectSection.Content>
          <ProjectSection.Column>
            {/* Project Name */}
            <h2>Ortho Keeb</h2>
            <p>
              This project required me to build a fully custom split keyboard
              the likes which has never been seen.
            </p>
            <Button.External.Inverse
              href="https://www.instagram.com/p/B3FxqHynylm7DGKJDyB5VzvW7Hcvc-VS2155l80/"
              target="_blank"
            >
              View Album
            </Button.External.Inverse>
          </ProjectSection.Column>
          <ProjectSection.Column>
            <h3>Project Background</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              ducimus optio fugit, ex nulla provident asperiores repellat
              quibusdam harum nemo quisquam officiis quaerat expedita aliquid,
              reprehenderit necessitatibus vero a veniam sapiente saepe! Nulla
              voluptatem totam omnis quod unde assumenda eum soluta. Quibusdam
              totam vel corrupti in placeat officia, maxime incidunt?
            </p>
            <h4>Product Previews</h4>
            <Image />
          </ProjectSection.Column>
        </ProjectSection.Content>
        <ProjectSection.Controls>
          <ProjectSection.Control variant="left">
            <Link to="/project">&lt; Previous Project</Link>
          </ProjectSection.Control>
          <ProjectSection.Control variant="right">
            <Link to="/project">Next Project &gt;</Link>
          </ProjectSection.Control>
        </ProjectSection.Controls>
      </ProjectSection>
      <CTASection />
    </>
  )
}
