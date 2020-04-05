import React from "react"
import styled from "styled-components"
import Jeffew from "./jeffew"
import Button from "./Button"

const AboutSection = styled.section`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

AboutSection.Image = styled.div`
  padding-bottom: 2rem;
  flex: 1;
  @media (min-width: 768px) {
    padding-bottom: 0;
    margin-right: 2rem;
  }
`
AboutSection.Body = styled.div`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  flex: 1;
  p {
    color: ${({ theme }) => theme.darkGray};
  }
  @media (min-width: 768px) {
    margin-left: 2rem;
    h2 {
      font-size: 3rem;
    }
  }
`

export default () => {
  return (
    <AboutSection>
      <AboutSection.Image>
        <Jeffew />
      </AboutSection.Image>
      <AboutSection.Body>
        <h2>About Me</h2>
        <p>
          I'm an experience DIYer who specializes in building artisinal,
          hand-crafted mechanical keyboards. I focus on using only the finest
          sustainable materials and eating ass. When I'm not in my workshop or
          training for marathons, I enjoy sitting baxen, relaxen, and craxen
          some cold crispies. I tend to sip on double IPAs, but I've been known
          to step outside of my comfort zone and try single IPAs.
        </p>
        <p>
          I'm an experience DIYer who specializes in building artisinal,
          hand-crafted mechanical keyboards. I focus on using only the finest
          sustainable materials and eating ass. When I'm not in my workshop or
          training for marathons, I enjoy sitting baxen, relaxen, and craxen
          some cold crispies. I tend to sip on double IPAs, but I've been known
          to step outside of my comfort zone and try single IPAs.
        </p>
        <Button.Inverse to="/portfolio">Go To Portfolio</Button.Inverse>
      </AboutSection.Body>
    </AboutSection>
  )
}
