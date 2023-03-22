import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '../../components/banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleOnBannerClick = () => {
    console.log("Hi Banner Component")
  }

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText='View Stores Nearby'
          handleClick={handleOnBannerClick}
        />
      </main>
    </>
  )
}
