import type { NextPage } from 'next'
import React from 'react'
import Header from '../components/header/Header'
import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'
import Hero from '../components/hero/Hero';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Hermeline | Home</title>
      </Head>
      <Hero className={styles.hero} />
      <main>
        <Header />
        <h1>Wer? Was? Wo?</h1>
        <p>
          Die Hermeline Traininern in Haundorf am Bolzplatz.
          </p>
        <img className={styles.field} src="/img/football_field.jpg"/>
        <p>
          Dies geschieht normalerweise unregelmäßig jeden Sonntag! Für mehr Informationen siehe <Link href="/current">hier</Link>
        </p>
      </main>
    </div>
  )
}

export default Home
