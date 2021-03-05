/* eslint-disable no-use-before-define */
import { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components'
import GlobalStyles from '../styles/globals'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyles />
    </Layout>
  )
}

export default MyApp
