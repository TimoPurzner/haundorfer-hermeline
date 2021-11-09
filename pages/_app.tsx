import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <React.Fragment>
        <Head>
         <title>Hermeline</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
}

export default MyApp
