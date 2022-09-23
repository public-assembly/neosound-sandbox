import type { NextPage } from 'next'
import { useEditionQuery } from '@public-assembly/zora-editions-audio-minter'
import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/views/Grid'
import { ListView } from 'components/views/List/ListView'
import { useState } from 'react'

const Home: NextPage = () => {
  const { data } = useEditionQuery('0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4')
  const [view, setView] = useState('list')

  return (
    <div className="px-12  mt-[100px]">
      <ViewsToggle setView={setView} />
      {view === 'grid' ? <GridView /> : <ListView />}
    </div>
  )
}

export default Home
