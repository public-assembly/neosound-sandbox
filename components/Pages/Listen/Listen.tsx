import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/views/Grid'
import { ListView } from 'components/views/List/ListView'
import { useState } from 'react'

const Listen = () => {
  const [view, setView] = useState('list')

  return (
    <div>
      <ViewsToggle setView={setView} view={view} />
      {view === 'grid' ? <GridView /> : <ListView />}
    </div>
  )
}

export default Listen
