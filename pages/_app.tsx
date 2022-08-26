import Head from 'next/head'
import { MDXProvider } from '../src/components'
import { AnimatePresence } from 'framer-motion'
import TransitionPage from '../src/layouts/TransitionPage'
import { useTypedStore, wrapper } from '../src/store'
import { PersistGate } from 'redux-persist/integration/react'
import '../public/styles/globals.css'

function App({ Component, pageProps }) {
  const store = useTypedStore()
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
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
    </PersistGate>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setAuthState(false))
      console.log('State on server', store.getState())
      return {
        props: {
          authState: false
        }
      }
    }
)

export default wrapper.withRedux(App)
