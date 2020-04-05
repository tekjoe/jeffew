import React from "react"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import Image from "../components/image"
import Button from "../components/Button"
import CTASection from "./CTASection"

const PortfolioSection = styled.section`
  margin: 2rem;
  @media (min-width: 768px) {
    margin: 4rem 0;
  }
`

PortfolioSection.Project = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 6rem;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
`

PortfolioSection.ImageWrapper = styled.div`
  flex: 1;
`

PortfolioSection.Body = styled.div`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  flex: 1;
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.darkGray};
  }
  @media (min-width: 768px) {
    margin: 0 2rem;
    h2 {
      font-size: 3rem;
    }
  }
`

export default () => {
  const projects = [
    { name: "Ortho Keeb", id: 1 },
    { name: "Computer Desk", id: 2 },
    { name: "Artisan Dildon't", id: 3 },
  ]
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const imageStyles = {
    desktop: { flex: 1, margin: "0 2rem" },
    mobile: { margin: "2rem 0" },
  }
  return (
    <PortfolioSection>
      {projects.map(project => (
        <PortfolioSection.Project key={project.id}>
          {isDesktop ? (
            <Image style={imageStyles.desktop} />
          ) : (
            <Image style={imageStyles.mobile} />
          )}
          <PortfolioSection.Body>
            <h2>{project.name}</h2>
            <p>
              I'm an experience DIYer who specializes in building artisinal,
              hand-crafted mechanical keyboards. I focus on using only the
              finest sustainable materials and eating ass. When I'm not in my
              workshop or training for marathons, I enjoy sitting baxen,
              relaxen, and craxen some cold crispies. I tend to sip on double
              IPAs, but I've been known to step outside of my comfort zone and
              try single IPAs.
            </p>
            <Button.Inverse to="/project">View Project</Button.Inverse>
          </PortfolioSection.Body>
        </PortfolioSection.Project>
      ))}
      <CTASection />
    </PortfolioSection>
  )
}
