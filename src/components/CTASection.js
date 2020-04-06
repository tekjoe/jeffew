import React from "react"
import styled from "styled-components"
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
    font-size: 2rem;
    margin-bottom: 3rem;
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
      line-height: 1.2;
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
        <Button.Inverse to="/">Contact Me</Button.Inverse>
      </CTASection.Body>
    </CTASection>
  )
}
