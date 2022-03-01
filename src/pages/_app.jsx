import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="application-name" content="Provu" />
        <meta name="description" content="Provu " />
        <meta
          name="keywords"
          content="empréstimo, empréstimo pessoal, empréstimo online"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
