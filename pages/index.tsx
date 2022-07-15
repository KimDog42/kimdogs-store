import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from './../components/TopBar';
import Profile from './../components/profile';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KimDog.store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar/>
    </div>
  )
}

export default Home
