import React, { useState } from "react"
import PropTypes from "prop-types"
import Container from "./Container"
import styled from "styled-components"
import { motion } from "framer-motion"
import menu from "../images/menu.svg"
import { Link } from "gatsby"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  h2 {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    justify-content: initial;
    margin: 4rem 2rem 2rem 2rem;
  }
`

const MobileNav = styled(motion.nav)`
  position: absolute;
  padding: 4rem 2rem;
  text-align: right;
  right: 0;
  top: 0;
  height: 100%;
  color: white;
  font-weight: bold;
  z-index: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.elementBackground};
  ul {
    list-style-type: none;
    padding-bottom: 0.75rem;
    &:last-of-type {
      padding-top: 0.75rem;
    }
    li {
      padding: 0.75rem 0;
      a {
        color: white;
        text-decoration: none;
      }
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
    &:last-of-type {
      margin-right: 0;
    }
  }
`

Navbar.Logo = styled.img`
  object-fit: contain;
`
Navbar.Menu = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
  z-index: 2;
  @media (min-width: 768px) {
    display: none;
  }
`

Navbar.Link = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`

const Header = ({ siteTitle }) => {
  const [isToggled, setIsToggled] = useState(false)
  const toggleMenu = () => {
    setIsToggled(!isToggled)
  }
  const variants = {
    open: {
      width: "70vw",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.15,
        staggerChildren: 0.03,
        delayChildren: 0.2,
        staggerDirection: -1,
      },
      transitionEnd: {
        display: "block",
      },
    },
    closed: {
      width: 0,
      opacity: 0.1,
      transition: {
        duration: 0.15,
        staggerChildren: 0.03,
        staggerDirection: 1,
        when: "afterChildren",
      },
      transitionEnd: { display: "none" },
    },
  }
  const item = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }
  return (
    <header>
      <Container>
        <Navbar>
          <h2>{siteTitle}</h2>
          <Navbar.Menu src={menu} onClick={toggleMenu} />
          <DesktopNav>
            <DesktopNav.Navigation>
              <li>
                <Navbar.Link to="/">Home</Navbar.Link>
              </li>
              <li>
                <Navbar.Link to="/portfolio/">Portfolio</Navbar.Link>
              </li>
              <li>Contact Me</li>
            </DesktopNav.Navigation>
          </DesktopNav>
        </Navbar>
        <MobileNav
          animate={isToggled ? "open" : "closed"}
          variants={variants}
          initial={false}
        >
          <motion.ul>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navbar.Link to="/">Home</Navbar.Link>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navbar.Link to="/portfolio">Portfolio</Navbar.Link>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navbar.Link to="/">Contact Me</Navbar.Link>
            </motion.li>
          </motion.ul>
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
