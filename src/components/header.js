import React, { useState } from "react"
import PropTypes from "prop-types"

import Container from "./Container"
import styled from "styled-components"
import { motion } from "framer-motion"
import menu from "../images/menu.svg"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  @media (min-width: 768px) {
    justify-content: initial;
    margin: 4rem 2rem 2rem 2rem;
  }
`

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 1.75rem;
  border-radius: 0.5rem;
  left: 2rem;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: 1rem;
  width: calc(100vw - 4rem);
  background: ${({ theme }) => theme.elementBackground};
  ul {
    list-style-type: none;
    padding-bottom: 0.75rem;
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      padding: 0.75rem 0;
    }
  }
`

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`

DesktopNav.Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  margin-left: 2rem;
  li {
    margin-right: 2rem;
    font-weight: bold;
    letter-spacing: 1.8px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.grayishViolet};
  }
`

const Button = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  width: 100%;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
`

Navbar.Logo = styled.img`
  object-fit: contain;
`
Navbar.Menu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  const [isToggled, setIsToggled] = useState(false)
  const toggleMenu = () => {
    setIsToggled(!isToggled)
  }
  const variants = {
    open: { display: "block", opacity: 1 },
    closed: { opacity: 0, transitionEnd: { display: "none" } },
  }
  return (
    <header>
      <Container>
        <Navbar>
          <h1>{siteTitle}</h1>
          <Navbar.Menu src={menu} onClick={toggleMenu} />
          <DesktopNav>
            <DesktopNav.Navigation>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Contact Me</li>
            </DesktopNav.Navigation>
          </DesktopNav>
        </Navbar>
        <MobileNav
          animate={isToggled ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
          initial={false}
        >
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </MobileNav>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
