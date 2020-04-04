import React from "react"
import styled from "styled-components"
import Container from "./Container"

const Footer = styled.footer`
  padding: 3rem;
  background: ${({ theme }) => theme.darkGray};
`

Footer.Nav = styled.nav`
  color: ${({ theme }) => theme.background};
  text-align: center;
  ul {
    list-style-type: none;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    li {
      margin-bottom: 2rem;
      letter-spacing: 1.8px;
      font-weight: 500;
      font-size: 0.9rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 768px) {
    ul {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      li {
        margin: 0 1rem;
      }
    }
  }
`
export default () => {
  return (
    <Footer>
      <Container>
        <Footer.Nav>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </Footer.Nav>
      </Container>
    </Footer>
  )
}
