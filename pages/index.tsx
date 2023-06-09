import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>Awesome Website</h1>
      </header>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        Powered by {'Oliver Bunda'}
      </footer>
    </div>
  )
}

export default Home
