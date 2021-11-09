import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Header from '../components/header/Header'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Hermeline | Home</title>
      </Head>
     <Header />
    </main>
  )
}

export default Home
