import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { MDXProvider } from '../src/components'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from '../src/layouts/TransitionPage'
import { Provider } from 'react-redux'
import { store } from '../src/store'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MDXProvider>
        <ThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter>
            <TransitionPage>
              <Head>
                <title>JS Camp</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
                  rel="stylesheet"
                />
              </Head>
              <Component {...pageProps} />
            </TransitionPage>
          </AnimatePresence>
        </ThemeProvider>
      </MDXProvider>
    </Provider>
  )
}
