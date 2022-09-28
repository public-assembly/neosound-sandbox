import type { NextPage } from 'next'
import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/views/Grid'
import { ListView } from 'components/views/List/ListView'
import { useState } from 'react'

const Home: NextPage = () => {
  const [view, setView] = useState('list')

  return (
    <div className="mt-[150px]">
      <ViewsToggle setView={setView} view={view} />
      {view === 'grid' ? <GridView /> : <ListView />}
    </div>
  )
}

export default Home
