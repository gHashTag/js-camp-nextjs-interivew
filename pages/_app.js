import Head from 'next/head'
import { MDXProvider } from '../src/components'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from '../src/layouts/TransitionPage'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import '../public/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MDXProvider>
        <AnimatePresence exitBeforeEnter>
          <TransitionPage>
            <Head>
              <title>JS Camp</title>
              <link rel="stylesheet" href="/styles/reset.css" media="screen" />
              <link rel="icon" href="/images/favicon.png" type="image/png" />
              <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </TransitionPage>
        </AnimatePresence>
      </MDXProvider>
    </Provider>
  )
}
