import type { NextPage } from 'next'
import Head from 'next/head'
import { AudioPlayer } from '@public-assembly/audio-player-ui'
import { fakePlaylist } from 'utils/fakePlaylist'
import { useState } from 'react'

const Home: NextPage = () => {
  const [nft, setNFT] = useState(fakePlaylist[0])
  
  return (
    <div>
      <Head>
        <title>Public Assembly: Audio Player UI</title>
      </Head>
      {fakePlaylist.map((nft) => (
        <div
          key={nft.id}
          className=" mb-4 cursor-pointer border p-3"
          onClick={() => setNFT(nft)}>
          {nft.artist} - {nft.title}
        </div>
      ))}
      <AudioPlayer playlist={fakePlaylist} nft={nft} />
    </div>
  )
}

export default Home
