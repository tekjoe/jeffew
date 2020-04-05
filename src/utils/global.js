import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html {
    font-family: "Montserrat", 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
    p {
    line-height: 1.7;
    color: ${({ theme }) => theme.darkGray};
    margin-bottom: 2rem;
  }
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Inknut Antiqua", serif;
    font-weight: 500;
    line-height: 1.06;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.typography.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4};}

  h5 {
    font-size: ${({ theme }) => theme.typography.h5};
  }
  small {
    font-size: ${({ theme }) => theme.typography.small};
  }
`
