import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html {
    font-family: "Montserrat", 'Helvetica Neue', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Inknut Antiqua", serif;
    font-weight: 500;
    line-height: 1.06;
  }
`
