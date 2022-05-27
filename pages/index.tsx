import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className=' max-h-screen overflow-hidden lg:max-w-6xl mx-auto'  >
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9' >
      {/* SideBar */}
      <SideBar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
      </main>
    </div>
  )
}

export default Home
