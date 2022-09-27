import type { NextPage } from 'next'
import Head from 'next/head'
import { TestComponent } from '../components/testing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Public Assembly</title>
      </Head>
      <TestComponent />
    </div>
  )
}

export default Home
