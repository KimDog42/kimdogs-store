import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from './../components/TopBar';
import Profile from './../components/profile';
import {SSRProvider} from '@react-aria/ssr';
import CardV1 from '../components/Main/CardV1';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen scroll-smooth">
      <Head>
        <title>KimDog.store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SSRProvider>
      <TopBar/>
      </SSRProvider>
    </div>
  )
}

export default Home
