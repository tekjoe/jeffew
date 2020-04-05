import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import Button from "./Button"
import CTASection from "./CTASection"
import Image from "./image"

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
    margin: 4rem 0 0 0;
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
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
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
          <h2>Bookmark</h2>
          <p>
            This project required me to build a fully custom split keyboard the
            likes which has never been seen.
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
      <CTASection />
    </ProjectSection>
  )
}
