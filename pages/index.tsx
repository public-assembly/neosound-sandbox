import { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import { useEnsName } from 'wagmi'
import { shortenAddress } from 'utils'
import { useEditionQuery } from '@public-assembly/zora-editions-audio-minter'
import { formatAudioSrc } from 'utils/adaptEditionAudioSrc'

const Home: NextPage = () => {
  const { data } = useEditionQuery('0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4')
  const { data: ensName } = useEnsName({
    address: data && data[0].creator,
  })

  //SPECIFY THE EDITION TYPE
  const formatMusicNFTEditions = (data: any) => {}

  useEffect(() => {
    if (data) {
      formatMusicNFTEditions(data)
    }
  }, [data])

  return (
    <div>
      <span>{JSON.stringify(data, null, 2)}</span>
    </div>
  )
}

export default Home
