import React from "react"
import styled from "styled-components"
import Image from "./image"

const Masthead = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`
Masthead.Image = styled.div`
  margin-bottom: 2rem;
`
Masthead.CTA = styled.div`
  h1 {
    margin-bottom: 2.5rem;
    line-height: 1.2;
    font-size: ${({ theme }) => theme.typography.h4};
  }
  @media (min-width: 768px) {
    position: absolute;
    width: 50%;
    background: ${({ theme }) => theme.background};
    bottom: 4rem;
    padding: 3rem 3rem 0 0;
    h1 {
      font-size: ${({ theme }) => theme.typography.h1};
    }
  }
`

const Button = styled.a`
  background: ${({ theme }) => theme.elementBackground};
  display: inline-block;
  color: ${({ theme }) => theme.background};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  padding: 1rem 3rem;
  cursor: pointer;
  text-transform: uppercase;
`

export default () => {
  return (
    <Masthead>
      <Masthead.Image>
        <Image />
      </Masthead.Image>
      <Masthead.CTA>
        <h1>Hey, my name-a Jeff and I love building custom keyboards</h1>
        <Button>About Me</Button>
      </Masthead.CTA>
    </Masthead>
  )
}
