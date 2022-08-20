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
            </Head>
            <Component {...pageProps} />
          </TransitionPage>
        </AnimatePresence>
      </MDXProvider>
    </Provider>
  )
}
