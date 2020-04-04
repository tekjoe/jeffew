import React from "react"
import styled from "styled-components"
import Image from "./image"
import Button from "./Button"

const CTASection = styled.section`
  margin: 2rem;
  @media (min-width: 768px) {
    margin: 10rem 2rem;
  }
`

CTASection.Body = styled.div`
  text-align: center;
  margin: 5rem 0;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    line-height: 1;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-bottom: 0;
      margin-right: 1rem;
      flex: 2;
      text-align: left;
      font-size: 3rem;
    }
    a {
      margin-left: 2rem;
      flex: 1;
    }
  }
`

CTASection.Span = styled.span`
  height: 1px;
  background: ${({ theme }) => theme.lightGray};
  flex: 2;
`

export default () => {
  return (
    <CTASection>
      <CTASection.Body>
        <h2>Interested in doing a project together?</h2>
        <CTASection.Span />
        <Button.Inverse>Contact Me</Button.Inverse>
      </CTASection.Body>
    </CTASection>
  )
}
