import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Header from '../components/header/Header'
import Head from 'next/head'

const CurrentPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Hermeline | Aktuelles</title>
      </Head>
     <Header/>
    </main>
  )
}

export default CurrentPage
