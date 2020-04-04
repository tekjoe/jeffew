import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  background: ${({ theme }) => theme.elementBackground};
  display: inline-block;
  color: ${({ theme }) => theme.background};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
`
Button.Inverse = styled(Link)`
  background: ${({ theme }) => theme.background};
  display: inline-block;
  color: ${({ theme }) => theme.darkGray};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.darkGray};
`

export default Button
