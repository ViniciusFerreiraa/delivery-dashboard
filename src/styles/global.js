import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.normal};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.heading};
  }
`

export default GlobalStyles
